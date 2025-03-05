import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, DollarSign, Package, Wallet, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function DashboardOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tokens Launched</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume Generated</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234 SOL</div>
            <p className="text-xs text-muted-foreground">+250 SOL from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234</div>
            <p className="text-xs text-muted-foreground">+$2,345 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full p-2 bg-green-100 dark:bg-green-900">
                  <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Token Launch: DOGE</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm font-medium">+120 SOL</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full p-2 bg-blue-100 dark:bg-blue-900">
                  <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Volume Generation: PEPE</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
                <div className="text-sm font-medium">45 transactions</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full p-2 bg-red-100 dark:bg-red-900">
                  <ArrowDownRight className="h-4 w-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Token Sell: CAT</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <div className="text-sm font-medium">-85 SOL</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full p-2 bg-green-100 dark:bg-green-900">
                  <ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Token Launch: SHIB</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <div className="text-sm font-medium">+95 SOL</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Active Tasks</CardTitle>
            <CardDescription>Currently running operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Human Mode: DOGE</span>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                    Running
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>65% complete</span>
                  <span>23/35 cycles</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Micro Buy: PEPE</span>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                    Running
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: "32%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>32% complete</span>
                  <span>16/50 transactions</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Auto Volume: CAT</span>
                  <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full">
                    Paused
                  </span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: "78%" }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>78% complete</span>
                  <span>39/50 cycles</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

