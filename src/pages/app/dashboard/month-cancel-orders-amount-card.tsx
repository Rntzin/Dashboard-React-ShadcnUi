import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Vault } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelados (mês)
        </CardTitle>
        <Vault className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">3</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-20%</span>{" "}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
