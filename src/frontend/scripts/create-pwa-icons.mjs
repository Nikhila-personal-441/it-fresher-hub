/**
 * Pure-JS PNG generator for PWA icons.
 * Creates solid-color square PNGs without any native dependencies.
 * Used by vite.config.js buildStart plugin hook.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { deflateSync } from 'zlib';
import { dirname } from 'path';

/**
 * Write a minimal valid PNG file — solid colored square.
 * @param {number} size  - Width and height in pixels
 * @param {string} outputPath - File path to write
 * @param {boolean} maskable  - Use safe-zone padding (20%) for maskable icons
 */
export function generatePNG(size, outputPath, maskable) {
  const width = size;
  const height = size;

  // RGBA pixel data
  const pixels = new Uint8Array(width * height * 4);

  // Background: #0a0a14 (dark navy)
  const bgR = 0x0a, bgG = 0x0a, bgB = 0x14;
  // Accent: #1a73e8 (blue)
  const acR = 0x1a, acG = 0x73, acB = 0xe8;
  // Light: #4da3ff
  const ltR = 0x4d, ltG = 0xa3, ltB = 0xff;

  // Safe zone for maskable: 20% padding on each side
  const pad = maskable ? Math.floor(size * 0.2) : Math.floor(size * 0.1);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;

      // Default background
      let r = bgR, g = bgG, b = bgB, a = 255;

      // Draw a simple gradient circle / icon shape in the center
      const cx = width / 2;
      const cy = height / 2;
      const innerR = (width / 2) - pad;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Outer circle fill (blue)
      if (dist <= innerR) {
        r = acR; g = acG; b = acB;
      }

      // Inner lighter circle
      if (dist <= innerR * 0.55) {
        r = ltR; g = ltG; b = ltB;
      }

      // Graduation cap shape: triangle at top
      const capW = innerR * 0.9;
      const capH = innerR * 0.35;
      const capY = cy - innerR * 0.15;
      if (
        y >= capY - capH && y <= capY &&
        Math.abs(x - cx) <= capW * (1 - (capY - y) / capH)
      ) {
        r = 0xe8; g = 0xf0; b = 0xfe; // white-ish
      }

      // IFH letters region: simple block at bottom
      const textY = cy + innerR * 0.45;
      const textH = innerR * 0.25;
      if (y >= textY && y <= textY + textH && Math.abs(x - cx) <= innerR * 0.5) {
        r = 0xe8; g = 0xf0; b = 0xfe;
      }

      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = a;
    }
  }

  const png = encodePNG(width, height, pixels);

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, png);
  console.log(`[pwa-icons] Written: ${outputPath}`);
}

/**
 * Encode RGBA pixel data as a PNG file (pure JS, no deps).
 */
function encodePNG(width, height, pixels) {
  // PNG signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk: width, height, bit depth 8, color type 6 (RGBA)
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;  // bit depth
  ihdrData[9] = 6;  // RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdr = makeChunk('IHDR', ihdrData);

  // IDAT chunk: filtered scanlines -> deflate
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    scanlines[y * (1 + width * 4)] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const si = (y * width + x) * 4;
      const di = y * (1 + width * 4) + 1 + x * 4;
      scanlines[di] = pixels[si];
      scanlines[di + 1] = pixels[si + 1];
      scanlines[di + 2] = pixels[si + 2];
      scanlines[di + 3] = pixels[si + 3];
    }
  }
  const compressed = deflateSync(scanlines, { level: 6 });
  const idat = makeChunk('IDAT', compressed);

  // IEND chunk
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

function makeChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.concat([typeBytes, data]);
  const crc = crc32(crcBuf);
  const crcBytes = Buffer.alloc(4);
  crcBytes.writeInt32BE(crc, 0);
  return Buffer.concat([len, typeBytes, data, crcBytes]);
}

function crc32(buf) {
  const table = makeCrcTable();
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) | 0;
}

let _crcTable = null;
function makeCrcTable() {
  if (_crcTable) return _crcTable;
  _crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    _crcTable[n] = c;
  }
  return _crcTable;
}
