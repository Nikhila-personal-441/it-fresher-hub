import type { CertificateView } from "@/backend.d";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Download, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

function formatDate(ts: bigint): string {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface CertificateCardProps {
  certificate: CertificateView;
  userName: string;
  onDownload: () => void;
  compact?: boolean;
  /** When true, renders as an "Intern Certificate of Completion" with a distinct green-gold theme */
  isIntern?: boolean;
}

export function CertificateCard({
  certificate,
  userName,
  onDownload,
  compact = false,
  isIntern = false,
}: CertificateCardProps) {
  const issuedDate = formatDate(certificate.issuedAt);

  // Intern certificates use a green-gold gradient; regular ones use deep blue-purple
  const bgGradient = isIntern
    ? "linear-gradient(135deg, oklch(0.13 0.06 145) 0%, oklch(0.17 0.08 160) 50%, oklch(0.13 0.06 145) 100%)"
    : "linear-gradient(135deg, oklch(0.15 0.04 270) 0%, oklch(0.18 0.06 280) 50%, oklch(0.15 0.04 270) 100%)";
  const outerBorder = isIntern
    ? "2px solid oklch(0.65 0.18 140 / 0.7)"
    : "1.5px solid oklch(0.65 0.18 85 / 0.6)";
  const shimmerColor = isIntern
    ? "radial-gradient(ellipse 60% 30% at 50% 0%, oklch(0.75 0.2 140 / 0.15) 0%, transparent 70%)"
    : "radial-gradient(ellipse 60% 30% at 50% 0%, oklch(0.75 0.18 85 / 0.12) 0%, transparent 70%)";
  const innerBorder = isIntern
    ? "1px solid oklch(0.65 0.18 140 / 0.3)"
    : "1px solid oklch(0.65 0.18 85 / 0.25)";
  const accentColor = isIntern ? "oklch(0.65 0.2 140)" : "oklch(0.65 0.18 85)";
  const certLabel = isIntern
    ? "Intern Certificate of Completion"
    : "Certificate of Completion";
  const sealEmoji = isIntern ? "🎓" : "🏆";
  const btnGradient = isIntern
    ? "linear-gradient(135deg, oklch(0.55 0.2 140) 0%, oklch(0.45 0.18 155) 100%)"
    : "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      data-ocid={isIntern ? "certificate.intern_card" : "certificate.card"}
      className={`relative overflow-hidden rounded-2xl ${
        compact ? "" : "shadow-2xl"
      }`}
      style={{ background: bgGradient, border: outerBorder }}
    >
      {/* Shimmer accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: shimmerColor }}
      />

      {/* Inner border */}
      <div
        className="absolute rounded-xl pointer-events-none"
        style={{ inset: "8px", border: innerBorder }}
      />

      <div className={`relative z-10 ${compact ? "p-5" : "p-8"}`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="p-2.5 rounded-xl shrink-0"
              style={{ background: btnGradient }}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: accentColor }}
              >
                IT Fresher Hub
              </p>
              <p
                className="text-[10px] tracking-widest uppercase"
                style={{ color: "oklch(0.6 0.04 270)" }}
              >
                {certLabel}
              </p>
            </div>
          </div>
          <div className="text-3xl shrink-0" title="Certificate Seal">
            {sealEmoji}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-5 h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor} / 0.6, transparent)`,
          }}
        />

        {/* Body */}
        <div className="text-center space-y-2 mb-5">
          {isIntern && (
            <p
              className="text-[10px] font-bold tracking-widest uppercase mb-1"
              style={{ color: accentColor }}
            >
              ✦ Intern Achievement ✦
            </p>
          )}
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.04 270)" }}
          >
            This is to certify that
          </p>
          <h2
            className={`font-display font-bold ${
              compact ? "text-xl" : "text-3xl"
            }`}
            style={{ color: accentColor }}
          >
            {userName}
          </h2>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.55 0.04 270)" }}
          >
            has successfully completed
          </p>
          <h3
            className={`font-display font-bold ${
              compact ? "text-lg" : "text-2xl"
            }`}
            style={{ color: "oklch(0.92 0.02 270)" }}
          >
            {certificate.courseName}
          </h3>
        </div>

        {/* Divider */}
        <div
          className="mb-4 h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor} / 0.4, transparent)`,
          }}
        />

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-5">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span className="text-xs" style={{ color: "oklch(0.6 0.04 270)" }}>
              Issued:{" "}
              <span
                className="font-semibold"
                style={{ color: "oklch(0.82 0.04 270)" }}
              >
                {issuedDate}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              className="w-3.5 h-3.5"
              style={{ color: accentColor }}
            />
            <span className="text-xs" style={{ color: "oklch(0.6 0.04 270)" }}>
              Code:{" "}
              <span
                className="font-mono font-semibold text-[11px]"
                style={{ color: "oklch(0.82 0.04 270)" }}
              >
                {certificate.verificationCode}
              </span>
            </span>
          </div>
        </div>

        {/* Download */}
        <div className="flex justify-center">
          <Button
            data-ocid="certificate.download_button"
            onClick={onDownload}
            className="gap-2 font-semibold"
            style={{
              background: btnGradient,
              color: "oklch(0.1 0.02 270)",
              border: "none",
            }}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
