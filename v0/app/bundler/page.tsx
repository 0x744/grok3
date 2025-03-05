import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Rocket, ArrowUpRight, RefreshCw, Copy } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function BundlerPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bundler</h1>
          <p className="text-muted-foreground">Launch tokens and manage supply with bundling features</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Rocket className="mr-2 h-4 w-4" />
            Launch Token
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Status
          </Button>
        </div>
      </div>

      <Tabs defaultValue="launch" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-2">
          <TabsTrigger value="launch">Launch Token</TabsTrigger>
          <TabsTrigger value="sell">Sell Modes</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="launch" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Token Launch Configuration</CardTitle>
              <CardDescription>Configure your token and launch settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="token-name">Token Name</Label>
                    <Input id="token-name" placeholder="e.g., Doge Coin" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token-symbol">Token Symbol</Label>
                    <Input id="token-symbol" placeholder="e.g., DOGE" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token-description">Description</Label>
                    <Textarea id="token-description" placeholder="Enter token description" rows={3} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token-image">Token Image URL</Label>
                    <Input id="token-image" placeholder="https://example.com/image.png" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="token-twitter">Twitter</Label>
                      <Input id="token-twitter" placeholder="@username" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="token-telegram">Telegram</Label>
                      <Input id="token-telegram" placeholder="t.me/group" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token-website">Website</Label>
                    <Input id="token-website" placeholder="https://example.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bundler-mode">Bundler Mode</Label>
                    <Select defaultValue="safe">
                      <SelectTrigger id="bundler-mode">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="safe">Safe Mode</SelectItem>
                        <SelectItem value="experimental">Experimental Mode</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Safe mode ensures supply is purchased within the same block as the developer wallet
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sending-mode">Sending Mode</Label>
                    <Select defaultValue="hybrid">
                      <SelectTrigger id="sending-mode">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hybrid">Hybrid (Recommended)</SelectItem>
                        <SelectItem value="jito">Jito</SelectItem>
                        <SelectItem value="bloxroute">Bloxroute</SelectItem>
                        <SelectItem value="rpc">RPC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dev-buy">Dev Buy Amount (SOL)</Label>
                    <Input id="dev-buy" type="number" placeholder="0.5" step="0.01" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="min-buy">Min Buy Amount (SOL)</Label>
                      <Input id="min-buy" type="number" placeholder="0.05" step="0.01" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-buy">Max Buy Amount (SOL)</Label>
                      <Input id="max-buy" type="number" placeholder="1.5" step="0.01" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wallets-count">Number of Wallets to Use</Label>
                    <Input id="wallets-count" type="number" placeholder="5" min="1" max="20" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="jito-protection" />
                      <Label htmlFor="jito-protection">Use JITO for MEV Protection</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="random-amounts" />
                      <Label htmlFor="random-amounts">Use Random Buy Amounts</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-2">
                <Button variant="outline">Reset</Button>
                <Button>Launch Token</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bundler Sell Modes</CardTitle>
              <CardDescription>Configure how to sell tokens after launch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Pump.fun Sell</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Dump All
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Dump All %
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Single Sell
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Dev Sell
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Raydium Sell</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Prepare Raydium
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Raydium Dump All
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Raydium Single Sell
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Other Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Send SPL
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Delay Sell
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Delay Sell %
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sell Configuration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="token-address-sell">Token Address</Label>
                        <Input id="token-address-sell" placeholder="Enter token address" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sell-percentage">Sell Percentage (%)</Label>
                        <Input id="sell-percentage" type="number" placeholder="100" min="1" max="100" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="slippage-sell">Slippage (%)</Label>
                        <Input id="slippage-sell" type="number" placeholder="1" min="0.1" max="100" step="0.1" />
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button>Execute Sell</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bundler Tools</CardTitle>
              <CardDescription>Additional tools for token management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Clone Token</CardTitle>
                    <CardDescription>
                      Clone any token on pump.fun including name, symbol, description, image, and social links
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="token-to-clone">Token Address to Clone</Label>
                        <Input id="token-to-clone" placeholder="Enter token address" />
                      </div>

                      <Button className="w-full">
                        <Copy className="mr-2 h-4 w-4" />
                        Clone Token
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Holder Count</CardTitle>
                    <CardDescription>
                      Increase your token's holder count by sending 1 token to random wallets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="token-address-holders">Token Address</Label>
                        <Input id="token-address-holders" placeholder="Enter token address" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="num-holders">Number of Holders to Add</Label>
                        <Input id="num-holders" type="number" placeholder="100" min="1" />
                      </div>

                      <Button className="w-full">
                        <Package className="mr-2 h-4 w-4" />
                        Increase Holder Count
                      </Button>
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

