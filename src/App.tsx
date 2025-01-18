import React, { useState } from 'react';
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
  AlertCircle,
  X
} from 'lucide-react';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Order Details Component
const OrderDetails = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">Order Number</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">#12345</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Status</h3>
        <p className="mt-1 text-lg font-medium text-blue-600">In Progress</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Order Date</h3>
        <p className="mt-1 text-gray-900">Jan 15, 2024</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Expected Delivery</h3>
        <p className="mt-1 text-gray-900">Jan 22, 2024</p>
      </div>
    </div>
    
    <div className="border-t pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Manufacturing Parts</p>
            <p className="text-sm text-gray-500">SKU: MP-001</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">Qty: 100</p>
            <p className="text-sm text-gray-500">$45.00/unit</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Raw Materials</p>
            <p className="text-sm text-gray-500">SKU: RM-002</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-900">Qty: 50</p>
            <p className="text-sm text-gray-500">$75.00/unit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Dispatch Details Component
const DispatchDetails = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">Dispatch ID</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">#D-789</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Status</h3>
        <p className="mt-1 text-lg font-medium text-green-600">In Transit</p>
      </div>
    </div>
    
    <div className="border-t pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Tracking Details</h3>
      <div className="space-y-4">
        <div className="relative pb-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="ml-4">
              <p className="font-medium text-gray-900">Package Picked Up</p>
              <p className="text-sm text-gray-500">Jan 18, 2024 - 9:00 AM</p>
            </div>
          </div>
          <div className="absolute left-1.5 top-3 w-0.5 h-full bg-gray-200"></div>
        </div>
        <div className="relative pb-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="ml-4">
              <p className="font-medium text-gray-900">In Transit</p>
              <p className="text-sm text-gray-500">Jan 18, 2024 - 2:30 PM</p>
            </div>
          </div>
          <div className="absolute left-1.5 top-3 w-0.5 h-full bg-gray-200"></div>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <p className="font-medium text-gray-500">Expected Delivery</p>
              <p className="text-sm text-gray-500">Jan 19, 2024 - 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Supplier Details Component
const SupplierDetails = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">Supplier Name</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">John Supplier</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Rating</h3>
        <p className="mt-1 text-lg font-medium text-blue-600">4.8/5</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Active Since</h3>
        <p className="mt-1 text-gray-900">Jan 2020</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
        <p className="mt-1 text-gray-900">1,234</p>
      </div>
    </div>
    
    <div className="border-t pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600">On-Time Delivery Rate</span>
          <span className="font-medium text-green-600">94%</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Quality Rating</span>
          <span className="font-medium text-blue-600">4.8/5</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <span className="text-gray-600">Response Time</span>
          <span className="font-medium text-gray-900">2.5h</span>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activeModal, setActiveModal] = useState<'orders' | 'dispatch' | 'supplier' | null>(null);

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
              <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setActiveModal('supplier')}
              >
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
          <div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setActiveModal('orders')}
          >
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
          <div 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setActiveModal('dispatch')}
          >
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

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'orders'}
        onClose={() => setActiveModal(null)}
        title="Order Details"
      >
        <OrderDetails />
      </Modal>

      <Modal
        isOpen={activeModal === 'dispatch'}
        onClose={() => setActiveModal(null)}
        title="Dispatch Details"
      >
        <DispatchDetails />
      </Modal>

      <Modal
        isOpen={activeModal === 'supplier'}
        onClose={() => setActiveModal(null)}
        title="Supplier Profile"
      >
        <SupplierDetails />
      </Modal>
    </div>
  );
}

export default App;
