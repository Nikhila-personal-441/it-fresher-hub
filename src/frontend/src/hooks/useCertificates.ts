import { useAuth } from "@/contexts/AuthContext";
import type { CertificateView } from "@/backend.d";
import { getUserCertificates } from "@/lib/firestoreService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export type { CertificateView };

export function useCertificates() {
  const { user, isAuthenticated } = useAuth();
  return useQuery<CertificateView[]>({
    queryKey: ["certificates", user?.uid],
    queryFn: async () => {
      if (!user) return [];
      const certs = await getUserCertificates(user.uid);
      return certs.map((c) => ({
        id: c.id,
        userId: c.userId,
        courseId: c.courseId,
        courseName: c.courseName,
        issuedAt: c.issuedAt,
        verificationCode: c.verificationCode,
      }));
    },
    enabled: isAuthenticated,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCertificateQueryClient() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ["certificates"] });
}
