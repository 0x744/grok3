import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { DollarSign, ArrowUpRight, RefreshCw, Play, Pause, Trash } from "lucide-react"

export default function VolumePage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Volume Management</h1>
          <p className="text-muted-foreground">Generate volume for your tokens using various strategies</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Start Task
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
        </div>
      </div>

      <Tabs defaultValue="buy" className="space-y-4">
        <TabsList className="grid grid-cols-2 gap-2">
          <TabsTrigger value="buy">Buy Modes</TabsTrigger>
          <TabsTrigger value="sell">Sell Modes</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Buy Mode Configuration</CardTitle>
              <CardDescription>Select and configure your preferred buy mode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="col-span-1 border-2 border-primary/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Available Modes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 rounded-md bg-primary/10">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-medium">Gen Volume</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                        <DollarSign className="h-4 w-4" />
                        <span>Auto Volume</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                        <DollarSign className="h-4 w-4" />
                        <span>Human Mode</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                        <DollarSign className="h-4 w-4" />
                        <span>Micro Buy</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Gen Volume Configuration</CardTitle>
                    <CardDescription>This mode bundles up to 5 wallets to buy the token sequentially</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="token-address">Token Address</Label>
                          <Input id="token-address" placeholder="Enter token address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="num-wallets">Number of Wallets</Label>
                          <Input id="num-wallets" type="number" placeholder="5" min="1" max="20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="min-buy">Minimum Buy Amount (SOL)</Label>
                          <Input id="min-buy" type="number" placeholder="0.05" step="0.01" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-buy">Maximum Buy Amount (SOL)</Label>
                          <Input id="max-buy" type="number" placeholder="0.5" step="0.01" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="delay">Delay Between Buys (seconds)</Label>
                          <Input id="delay" type="number" placeholder="5" min="1" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cycles">Number of Cycles</Label>
                          <Input id="cycles" type="number" placeholder="10" min="1" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="jito" />
                          <Label htmlFor="jito">Use JITO for MEV Protection</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="random-amounts" />
                          <Label htmlFor="random-amounts">Use Random Buy Amounts</Label>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Reset</Button>
                        <Button>Save Configuration</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Buy Tasks</CardTitle>
              <CardDescription>Monitor and manage your running buy tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 font-medium border-b">
                  <div>Mode</div>
                  <div>Token</div>
                  <div>Progress</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div className="text-right">Actions</div>
                </div>

                <div className="grid grid-cols-6 p-4 items-center border-b">
                  <div>Gen Volume</div>
                  <div className="font-mono text-xs">DOGE...4f3a</div>
                  <div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-primary h-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">13/20 cycles</div>
                  </div>
                  <div>0.05-0.5 SOL</div>
                  <div>
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-0.5 rounded-full">
                      Running
                    </span>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button size="icon" variant="outline">
                      <Pause className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="text-destructive">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-6 p-4 items-center">
                  <div>Micro Buy</div>
                  <div className="font-mono text-xs">PEPE...7b2c</div>
                  <div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full" style={{ width: "32%" }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">16/50 transactions</div>
                  </div>
                  <div>0.01-0.1 SOL</div>
                  <div>
                    <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 px-2 py-0.5 rounded-full">
                      Paused
                    </span>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button size="icon" variant="outline">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="text-destructive">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sell Mode Configuration</CardTitle>
              <CardDescription>Select and configure your preferred sell mode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="col-span-1 border-2 border-primary/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Available Modes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 rounded-md bg-primary/10">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="font-medium">Sell All</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 cursor-pointer">
                        <ArrowUpRight className="h-4 w-4" />
                        <span>Single Wallet Sell</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sell All Configuration</CardTitle>
                    <CardDescription>
                      This mode bundles all wallets together and sells 100% of tokens in each wallet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="token-address-sell">Token Address</Label>
                          <Input id="token-address-sell" placeholder="Enter token address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slippage">Slippage (%)</Label>
                          <Input id="slippage" type="number" placeholder="1" min="0.1" max="100" step="0.1" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="delay-sell">Delay Between Sells (seconds)</Label>
                          <Input id="delay-sell" type="number" placeholder="3" min="1" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="jito-sell" />
                          <Label htmlFor="jito-sell">Use JITO for MEV Protection</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="close-accounts" />
                          <Label htmlFor="close-accounts">Close Token Accounts After Selling</Label>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">Reset</Button>
                        <Button>Save Configuration</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

