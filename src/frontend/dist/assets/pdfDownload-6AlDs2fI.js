import { g as createLucideIcon, j as jsxRuntimeExports, m as motion, A as Award, $ as ShieldCheck, d as Button, a0 as Download, v as useActor, p as useQuery, K as useQueryClient, w as createActor } from "./index-DrrDo776.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
function formatDate$1(ts) {
  return new Date(Number(ts) / 1e6).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function CertificateCard({
  certificate,
  userName,
  onDownload,
  compact = false,
  isIntern = false
}) {
  const issuedDate = formatDate$1(certificate.issuedAt);
  const bgGradient = isIntern ? "linear-gradient(135deg, oklch(0.13 0.06 145) 0%, oklch(0.17 0.08 160) 50%, oklch(0.13 0.06 145) 100%)" : "linear-gradient(135deg, oklch(0.15 0.04 270) 0%, oklch(0.18 0.06 280) 50%, oklch(0.15 0.04 270) 100%)";
  const outerBorder = isIntern ? "2px solid oklch(0.65 0.18 140 / 0.7)" : "1.5px solid oklch(0.65 0.18 85 / 0.6)";
  const shimmerColor = isIntern ? "radial-gradient(ellipse 60% 30% at 50% 0%, oklch(0.75 0.2 140 / 0.15) 0%, transparent 70%)" : "radial-gradient(ellipse 60% 30% at 50% 0%, oklch(0.75 0.18 85 / 0.12) 0%, transparent 70%)";
  const innerBorder = isIntern ? "1px solid oklch(0.65 0.18 140 / 0.3)" : "1px solid oklch(0.65 0.18 85 / 0.25)";
  const accentColor = isIntern ? "oklch(0.65 0.2 140)" : "oklch(0.65 0.18 85)";
  const certLabel = isIntern ? "Intern Certificate of Completion" : "Certificate of Completion";
  const sealEmoji = isIntern ? "🎓" : "🏆";
  const btnGradient = isIntern ? "linear-gradient(135deg, oklch(0.55 0.2 140) 0%, oklch(0.45 0.18 155) 100%)" : "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.45, ease: "easeOut" },
      "data-ocid": isIntern ? "certificate.intern_card" : "certificate.card",
      className: `relative overflow-hidden rounded-2xl ${compact ? "" : "shadow-2xl"}`,
      style: { background: bgGradient, border: outerBorder },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: { background: shimmerColor }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute rounded-xl pointer-events-none",
            style: { inset: "8px", border: innerBorder }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative z-10 ${compact ? "p-5" : "p-8"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "p-2.5 rounded-xl shrink-0",
                  style: { background: btnGradient },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-bold tracking-[0.2em] uppercase",
                    style: { color: accentColor },
                    children: "IT Fresher Hub"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[10px] tracking-widest uppercase",
                    style: { color: "oklch(0.6 0.04 270)" },
                    children: certLabel
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl shrink-0", title: "Certificate Seal", children: sealEmoji })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mb-5 h-px w-full",
              style: {
                background: `linear-gradient(90deg, transparent, ${accentColor} / 0.6, transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2 mb-5", children: [
            isIntern && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-[10px] font-bold tracking-widest uppercase mb-1",
                style: { color: accentColor },
                children: "✦ Intern Achievement ✦"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs tracking-widest uppercase",
                style: { color: "oklch(0.55 0.04 270)" },
                children: "This is to certify that"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: `font-display font-bold ${compact ? "text-xl" : "text-3xl"}`,
                style: { color: accentColor },
                children: userName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs tracking-widest uppercase",
                style: { color: "oklch(0.55 0.04 270)" },
                children: "has successfully completed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: `font-display font-bold ${compact ? "text-lg" : "text-2xl"}`,
                style: { color: "oklch(0.92 0.02 270)" },
                children: certificate.courseName
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mb-4 h-px w-full",
              style: {
                background: `linear-gradient(90deg, transparent, ${accentColor} / 0.4, transparent)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5", style: { color: accentColor } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", style: { color: "oklch(0.6 0.04 270)" }, children: [
                "Issued:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-semibold",
                    style: { color: "oklch(0.82 0.04 270)" },
                    children: issuedDate
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ShieldCheck,
                {
                  className: "w-3.5 h-3.5",
                  style: { color: accentColor }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", style: { color: "oklch(0.6 0.04 270)" }, children: [
                "Code:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-mono font-semibold text-[11px]",
                    style: { color: "oklch(0.82 0.04 270)" },
                    children: certificate.verificationCode
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "certificate.download_button",
              onClick: onDownload,
              className: "gap-2 font-semibold",
              style: {
                background: btnGradient,
                color: "oklch(0.1 0.02 270)",
                border: "none"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                "Download PDF"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function useCertificates() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["certificates"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyCertificates();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1e3 * 60 * 5
  });
}
function useCertificateQueryClient() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ["certificates"] });
}
function formatDate(ts) {
  return new Date(Number(ts) / 1e6).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
function downloadCertificateAsPdf(certificate, userName) {
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
        <div class="meta-value">caffeine.ai</div>
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
  setTimeout(() => URL.revokeObjectURL(url), 1e4);
}
function downloadInternCertificateAsPdf(certificate, userName) {
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
        <div class="meta-value">caffeine.ai</div>
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
  setTimeout(() => URL.revokeObjectURL(url), 1e4);
}
export {
  CertificateCard as C,
  useCertificateQueryClient as a,
  downloadInternCertificateAsPdf as b,
  downloadCertificateAsPdf as d,
  useCertificates as u
};
