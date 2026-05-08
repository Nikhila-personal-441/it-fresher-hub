import { j as jsxRuntimeExports, m as motion, A as Award, h as Skeleton, B as BookOpen } from "./index-Cmp-4xpj.js";
import { u as useCertificates, C as CertificateCard, d as downloadCertificateAsPdf } from "./pdfDownload-B-F462Uo.js";
const USER_DISPLAY_NAME = "Learner";
function CertificatesPage() {
  const { data: certificates, isLoading } = useCertificates();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-8",
      "data-ocid": "certificates.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "bg-card border border-border rounded-2xl p-6 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none",
                  style: { background: "oklch(0.65 0.18 85)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "p-3 rounded-xl",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-7 h-7 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "My Certificates" }),
                    !isLoading && certificates && certificates.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-bold",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)",
                          color: "oklch(0.1 0.02 270)"
                        },
                        "data-ocid": "certificates.count_badge",
                        children: certificates.length
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Download and share your course completion certificates." })
                ] })
              ] })
            ]
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            "data-ocid": "certificates.loading_state",
            children: ["c1", "c2"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-72 rounded-2xl" }, k))
          }
        ) : !certificates || certificates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.97 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.4, delay: 0.1 },
            className: "border border-dashed border-border rounded-2xl p-12 text-center space-y-3",
            "data-ocid": "certificates.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-10 h-10 text-muted-foreground mx-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: "No Certificates Yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mx-auto", children: "Complete a course to earn your first certificate. Each completed course earns you a downloadable certificate of completion." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: certificates.map((cert, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1, duration: 0.45 },
            "data-ocid": `certificates.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CertificateCard,
              {
                certificate: cert,
                userName: USER_DISPLAY_NAME,
                onDownload: () => downloadCertificateAsPdf(cert, USER_DISPLAY_NAME)
              }
            )
          },
          cert.id
        )) })
      ]
    }
  );
}
export {
  CertificatesPage as default
};
