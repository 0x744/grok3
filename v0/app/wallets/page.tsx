import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, RefreshCw, Send, ArrowLeftRight, X } from "lucide-react"

export default function WalletsPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wallet Management</h1>
          <p className="text-muted-foreground">Generate and manage wallets for volume and bundling operations</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Generate Wallets
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Check Balances
          </Button>
        </div>
      </div>

      <Tabs defaultValue="volume" className="space-y-4">
        <TabsList className="grid grid-cols-2 gap-2">
          <TabsTrigger value="volume">Volume Wallets</TabsTrigger>
          <TabsTrigger value="bundler">Bundler Wallets</TabsTrigger>
        </TabsList>

        <TabsContent value="volume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Volume Wallets</CardTitle>
              <CardDescription>Wallets used exclusively for the volume modes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Generate Wallets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="num-wallets-volume">Number of Wallets</Label>
                          <Input id="num-wallets-volume" type="number" placeholder="5" min="1" />
                        </div>

                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Generate Wallets
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Fund Wallets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="sol-amount-volume">SOL Amount per Wallet</Label>
                          <Input id="sol-amount-volume" type="number" placeholder="0.1" step="0.01" />
                        </div>

                        <Button className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send SOL to Wallets
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Wallet Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button className="w-full" variant="outline">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Check Balances
                        </Button>
                        <Button className="w-full" variant="outline">
                          <X className="mr-2 h-4 w-4" />
                          Close Token Accounts
                        </Button>
                        <Button className="w-full" variant="outline">
                          <ArrowLeftRight className="mr-2 h-4 w-4" />
                          Create Profiles
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Transfer Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="receiver-wallet-volume">Receiver Wallet Address</Label>
                          <Input id="receiver-wallet-volume" placeholder="Enter wallet address" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Button className="w-full" variant="outline">
                            <Send className="mr-2 h-4 w-4" />
                            Return SOL to Main Wallet
                          </Button>
                          <Button className="w-full" variant="outline">
                            <Send className="mr-2 h-4 w-4" />
                            Transfer SPL to Main Wallet
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-4 p-4 font-medium border-b">
                    <div>Wallet</div>
                    <div>Balance</div>
                    <div>Profile</div>
                    <div>Actions</div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center border-b">
                    <div className="font-mono text-xs truncate">5Gh7Lk...3aFq</div>
                    <div>0.25 SOL</div>
                    <div>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Created
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center border-b">
                    <div className="font-mono text-xs truncate">9Jb2Mn...7pRt</div>
                    <div>0.15 SOL</div>
                    <div>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Created
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center">
                    <div className="font-mono text-xs truncate">3Kf8Pq...2xZw</div>
                    <div>0.30 SOL</div>
                    <div>
                      <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bundler" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bundler Wallets</CardTitle>
              <CardDescription>Wallets used exclusively for the bundler (max 20 wallets)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Generate Wallets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="num-wallets-bundler">Number of Wallets</Label>
                          <Input id="num-wallets-bundler" type="number" placeholder="5" min="1" max="20" />
                          <p className="text-xs text-muted-foreground">Maximum of 20 wallets allowed for bundler</p>
                        </div>

                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Generate Wallets
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Fund Wallets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="sol-amount-bundler">SOL Amount per Wallet</Label>
                          <Input id="sol-amount-bundler" type="number" placeholder="0.5" step="0.01" />
                        </div>

                        <Button className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send SOL to Wallets
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Wallet Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button className="w-full" variant="outline">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Check Balances
                        </Button>
                        <Button className="w-full" variant="outline">
                          <ArrowLeftRight className="mr-2 h-4 w-4" />
                          Create Profiles
                        </Button>
                        <Button className="w-full" variant="outline">
                          <Send className="mr-2 h-4 w-4" />
                          Return to Main Wallet
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-4 p-4 font-medium border-b">
                    <div>Wallet</div>
                    <div>Balance</div>
                    <div>Profile</div>
                    <div>Actions</div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center border-b">
                    <div className="font-mono text-xs truncate">7Rt9Bx...5mKp</div>
                    <div>0.75 SOL</div>
                    <div>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Created
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center border-b">
                    <div className="font-mono text-xs truncate">2Lp6Qz...8nVw</div>
                    <div>0.50 SOL</div>
                    <div>
                      <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Created
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 p-4 items-center">
                    <div className="font-mono text-xs truncate">8Jf3Ty...1cXr</div>
                    <div>0.60 SOL</div>
                    <div>
                      <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

