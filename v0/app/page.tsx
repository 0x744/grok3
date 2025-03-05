import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Wallet, Package, RefreshCw, Send, ArrowUpRight } from "lucide-react"
import DashboardOverview from "@/components/dashboard-overview"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Package className="h-6 w-6" />
            <span>PumpMaster Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your Solana tokens and operations</p>
            </div>
            <div className="flex gap-2">
              <Button>
                <DollarSign className="mr-2 h-4 w-4" />
                Launch Token
              </Button>
              <Button variant="outline">
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="bundler">Bundler</TabsTrigger>
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <DashboardOverview />
            </TabsContent>

            <TabsContent value="volume" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Volume Management</CardTitle>
                  <CardDescription>Generate volume for your tokens using various strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <DollarSign className="mr-2 h-5 w-5" />
                          Buy Modes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Gen Volume
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Auto Volume
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Human Mode
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Micro Buy
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <ArrowUpRight className="mr-2 h-5 w-5" />
                          Sell Modes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Sell All
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Single Wallet Sell
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bundler" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Bundler</CardTitle>
                  <CardDescription>Launch tokens and manage supply with bundling features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Package className="mr-2 h-5 w-5" />
                          Bundler Modes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Safe Mode
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Experimental Mode
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Sending Modes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Hybrid (Recommended)
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Jito
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Bloxroute
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            RPC
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wallets" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Management</CardTitle>
                  <CardDescription>Generate and manage wallets for volume and bundling operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Wallet className="mr-2 h-5 w-5" />
                          Volume Wallets
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Gen Wallets
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Check Balances
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Close Token Accounts
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Send SOL to Wallets
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="bg-primary/5 pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Package className="mr-2 h-5 w-5" />
                          Bundler Wallets
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <Button className="w-full justify-start" variant="outline">
                            Gen Wallets (Max 20)
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Check Balances
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Create Profiles
                          </Button>
                          <Button className="w-full justify-start" variant="outline">
                            Return to Main Wallet
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Configure RPC, WebSocket, and other global settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{/* Settings content will go here */}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

