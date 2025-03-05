import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, RefreshCw, Globe, Database } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure global application settings</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset to Default
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-2">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="rpc">RPC & WebSocket</TabsTrigger>
          <TabsTrigger value="bundler">Bundler Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure application-wide settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="funder-key">Funder Private Key</Label>
                  <Input id="funder-key" type="password" placeholder="Enter private key" />
                  <p className="text-xs text-muted-foreground">
                    The private key of the wallet used to distribute Solana among generated wallets
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jito-tip-key">Jito Tip Private Key</Label>
                  <Input id="jito-tip-key" type="password" placeholder="Enter private key" />
                  <p className="text-xs text-muted-foreground">
                    Private key of wallet that tips to ensure transaction processes
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jito-tip-amount">Jito Tip Amount (SOL)</Label>
                  <Input id="jito-tip-amount" type="number" placeholder="0.005" step="0.001" />
                  <p className="text-xs text-muted-foreground">
                    A higher tip increases the likelihood of transaction success but is more expensive
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <Switch id="dark-mode" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-update">Auto Update</Label>
                    <Switch id="auto-update" />
                  </div>
                  <p className="text-xs text-muted-foreground">Automatically check for and install updates</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <Switch id="notifications" />
                  </div>
                  <p className="text-xs text-muted-foreground">Receive notifications for important events</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rpc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>RPC & WebSocket Settings</CardTitle>
              <CardDescription>Configure connection settings for Solana blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rpc-url">RPC URL</Label>
                  <div className="flex gap-2">
                    <Input id="rpc-url" placeholder="https://example-rpc.solana.com" className="flex-1" />
                    <Button variant="outline" size="icon">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    The Remote Procedure Call (RPC) URL for interacting with the Solana blockchain
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="websocket-url">WebSocket URL</Label>
                  <div className="flex gap-2">
                    <Input id="websocket-url" placeholder="wss://example-ws.solana.com" className="flex-1" />
                    <Button variant="outline" size="icon">
                      <Database className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    WebSocket URL for real-time communication with the Solana blockchain
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="use-jito">Use JITO</Label>
                    <Switch id="use-jito" />
                  </div>
                  <p className="text-xs text-muted-foreground">Enable JITO for MEV protection</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="use-bloxroute">Use Bloxroute</Label>
                    <Switch id="use-bloxroute" />
                  </div>
                  <p className="text-xs text-muted-foreground">Enable Bloxroute for transaction routing</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="connection-timeout">Connection Timeout (ms)</Label>
                  <Input id="connection-timeout" type="number" placeholder="30000" />
                  <p className="text-xs text-muted-foreground">
                    Maximum time to wait for a connection before timing out
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bundler" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bundler Settings</CardTitle>
              <CardDescription>Configure default settings for the bundler</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="dev-wallet-key">Dev Wallet Private Key</Label>
                  <Input id="dev-wallet-key" type="password" placeholder="Enter private key" />
                  <p className="text-xs text-muted-foreground">
                    The private key of the dev wallet (different from funder wallet)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dev-buy">Default Dev Buy Amount (SOL)</Label>
                  <Input id="dev-buy" type="number" placeholder="0.5" step="0.01" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-buy-amount">Minimum Buy Amount (SOL)</Label>
                    <Input id="min-buy-amount" type="number" placeholder="0.05" step="0.01" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-buy-amount">Maximum Buy Amount (SOL)</Label>
                    <Input id="max-buy-amount" type="number" placeholder="1.5" step="0.01" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-micro-buy">Minimum Micro Buy Amount (SOL)</Label>
                    <Input id="min-micro-buy" type="number" placeholder="0.05" step="0.01" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-micro-buy">Maximum Micro Buy Amount (SOL)</Label>
                    <Input id="max-micro-buy" type="number" placeholder="0.1" step="0.01" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="default-safe-mode">Default to Safe Mode</Label>
                    <Switch id="default-safe-mode" />
                  </div>
                  <p className="text-xs text-muted-foreground">Use Safe mode by default for bundler operations</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="default-hybrid">Default to Hybrid Sending Mode</Label>
                    <Switch id="default-hybrid" />
                  </div>
                  <p className="text-xs text-muted-foreground">Use Hybrid sending mode by default (recommended)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

