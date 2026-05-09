import type { CertificateView } from "@/backend.d";

function toDate(ts: unknown): Date {
  if (ts === null || ts === undefined) return new Date(0);
  if (ts instanceof Date) return ts;
  if (typeof ts === "object" && ts !== null && "toDate" in ts) {
    return (ts as { toDate: () => Date }).toDate();
  }
  if (typeof ts === "bigint") {
    const n = Number(ts);
    return new Date(n > 1e15 ? n / 1_000_000 : n);
  }
  if (typeof ts === "number") {
    return new Date(ts > 1e15 ? ts / 1_000_000 : ts);
  }
  return new Date(String(ts));
}

function formatDate(ts: unknown): string {
  return toDate(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function downloadCertificateAsPdf(
  certificate: CertificateView,
  userName: string,
): void {
  const issuedDate = formatDate(certificate.issuedAt);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Certificate - ${certificate.courseName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #fff; font-family: 'Inter', sans-serif; }
    .page {
      width: 210mm;
      min-height: 148mm;
      padding: 12mm 14mm;
      margin: 0 auto;
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .border-outer {
      position: absolute;
      inset: 5mm;
      border: 2px solid rgba(234,179,8,0.5);
      border-radius: 8px;
      pointer-events: none;
    }
    .border-inner {
      position: absolute;
      inset: 7mm;
      border: 1px solid rgba(234,179,8,0.25);
      border-radius: 6px;
      pointer-events: none;
    }
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #eab308;
      text-transform: uppercase;
      margin-bottom: 4mm;
    }
    .divider {
      width: 30mm;
      height: 1px;
      background: linear-gradient(90deg, transparent, #eab308, transparent);
      margin: 3mm auto;
    }
    .subtitle {
      font-size: 8pt;
      font-weight: 500;
      letter-spacing: 0.25em;
      color: #94a3b8;
      text-transform: uppercase;
      margin-bottom: 4mm;
    }
    .title {
      font-family: 'Playfair Display', serif;
      font-size: 22pt;
      font-weight: 700;
      color: #f8fafc;
      line-height: 1.2;
      margin-bottom: 3mm;
    }
    .name {
      font-family: 'Playfair Display', serif;
      font-size: 18pt;
      font-weight: 700;
      color: #eab308;
      margin-bottom: 2mm;
    }
    .course-label {
      font-size: 8pt;
      color: #94a3b8;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1mm;
    }
    .course-name {
      font-family: 'Playfair Display', serif;
      font-size: 14pt;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 4mm;
    }
    .meta {
      display: flex;
      gap: 10mm;
      justify-content: center;
      margin-top: 3mm;
      padding-top: 3mm;
      border-top: 1px solid rgba(255,255,255,0.1);
      width: 100%;
    }
    .meta-item { text-align: center; }
    .meta-label { font-size: 7pt; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; }
    .meta-value { font-size: 8pt; font-weight: 600; color: #cbd5e1; margin-top: 0.5mm; }
    .seal {
      position: absolute;
      bottom: 10mm;
      right: 12mm;
      width: 14mm;
      height: 14mm;
      border-radius: 50%;
      background: radial-gradient(circle, #eab308 0%, #b45309 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16pt;
    }
    @media print {
      @page { size: A5 landscape; margin: 0; }
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="border-outer"></div>
    <div class="border-inner"></div>
    <div class="logo">IT Fresher Hub</div>
    <div class="subtitle">Certificate of Completion</div>
    <div class="divider"></div>
    <p style="font-size:8pt;color:#94a3b8;margin-bottom:3mm;">This certifies that</p>
    <div class="name">${userName}</div>
    <p style="font-size:8pt;color:#94a3b8;margin-bottom:1mm;">has successfully completed the course</p>
    <div class="course-name">${certificate.courseName}</div>
    <div class="divider"></div>
    <div class="meta">
      <div class="meta-item">
        <div class="meta-label">Issued On</div>
        <div class="meta-value">${issuedDate}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Verification Code</div>
        <div class="meta-value">${certificate.verificationCode}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Platform</div>
        <div class="meta-value">IT Fresher Hub</div>
      </div>
    </div>
    <div class="seal">🏆</div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); window.close(); }, 400);
    };
  <\/script>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank", "width=900,height=700");
  if (!win) {
    const a = document.createElement("a");
    a.href = url;
    a.download = `certificate-${certificate.courseId}.html`;
    a.click();
  }
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

/**
 * Intern Certificate PDF — green-gold theme, labeled "Intern Certificate of Completion"
 */
export function downloadInternCertificateAsPdf(
  certificate: CertificateView,
  userName: string,
): void {
  const issuedDate = formatDate(certificate.issuedAt);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intern Certificate - ${certificate.courseName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #fff; font-family: 'Inter', sans-serif; }
    .page {
      width: 210mm;
      min-height: 148mm;
      padding: 12mm 14mm;
      margin: 0 auto;
      background: linear-gradient(135deg, #0a1f12 0%, #0d2318 50%, #0a1f12 100%);
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .border-outer {
      position: absolute;
      inset: 5mm;
      border: 2.5px solid rgba(52,211,153,0.6);
      border-radius: 8px;
      pointer-events: none;
    }
    .border-inner {
      position: absolute;
      inset: 7.5mm;
      border: 1px solid rgba(52,211,153,0.25);
      border-radius: 6px;
      pointer-events: none;
    }
    .badge {
      position: absolute;
      top: 9mm;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(52,211,153,0.12);
      border: 1px solid rgba(52,211,153,0.4);
      border-radius: 20px;
      padding: 1.5mm 5mm;
      font-size: 6.5pt;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: #34d399;
      text-transform: uppercase;
    }
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 11pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: #34d399;
      text-transform: uppercase;
      margin-bottom: 2mm;
      margin-top: 4mm;
    }
    .divider {
      width: 30mm;
      height: 1px;
      background: linear-gradient(90deg, transparent, #34d399, transparent);
      margin: 3mm auto;
    }
    .subtitle {
      font-size: 8pt;
      font-weight: 500;
      letter-spacing: 0.25em;
      color: #94a3b8;
      text-transform: uppercase;
      margin-bottom: 4mm;
    }
    .name {
      font-family: 'Playfair Display', serif;
      font-size: 18pt;
      font-weight: 700;
      color: #34d399;
      margin-bottom: 2mm;
    }
    .course-label {
      font-size: 8pt;
      color: #94a3b8;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1mm;
    }
    .course-name {
      font-family: 'Playfair Display', serif;
      font-size: 14pt;
      font-weight: 700;
      color: #e2e8f0;
      margin-bottom: 4mm;
    }
    .meta {
      display: flex;
      gap: 10mm;
      justify-content: center;
      margin-top: 3mm;
      padding-top: 3mm;
      border-top: 1px solid rgba(52,211,153,0.2);
      width: 100%;
    }
    .meta-item { text-align: center; }
    .meta-label { font-size: 7pt; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; }
    .meta-value { font-size: 8pt; font-weight: 600; color: #cbd5e1; margin-top: 0.5mm; }
    .seal {
      position: absolute;
      bottom: 10mm;
      right: 12mm;
      width: 14mm;
      height: 14mm;
      border-radius: 50%;
      background: radial-gradient(circle, #34d399 0%, #059669 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16pt;
    }
    @media print {
      @page { size: A5 landscape; margin: 0; }
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="border-outer"></div>
    <div class="border-inner"></div>
    <div class="badge">✦ Intern Achievement ✦</div>
    <div class="logo">IT Fresher Hub</div>
    <div class="subtitle">Intern Certificate of Completion</div>
    <div class="divider"></div>
    <p style="font-size:8pt;color:#94a3b8;margin-bottom:3mm;">This certifies that</p>
    <div class="name">${userName}</div>
    <p style="font-size:8pt;color:#94a3b8;margin-bottom:1mm;">has successfully completed the course</p>
    <div class="course-name">${certificate.courseName}</div>
    <div class="divider"></div>
    <div class="meta">
      <div class="meta-item">
        <div class="meta-label">Issued On</div>
        <div class="meta-value">${issuedDate}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Verification Code</div>
        <div class="meta-value">${certificate.verificationCode}</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Platform</div>
        <div class="meta-value">IT Fresher Hub</div>
      </div>
    </div>
    <div class="seal">🎓</div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() { window.print(); window.close(); }, 400);
    };
  <\/script>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank", "width=900,height=700");
  if (!win) {
    const a = document.createElement("a");
    a.href = url;
    a.download = `intern-certificate-${certificate.courseId}.html`;
    a.click();
  }
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
