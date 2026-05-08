import { createActor } from "@/backend";
import type { CertificateView } from "@/backend.d";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export type { CertificateView };

export function useCertificates() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<CertificateView[]>({
    queryKey: ["certificates"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyCertificates();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCertificateQueryClient() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ["certificates"] });
}
