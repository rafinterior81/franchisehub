import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, Store, Package, DollarSign, MessageSquare,
  Settings, Calendar, FileText, BarChart3, TrendingUp, TrendingDown,
  Plus, Edit2, Trash2, Eye, Search, Filter, Download, Upload,
  Clock, CheckCircle, XCircle, AlertCircle, Camera, Video,
  Mail, Phone, MapPin, Activity, ArrowUpRight, ArrowDownRight,
  Bell, Menu, X, ChevronDown, ChevronRight, MoreVertical,
  Save, RefreshCw, Send, UserPlus, Building2, CreditCard,
  Zap, Target, Award, Briefcase, PieChart, LineChart,
  ShoppingCart, Truck, Box, AlertTriangle, Info
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('30days');

  // Sample Data
  const dashboardStats = {
    totalRevenue: 456789000,
    revenueGrowth: 15.3,
    totalOutlets: 24,
    outletsGrowth: 8.5,
    totalOrders: 3847,
    ordersGrowth: 12.7,
    activeUsers: 156,
    usersGrowth: 5.2,
    pendingApprovals: 8,
    criticalAlerts: 3
  };

  const outlets = [
    { id: 1, name: 'Gerai Sudirman', owner: 'Ahmad Wijaya', city: 'Jakarta Pusat', status: 'active', revenue: 45000000, healthScore: 95, openDate: '2023-01-15' },
    { id: 2, name: 'Gerai Kelapa Gading', owner: 'Siti Nurhaliza', city: 'Jakarta Utara', status: 'warning', revenue: 38000000, healthScore: 72, openDate: '2023-03-20' },
    { id: 3, name: 'Gerai BSD', owner: 'Budi Santoso', city: 'Tangerang', status: 'active', revenue: 52000000, healthScore: 98, openDate: '2023-02-10' },
    { id: 4, name: 'Gerai Depok', owner: 'Linda Kusuma', city: 'Depok', status: 'active', revenue: 41000000, healthScore: 88, openDate: '2023-04-05' },
    { id: 5, name: 'Gerai Bandung', owner: 'Eko Prasetyo', city: 'Bandung', status: 'inactive', revenue: 0, healthScore: 0, openDate: '2024-01-01' }
  ];

  const users = [
    { id: 1, name: 'Ahmad Wijaya', email: 'ahmad@email.com', role: 'mitra', outlets: 1, status: 'active', joinDate: '2023-01-10' },
    { id: 2, name: 'Siti Nurhaliza', email: 'siti@email.com', role: 'mitra', outlets: 1, status: 'active', joinDate: '2023-03-15' },
    { id: 3, name: 'Admin Pusat', email: 'admin@franchise.com', role: 'admin', outlets: 0, status: 'active', joinDate: '2022-12-01' },
    { id: 4, name: 'Manager Regional', email: 'manager@franchise.com', role: 'manager', outlets: 0, status: 'active', joinDate: '2023-01-05' }
  ];

  const orders = [
    { id: 1001, outlet: 'Gerai Sudirman', items: 'Bahan Baku Paket A', amount: 15000000, status: 'delivered', date: '2026-02-12', deliveryDate: '2026-02-13' },
    { id: 1002, outlet: 'Gerai BSD', items: 'Supplies & Packaging', amount: 8000000, status: 'processing', date: '2026-02-11', deliveryDate: '2026-02-14' },
    { id: 1003, outlet: 'Gerai Kelapa Gading', items: 'Equipment Maintenance', amount: 12000000, status: 'pending', date: '2026-02-10', deliveryDate: '2026-02-15' }
  ];

  const complaints = [
    { id: 1, outlet: 'Gerai Sudirman', issue: 'Keterlambatan pengiriman bahan baku', priority: 'high', status: 'open', date: '2026-02-11', assignedTo: 'Manager Regional' },
    { id: 2, outlet: 'Gerai Kelapa Gading', issue: 'Masalah sistem POS', priority: 'critical', status: 'in-progress', date: '2026-02-10', assignedTo: 'IT Support' },
    { id: 3, outlet: 'Gerai BSD', issue: 'Request tambahan staff', priority: 'medium', status: 'open', date: '2026-02-09', assignedTo: 'HR Department' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 380000000 },
    { month: 'Feb', revenue: 456789000 },
    { month: 'Mar', revenue: 0 },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 rounded-xl">
              <DollarSign className="text-emerald-600" size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${
              dashboardStats.revenueGrowth > 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {dashboardStats.revenueGrowth > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(dashboardStats.revenueGrowth)}%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(dashboardStats.totalRevenue)}
          </div>
          <div className="text-sm text-gray-500">Total Revenue</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Store className="text-blue-600" size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${
              dashboardStats.outletsGrowth > 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {dashboardStats.outletsGrowth > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(dashboardStats.outletsGrowth)}%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {dashboardStats.totalOutlets}
          </div>
          <div className="text-sm text-gray-500">Total Outlets</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <ShoppingCart className="text-purple-600" size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${
              dashboardStats.ordersGrowth > 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {dashboardStats.ordersGrowth > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(dashboardStats.ordersGrowth)}%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {dashboardStats.totalOrders}
          </div>
          <div className="text-sm text-gray-500">Total Orders</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <Users className="text-orange-600" size={24} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${
              dashboardStats.usersGrowth > 0 ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {dashboardStats.usersGrowth > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(dashboardStats.usersGrowth)}%
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {dashboardStats.activeUsers}
          </div>
          <div className="text-sm text-gray-500">Active Users</div>
        </div>
      </div>

      {/* Alerts & Revenue Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Critical Alerts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Critical Alerts</h3>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
              {dashboardStats.criticalAlerts}
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900">Low Stock Alert</div>
                <div className="text-xs text-gray-600 mt-1">3 gerai perlu restock segera</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
              <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900">System Issue</div>
                <div className="text-xs text-gray-600 mt-1">POS offline di Gerai Kelapa Gading</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl">
              <Clock className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900">Pending Approvals</div>
                <div className="text-xs text-gray-600 mt-1">{dashboardStats.pendingApprovals} items menunggu persetujuan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Revenue Overview</h3>
            <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-around gap-4">
            {revenueData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative" 
                     style={{ height: `${(data.revenue / 500000000) * 100}%`, minHeight: '20px' }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 whitespace-nowrap">
                    {formatCurrency(data.revenue).replace(/\s/g, '')}
                  </div>
                </div>
                <div className="text-sm font-semibold text-gray-600">{data.month}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setShowModal('addOutlet')} className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
              <Plus className="text-blue-600" size={20} />
              <span className="text-sm font-semibold text-gray-900">Add Outlet</span>
            </button>
            <button onClick={() => setShowModal('addUser')} className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
              <UserPlus className="text-purple-600" size={20} />
              <span className="text-sm font-semibold text-gray-900">Add User</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors">
              <FileText className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold text-gray-900">Generate Report</span>
            </button>
            <button className="flex items-center gap-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
              <Bell className="text-orange-600" size={20} />
              <span className="text-sm font-semibold text-gray-900">Send Broadcast</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">New order received</div>
                <div className="text-xs text-gray-500">Gerai BSD - 5 menit lalu</div>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">Outlet health check completed</div>
                <div className="text-xs text-gray-500">Gerai Sudirman - 1 jam lalu</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">New user registered</div>
                <div className="text-xs text-gray-500">Rina Permata - 2 jam lalu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Outlets Management View
  const OutletsView = () => (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Outlet Management</h2>
          <p className="text-sm text-gray-500 mt-1">{outlets.length} total outlets</p>
        </div>
        <button onClick={() => setShowModal('addOutlet')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-colors">
          <Plus size={20} />
          Add New Outlet
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search outlets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
          <option>All Status</option>
          <option>Active</option>
          <option>Warning</option>
          <option>Inactive</option>
        </select>
        <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
          <option>All Cities</option>
          <option>Jakarta</option>
          <option>Bandung</option>
          <option>Surabaya</option>
        </select>
      </div>

      {/* Outlets Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Outlet</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Owner</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Health</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {outlets.map((outlet) => (
                <tr key={outlet.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-semibold text-gray-900">{outlet.name}</div>
                    <div className="text-sm text-gray-500">ID: {outlet.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{outlet.owner}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{outlet.city}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      outlet.status === 'active' ? 'bg-green-100 text-green-700' :
                      outlet.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {outlet.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">{formatCurrency(outlet.revenue)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold text-gray-900">{outlet.healthScore}</div>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${outlet.healthScore >= 90 ? 'bg-green-500' : outlet.healthScore >= 70 ? 'bg-orange-500' : 'bg-red-500'}`}
                          style={{ width: `${outlet.healthScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedOutlet(outlet)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Users Management View
  const UsersView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-sm text-gray-500 mt-1">{users.length} total users</p>
        </div>
        <button onClick={() => setShowModal('addUser')} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2">
          <UserPlus size={20} />
          Add New User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Outlets</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-semibold text-gray-900">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                      user.role === 'manager' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.outlets}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.joinDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Orders Management View
  const OrdersView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
          <p className="text-sm text-gray-500 mt-1">{orders.length} active orders</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold flex items-center gap-2">
            <Download size={20} />
            Export
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2">
            <Plus size={20} />
            New Order
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Outlet</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Items</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.outlet}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{order.items}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">{formatCurrency(order.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'processing' ? 'bg-blue-100 text-blue-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit2 size={18} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Complaints Management View
  const ComplaintsView = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Complaints Management</h2>
          <p className="text-sm text-gray-500 mt-1">{complaints.length} active complaints</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-2xl font-bold text-red-600">{complaints.filter(c => c.status === 'open').length}</div>
          <div className="text-sm text-gray-600 mt-1">Open</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{complaints.filter(c => c.status === 'in-progress').length}</div>
          <div className="text-sm text-gray-600 mt-1">In Progress</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">0</div>
          <div className="text-sm text-gray-600 mt-1">Resolved</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Outlet</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Issue</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Assigned To</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {complaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">#{complaint.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{complaint.outlet}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs">{complaint.issue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      complaint.priority === 'critical' ? 'bg-red-100 text-red-700' :
                      complaint.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {complaint.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      complaint.status === 'open' ? 'bg-red-100 text-red-700' :
                      complaint.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{complaint.assignedTo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{complaint.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold">
                      Resolve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Reports View
  const ReportsView = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
        <p className="text-sm text-gray-500 mt-1">Generate comprehensive reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <FileText className="text-blue-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Financial Report</h3>
          <p className="text-sm text-gray-600 mb-4">Comprehensive financial analysis</p>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <BarChart3 className="text-green-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Performance Report</h3>
          <p className="text-sm text-gray-600 mb-4">Outlet performance metrics</p>
          <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-xl">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Growth Analysis</h3>
          <p className="text-sm text-gray-600 mb-4">Business growth insights</p>
          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <ShoppingCart className="text-orange-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Order Report</h3>
          <p className="text-sm text-gray-600 mb-4">Order history and trends</p>
          <button className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 rounded-xl">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Complaint Report</h3>
          <p className="text-sm text-gray-600 mb-4">Issue tracking and resolution</p>
          <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <Users className="text-indigo-600" size={24} />
            </div>
            <Download className="text-gray-400" size={20} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">User Activity Report</h3>
          <p className="text-sm text-gray-600 mb-4">User engagement metrics</p>
          <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );

  // Settings View
  const SettingsView = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
        <p className="text-sm text-gray-500 mt-1">Manage system configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <input type="text" defaultValue="FranchiseHub Indonesia" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Support Email</label>
              <input type="email" defaultValue="support@franchisehub.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Time Zone</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Asia/Jakarta (GMT+7)</option>
                <option>Asia/Singapore (GMT+8)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">Email Notifications</div>
                <div className="text-sm text-gray-600">Receive email updates</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">Push Notifications</div>
                <div className="text-sm text-gray-600">Receive push notifications</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">SMS Alerts</div>
                <div className="text-sm text-gray-600">Critical alerts via SMS</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center gap-2">
          <Save size={20} />
          Save Changes
        </button>
        <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold">
          Cancel
        </button>
      </div>
    </div>
  );

  // Add Outlet Modal
  const AddOutletModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl">
          <h3 className="text-xl font-bold text-gray-900">Add New Outlet</h3>
          <button onClick={() => setShowModal(null)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Outlet Name *</label>
              <input type="text" placeholder="e.g., Gerai Jakarta Selatan" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Owner Name *</label>
              <input type="text" placeholder="e.g., John Doe" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
            <textarea rows="3" placeholder="Full address" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select City</option>
                <option>Jakarta</option>
                <option>Bandung</option>
                <option>Surabaya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
              <input type="tel" placeholder="+62" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input type="email" placeholder="outlet@email.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Opening Date *</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold">
              Add Outlet
            </button>
            <button onClick={() => setShowModal(null)} className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Add User Modal
  const AddUserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Add New User</h3>
          <button onClick={() => setShowModal(null)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input type="text" placeholder="e.g., John Doe" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
            <input type="email" placeholder="user@email.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Role *</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>Mitra</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold">
              Add User
            </button>
            <button onClick={() => setShowModal(null)} className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Outlet Detail Modal
  const OutletDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{selectedOutlet?.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Detailed Information</p>
          </div>
          <button onClick={() => setSelectedOutlet(null)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {/* Owner Info */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">Owner Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Name</div>
                <div className="font-semibold text-gray-900">{selectedOutlet?.owner}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-semibold text-gray-900">{selectedOutlet?.city}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Opening Date</div>
                <div className="font-semibold text-gray-900">{selectedOutlet?.openDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Status</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedOutlet?.status === 'active' ? 'bg-green-100 text-green-700' :
                  selectedOutlet?.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {selectedOutlet?.status}
                </span>
              </div>
            </div>
          </div>

          {/* Financial Stats */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">Financial Performance</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600">Monthly Revenue</div>
                <div className="text-xl font-bold text-gray-900">{formatCurrency(selectedOutlet?.revenue || 0)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Health Score</div>
                <div className="text-xl font-bold text-gray-900">{selectedOutlet?.healthScore}/100</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Outlet ID</div>
                <div className="text-xl font-bold text-gray-900">#{selectedOutlet?.id}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
              <Camera className="text-blue-600" size={24} />
              <span className="text-sm font-semibold text-gray-900">View CCTV</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
              <FileText className="text-green-600" size={24} />
              <span className="text-sm font-semibold text-gray-900">Reports</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
              <MessageSquare className="text-purple-600" size={24} />
              <span className="text-sm font-semibold text-gray-900">Chat</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors">
              <Edit2 className="text-orange-600" size={24} />
              <span className="text-sm font-semibold text-gray-900">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${showSidebar ? 'w-64' : 'w-0'} bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 overflow-hidden flex-shrink-0`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">FranchiseHub</h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="font-medium">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveSection('outlets')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'outlets' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Store size={20} />
              <span className="font-medium">Outlets</span>
            </button>
            <button
              onClick={() => setActiveSection('users')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'users' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Users size={20} />
              <span className="font-medium">Users</span>
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'orders' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Package size={20} />
              <span className="font-medium">Orders</span>
            </button>
            <button
              onClick={() => setActiveSection('complaints')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'complaints' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <MessageSquare size={20} />
              <span className="font-medium">Complaints</span>
            </button>
            <button
              onClick={() => setActiveSection('reports')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'reports' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FileText size={20} />
              <span className="font-medium">Reports</span>
            </button>
            <button
              onClick={() => setActiveSection('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                activeSection === 'settings' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu size={24} className="text-gray-600" />
              </button>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {activeSection === 'dashboard' && 'Dashboard Overview'}
                  {activeSection === 'outlets' && 'Outlet Management'}
                  {activeSection === 'users' && 'User Management'}
                  {activeSection === 'orders' && 'Orders Management'}
                  {activeSection === 'complaints' && 'Complaints Management'}
                  {activeSection === 'reports' && 'Reports & Analytics'}
                  {activeSection === 'settings' && 'System Settings'}
                </h2>
                <p className="text-sm text-gray-500">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={24} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === 'dashboard' && <DashboardView />}
          {activeSection === 'outlets' && <OutletsView />}
          {activeSection === 'users' && <UsersView />}
          {activeSection === 'orders' && <OrdersView />}
          {activeSection === 'complaints' && <ComplaintsView />}
          {activeSection === 'reports' && <ReportsView />}
          {activeSection === 'settings' && <SettingsView />}
        </main>
      </div>

      {/* Modals */}
      {showModal === 'addOutlet' && <AddOutletModal />}
      {showModal === 'addUser' && <AddUserModal />}
      {selectedOutlet && <OutletDetailModal />}
    </div>
  );
};

export default AdminDashboard;
