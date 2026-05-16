import { useAdminUsers } from "@/hooks/useAdminData";
import { useAllDiscountAccess, useUpdateUserDiscountAccess } from "@/hooks/useCoupons";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Tag, Users, Sparkles, ShieldCheck } from "lucide-react";

export function AdminCouponsTab() {
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: discounts, isLoading: discountsLoading } = useAllDiscountAccess();
  const { mutateAsync: updateDiscount } = useUpdateUserDiscountAccess();
  const [searchTerm, setSearchTerm] = useState("");

  const stats = {
    total: discounts?.length ?? 0,
    admin: discounts?.filter(d => d.discount_100).length ?? 0,
    partial: discounts?.filter(d => d.discount_25 || d.discount_50 || d.discount_75).length ?? 0
  };

  if (usersLoading || discountsLoading) {
    return (
      <div className="p-6 space-y-3 bg-card border border-border rounded-xl">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-12 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  const filteredUsers = (users || []).filter(
    (u) =>
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Promotion Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-1">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase">Active Offers</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{stats.total}</p>
          <p className="text-[10px] text-muted-foreground">User-specific discounts active</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-semibold text-muted-foreground uppercase">Beta/Admin Access</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{stats.admin}</p>
          <p className="text-[10px] text-muted-foreground">Users with 100% OFF</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold text-muted-foreground uppercase">Partial Offers</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{stats.partial}</p>
          <p className="text-[10px] text-muted-foreground">Users with 25-75% discount</p>
        </div>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
        <div className="p-4 border-b border-border bg-muted/30">
          <Input
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase">User</th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase text-center">25% OFF</th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase text-center">50% OFF</th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase text-center">75% OFF</th>
                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase text-center">100% OFF (ADMIN)</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => {
                const userDiscount = discounts?.find((d) => d.id === user.userIdText || d.user_id === user.userIdText);
                
                const handleToggle = async (field: "discount_25" | "discount_50" | "discount_75" | "discount_100", currentVal: boolean) => {
                  const uid = user.userIdText || user.userId;
                  await updateDiscount({
                    uid: String(uid),
                    data: {
                      user_id: String(uid),
                      user_name: user.displayName || user.email || "Unknown",
                      [field]: !currentVal,
                    },
                  });
                };

                return (
                  <motion.tr
                    key={user.userIdText || i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="border-b border-border last:border-0 hover:bg-muted/30"
                  >
                    <td className="p-4">
                      <p className="text-sm font-semibold text-foreground">{user.displayName || "No Name"}</p>
                      <p className="text-xs text-muted-foreground">{user.email || user.userIdText}</p>
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={!!userDiscount?.discount_25}
                        onCheckedChange={() => handleToggle("discount_25", !!userDiscount?.discount_25)}
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={!!userDiscount?.discount_50}
                        onCheckedChange={() => handleToggle("discount_50", !!userDiscount?.discount_50)}
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={!!userDiscount?.discount_75}
                        onCheckedChange={() => handleToggle("discount_75", !!userDiscount?.discount_75)}
                      />
                    </td>
                    <td className="p-4 text-center">
                      <Switch
                        checked={!!userDiscount?.discount_100}
                        onCheckedChange={() => handleToggle("discount_100", !!userDiscount?.discount_100)}
                      />
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
