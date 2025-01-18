import React from 'react';
import { 
  Truck, 
  Package, 
  MessageSquare, 
  Bell, 
  User,
  Search,
  BarChart3,
  Calendar,
  Clock,
  AlertCircle
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">SupplyConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <div className="flex items-center space-x-2 cursor-pointer">
                <User className="h-6 w-6 text-gray-500" />
                <span className="text-sm text-gray-700">John Supplier</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search orders, deliveries, or queries..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Orders Overview */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Orders Overview</h2>
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending Orders</span>
                <span className="text-lg font-medium text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">In Progress</span>
                <span className="text-lg font-medium text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completed</span>
                <span className="text-lg font-medium text-gray-900">45</span>
              </div>
            </div>
          </div>

          {/* Delivery Status */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Delivery Status</h2>
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">In Transit</span>
                <span className="text-lg font-medium text-gray-900">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delivered</span>
                <span className="text-lg font-medium text-gray-900">32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delayed</span>
                <span className="text-lg font-medium text-red-600">2</span>
              </div>
            </div>
          </div>

          {/* Recent Queries */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Queries</h2>
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">Order #12345</span>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
                <p className="text-sm text-gray-600">Delivery timeline confirmation needed</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">Order #12342</span>
                  <span className="text-xs text-gray-500">5h ago</span>
                </div>
                <p className="text-sm text-gray-600">Invoice clarification requested</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Performance Metrics</h2>
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">On-Time Delivery</span>
                <span className="text-lg font-medium text-green-600">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Quality Rating</span>
                <span className="text-lg font-medium text-blue-600">4.8/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Response Time</span>
                <span className="text-lg font-medium text-gray-900">2.5h</span>
              </div>
            </div>
          </div>

          {/* Upcoming Deliveries */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Deliveries</h2>
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Order #12350</p>
                  <p className="text-sm text-gray-600">Manufacturing Parts</p>
                </div>
                <span className="text-sm text-blue-600">Tomorrow</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Order #12355</p>
                  <p className="text-sm text-gray-600">Raw Materials</p>
                </div>
                <span className="text-sm text-blue-600">In 2 days</span>
              </div>
            </div>
          </div>

          {/* Urgent Notifications */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Urgent Notifications</h2>
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-red-900">Delayed Shipment</span>
                </div>
                <p className="mt-1 text-sm text-red-600">Order #12348 requires immediate attention</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-900">Stock Alert</span>
                </div>
                <p className="mt-1 text-sm text-yellow-600">Low inventory for Product ID: MT458</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;