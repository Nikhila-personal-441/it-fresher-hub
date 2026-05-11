import type { CertificateView } from "@/backend.d";
import { CertificateCard } from "@/components/CertificateCard";
import { useAuth } from "@/contexts/AuthContext";
import { Skeleton } from "@/components/ui/skeleton";
import { useCertificates } from "@/hooks/useCertificates";
import { downloadCertificateAsPdf } from "@/lib/pdfDownload";
import { Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function CertificatesPage() {
  const { data: certificates, isLoading } = useCertificates();
  const { user } = useAuth();
  
  const userName = user?.displayName || "Learner";

  return (
    <div
      className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-8"
      data-ocid="certificates.page"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
      >
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none"
          style={{ background: "oklch(0.65 0.18 85)" }}
        />
        <div className="relative flex items-center gap-4">
          <div
            className="p-3 rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)",
            }}
          >
            <Award className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                My Certificates
              </h1>
              {!isLoading && certificates && certificates.length > 0 && (
                <span
                  className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-sm font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.65 0.18 85) 0%, oklch(0.55 0.16 65) 100%)",
                    color: "oklch(0.1 0.02 270)",
                  }}
                  data-ocid="certificates.count_badge"
                >
                  {certificates.length}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              Download and share your course completion certificates.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      {isLoading ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-ocid="certificates.loading_state"
        >
          {["c1", "c2"].map((k) => (
            <Skeleton key={k} className="h-72 rounded-2xl" />
          ))}
        </div>
      ) : !certificates || certificates.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-dashed border-border rounded-2xl p-12 text-center space-y-3"
          data-ocid="certificates.empty_state"
        >
          <BookOpen className="w-10 h-10 text-muted-foreground mx-auto" />
          <h3 className="font-display font-bold text-lg text-foreground">
            No Certificates Yet
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Complete a course to earn your first certificate. Each completed
            course earns you a downloadable certificate of completion.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert: CertificateView, i: number) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              data-ocid={`certificates.item.${i + 1}`}
            >
              <CertificateCard
                certificate={cert}
                userName={userName}
                onDownload={() =>
                  downloadCertificateAsPdf(cert, userName)
                }
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
