import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
  getAllDiscountAccess,
  getUserDiscountAccess,
  updateUserDiscountAccess,
  DiscountAccessDoc,
} from "@/lib/firestoreService";

export function useUserDiscountAccess(userId?: string) {
  const { user, isAuthenticated } = useAuth();
  const targetId = userId || user?.uid;

  return useQuery<DiscountAccessDoc | null>({
    queryKey: ["discountAccess", targetId],
    queryFn: async () => {
      if (!targetId) return null;
      return getUserDiscountAccess(targetId);
    },
    enabled: isAuthenticated && !!targetId,
  });
}

export function useAllDiscountAccess() {
  const { isAuthenticated, isAdmin } = useAuth();
  return useQuery({
    queryKey: ["allDiscountAccess"],
    queryFn: getAllDiscountAccess,
    enabled: isAuthenticated && isAdmin,
  });
}

export function useUpdateUserDiscountAccess() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      uid,
      data,
    }: {
      uid: string;
      data: Partial<DiscountAccessDoc>;
    }) => {
      await updateUserDiscountAccess(uid, data);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["discountAccess", variables.uid],
      });
      queryClient.invalidateQueries({
        queryKey: ["allDiscountAccess"],
      });
    },
  });
}
