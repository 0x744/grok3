import React from 'react';
import { Activity, BarChart3, Wallet, Settings, Package, LineChart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            PumpMaster Pro
          </h1>
          <p className="text-gray-400 text-sm">All-in-One Solana Trading Suite</p>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: <Activity className="w-5 h-5" />, label: 'Trading Dashboard' },
            { icon: <BarChart3 className="w-5 h-5" />, label: 'Volume Generator' },
            { icon: <Package className="w-5 h-5" />, label: 'Token Bundler' },
            { icon: <Wallet className="w-5 h-5" />, label: 'Wallet Manager' },
            { icon: <LineChart className="w-5 h-5" />, label: 'Analytics' },
            { icon: <Settings className="w-5 h-5" />, label: 'Settings' }
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 w-full px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Active Wallets</h3>
            <div className="text-3xl font-bold text-blue-400">24</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">24h Volume</h3>
            <div className="text-3xl font-bold text-purple-400">1,234 SOL</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Active Tasks</h3>
            <div className="text-3xl font-bold text-green-400">8</div>
          </div>

          {/* Trading Module */}
          <div className="bg-gray-800 rounded-xl p-6 col-span-full">
            <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Generate Volume', color: 'bg-blue-500' },
                { label: 'Bundle Launch', color: 'bg-purple-500' },
                { label: 'Human Mode', color: 'bg-green-500' },
                { label: 'Quick Sell', color: 'bg-red-500' }
              ].map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} hover:opacity-90 transition-opacity rounded-lg p-4 text-center font-semibold`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-6 col-span-full">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Volume Generation', status: 'Active', time: '2 min ago' },
                { action: 'Token Launch', status: 'Completed', time: '15 min ago' },
                { action: 'Wallet Setup', status: 'Completed', time: '1 hour ago' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    activity.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;