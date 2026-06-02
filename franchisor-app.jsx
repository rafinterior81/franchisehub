import React, { useState, useEffect } from 'react';
import { 
  Home, Store, Settings, MessageSquare, Package, TrendingUp, TrendingDown,
  MapPin, Camera, FileText, ShoppingCart, AlertCircle, Calendar, Video,
  Users, DollarSign, BarChart3, Bell, Search, Filter, ChevronRight,
  Phone, Mail, Clock, CheckCircle, XCircle, Plus, Send, Menu, X
} from 'lucide-react';

const FranchisorApp = () => {
  const [activeMenu, setActiveMenu] = useState('beranda');
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [showCCTV, setShowCCTV] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [userRole, setUserRole] = useState('franchisor'); // 'franchisor' or 'mitra'
  const [notifications, setNotifications] = useState(3);
  const [showMenu, setShowMenu] = useState(false);

  // Sample data
  const outlets = [
    {
      id: 1,
      name: 'Gerai Sudirman',
      owner: 'Ahmad Wijaya',
      location: { lat: -6.2088, lng: 106.8456 },
      address: 'Jl. Sudirman No. 45, Jakarta Pusat',
      status: 'sehat',
      revenue: 45000000,
      growth: 12.5,
      lastOrder: '2 jam lalu',
      healthScore: 95,
      complaints: 1
    },
    {
      id: 2,
      name: 'Gerai Kelapa Gading',
      owner: 'Siti Nurhaliza',
      location: { lat: -6.1570, lng: 106.9050 },
      address: 'Mall Kelapa Gading Lt. 3, Jakarta Utara',
      status: 'perlu perhatian',
      revenue: 38000000,
      growth: -5.2,
      lastOrder: '1 hari lalu',
      healthScore: 72,
      complaints: 3
    },
    {
      id: 3,
      name: 'Gerai BSD',
      owner: 'Budi Santoso',
      location: { lat: -6.3018, lng: 106.6519 },
      address: 'BSD City Walk, Tangerang Selatan',
      status: 'sehat',
      revenue: 52000000,
      growth: 18.3,
      lastOrder: '30 menit lalu',
      healthScore: 98,
      complaints: 0
    },
    {
      id: 4,
      name: 'Gerai Depok',
      owner: 'Linda Kusuma',
      location: { lat: -6.4025, lng: 106.7942 },
      address: 'Margonda Raya No. 88, Depok',
      status: 'sehat',
      revenue: 41000000,
      growth: 8.7,
      lastOrder: '4 jam lalu',
      healthScore: 88,
      complaints: 1
    }
  ];

  const financialSummary = {
    totalRevenue: 176000000,
    totalOrders: 1247,
    growth: 11.2,
    date: '1-12 Februari 2026',
    grossRevenue: 176000000,
    expenses: 89000000,
    netProfit: 87000000
  };

  const agendas = [
    { id: 1, title: 'Pelatihan SOP Baru', date: '15 Feb 2026', time: '14:00', type: 'pelatihan' },
    { id: 2, title: 'Meeting Evaluasi Q1', date: '18 Feb 2026', time: '10:00', type: 'meeting' },
    { id: 3, title: 'Gathering Mitra', date: '25 Feb 2026', time: '09:00', type: 'event' }
  ];

  const complaints = [
    { id: 1, outlet: 'Gerai Sudirman', issue: 'Keterlambatan pengiriman bahan baku', date: '11 Feb 2026', status: 'open' },
    { id: 2, outlet: 'Gerai Kelapa Gading', issue: 'Masalah sistem POS', date: '10 Feb 2026', status: 'proses' },
    { id: 3, outlet: 'Gerai Kelapa Gading', issue: 'Request tambahan staff', date: '9 Feb 2026', status: 'proses' }
  ];

  const orders = [
    { id: 1, outlet: 'Gerai BSD', items: 'Bahan Baku Paket A', amount: 15000000, status: 'dikirim', date: '12 Feb 2026' },
    { id: 2, outlet: 'Gerai Sudirman', items: 'Supplies & Packaging', amount: 8000000, status: 'proses', date: '12 Feb 2026' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Beranda Component
  const BerandaView = () => (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={18} />
            <span className="text-xs opacity-90">Total Pendapatan</span>
          </div>
          <div className="text-xl font-bold">{formatCurrency(financialSummary.totalRevenue)}</div>
          <div className="flex items-center gap-1 mt-2 text-xs">
            <TrendingUp size={14} />
            <span>+{financialSummary.growth}% bulan ini</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <ShoppingCart size={18} />
            <span className="text-xs opacity-90">Total Order</span>
          </div>
          <div className="text-xl font-bold">{financialSummary.totalOrders}</div>
          <div className="flex items-center gap-1 mt-2 text-xs">
            <TrendingUp size={14} />
            <span>+{financialSummary.growth}%</span>
          </div>
        </div>
      </div>

      {/* Ringkasan Keuangan */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Ringkasan Keuangan</h3>
          <span className="text-xs text-gray-500">{financialSummary.date}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Pendapatan Kotor</span>
            <span className="font-semibold text-green-600">{formatCurrency(financialSummary.grossRevenue)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Pengeluaran</span>
            <span className="font-semibold text-red-600">{formatCurrency(financialSummary.expenses)}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-semibold text-gray-800">Laba Bersih</span>
            <span className="font-bold text-blue-600 text-lg">{formatCurrency(financialSummary.netProfit)}</span>
          </div>
        </div>
      </div>

      {/* Agenda Terkini */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Agenda Terkini</h3>
        <div className="space-y-2">
          {agendas.map(agenda => (
            <div key={agenda.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">{agenda.title}</div>
                <div className="text-xs text-gray-500">{agenda.date} • {agenda.time}</div>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="text-2xl font-bold text-gray-800">{outlets.length}</div>
          <div className="text-xs text-gray-500 mt-1">Total Gerai</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="text-2xl font-bold text-orange-600">{complaints.filter(c => c.status !== 'selesai').length}</div>
          <div className="text-xs text-gray-500 mt-1">Komplain Aktif</div>
        </div>
      </div>
    </div>
  );

  // Mitra & Gerai Component
  const MitraView = () => (
    <div className="space-y-4">
      {/* Search & Filter */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Cari gerai atau mitra..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-white p-2 rounded-lg border border-gray-200">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Outlets List */}
      <div className="space-y-3">
        {outlets.map(outlet => (
          <div 
            key={outlet.id} 
            className="bg-white rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedOutlet(outlet)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{outlet.name}</h3>
                <p className="text-sm text-gray-500">{outlet.owner}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                outlet.status === 'sehat' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {outlet.status === 'sehat' ? '✓ Sehat' : '⚠ Perlu Perhatian'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
              <MapPin size={14} />
              <span>{outlet.address}</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <div>
                <div className="text-xs text-gray-500">Pendapatan</div>
                <div className="font-semibold text-sm text-gray-800">{formatCurrency(outlet.revenue)}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Pertumbuhan</div>
                <div className={`font-semibold text-sm flex items-center gap-1 ${
                  outlet.growth > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {outlet.growth > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {Math.abs(outlet.growth)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Health Score</div>
                <div className="font-semibold text-sm text-gray-800">{outlet.healthScore}/100</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); setShowCCTV(outlet); }}
                className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 flex items-center justify-center gap-1"
              >
                <Camera size={16} />
                CCTV
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowChat(outlet); }}
                className="flex-1 bg-green-50 text-green-600 py-2 rounded-lg text-sm font-medium hover:bg-green-100 flex items-center justify-center gap-1"
              >
                <MessageSquare size={16} />
                Chat
              </button>
              <button className="flex-1 bg-purple-50 text-purple-600 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 flex items-center justify-center gap-1">
                <Video size={16} />
                Zoom
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map View Button */}
      <button 
        onClick={() => setActiveMenu('peta')}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
      >
        <MapPin size={20} />
        Lihat Peta Semua Gerai
      </button>
    </div>
  );

  // Operasional Component
  const OperasionalView = () => (
    <div className="space-y-4">
      {/* Aksi Cepat */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Aksi Cepat</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Plus size={24} className="mb-2" />
            <div className="font-medium">Order Baru</div>
            <div className="text-xs opacity-90 mt-1">Buat pesanan</div>
          </button>
          <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <AlertCircle size={24} className="mb-2" />
            <div className="font-medium">Cek Komplain</div>
            <div className="text-xs opacity-90 mt-1">{complaints.filter(c => c.status !== 'selesai').length} aktif</div>
          </button>
          <button className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Calendar size={24} className="mb-2" />
            <div className="font-medium">Meeting</div>
            <div className="text-xs opacity-90 mt-1">Jadwal terdekat</div>
          </button>
          <button className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Users size={24} className="mb-2" />
            <div className="font-medium">Event & Pelatihan</div>
            <div className="text-xs opacity-90 mt-1">Lihat semua</div>
          </button>
        </div>
      </div>

      {/* Status Order Terakhir */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Status Order Terakhir</h3>
        <div className="space-y-3">
          {orders.map(order => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800">{order.outlet}</div>
                  <div className="text-xs text-gray-500">{order.items}</div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === 'dikirim' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{order.date}</span>
                <span className="font-semibold text-gray-800">{formatCurrency(order.amount)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jadwal Meeting Terdekat */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Jadwal Meeting Terdekat</h3>
        <div className="space-y-2">
          {agendas.filter(a => a.type === 'meeting').map(meeting => (
            <div key={meeting.id} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Video size={20} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">{meeting.title}</div>
                <div className="text-xs text-gray-500">{meeting.date} • {meeting.time}</div>
              </div>
              <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Event & Pelatihan */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Event & Pelatihan</h3>
        <div className="space-y-2">
          {agendas.filter(a => a.type !== 'meeting').map(event => (
            <div key={event.id} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">{event.title}</div>
                <div className="text-xs text-gray-500">{event.date} • {event.time}</div>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Interaksi Component
  const InteraksiView = () => (
    <div className="space-y-4">
      {/* Komplain Mitra */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Komplain Mitra</h3>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
            {complaints.filter(c => c.status !== 'selesai').length} baru
          </span>
        </div>
        <div className="space-y-3">
          {complaints.map(complaint => (
            <div key={complaint.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-800">{complaint.outlet}</div>
                  <div className="text-sm text-gray-600 mt-1">{complaint.issue}</div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  complaint.status === 'open' 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {complaint.status}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{complaint.date}</span>
                <button className="text-blue-600 text-xs font-medium hover:underline">
                  Tanggapi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saran & Kritik */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Saran & Kritik</h3>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <MessageSquare size={20} className="text-green-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">Gerai BSD</div>
                <div className="text-sm text-gray-600 mt-1">
                  Mohon pertimbangkan untuk menambah variasi menu seasonal
                </div>
                <span className="text-xs text-gray-500 mt-2 block">10 Feb 2026</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MessageSquare size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-gray-800">Gerai Depok</div>
                <div className="text-sm text-gray-600 mt-1">
                  Sistem POS sangat membantu, terima kasih!
                </div>
                <span className="text-xs text-gray-500 mt-2 block">8 Feb 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kirim Broadcast */}
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Kirim Pesan Broadcast</h3>
        <textarea 
          placeholder="Tulis pesan untuk semua mitra..."
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="4"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 mt-2 flex items-center justify-center gap-2">
          <Send size={18} />
          Kirim ke Semua Mitra
        </button>
      </div>
    </div>
  );

  // Map View Component
  const MapView = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-4 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Lokasi Semua Gerai</h3>
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
          {/* Simple map placeholder with markers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
            {outlets.map((outlet, idx) => (
              <div 
                key={outlet.id}
                className="absolute bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform"
                style={{
                  left: `${20 + idx * 20}%`,
                  top: `${30 + (idx % 2) * 30}%`
                }}
                onClick={() => setSelectedOutlet(outlet)}
              >
                {idx + 1}
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center">
            <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Google Maps Integration</p>
            <p className="text-sm text-gray-500 mt-1">
              {outlets.length} gerai tersebar di Jakarta & sekitarnya
            </p>
          </div>
        </div>
      </div>

      {/* Outlet List */}
      <div className="space-y-2">
        {outlets.map((outlet, idx) => (
          <div key={outlet.id} className="bg-white rounded-lg p-3 shadow-md flex items-center gap-3">
            <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
              {idx + 1}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-800">{outlet.name}</div>
              <div className="text-xs text-gray-500">{outlet.address}</div>
            </div>
            <button className="text-blue-600 text-xs font-medium">
              Arah →
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // CCTV Modal
  const CCTVModal = ({ outlet, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="font-semibold text-gray-800">CCTV - {outlet.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-3">
          {['Area Kasir', 'Area Dapur', 'Area Makan', 'Area Parkir'].map((area, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
                <Camera size={48} className="text-gray-600" />
                <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <div className="p-2 bg-gray-50">
                <div className="font-medium text-sm text-gray-800">{area}</div>
                <div className="text-xs text-gray-500">12 Feb 2026 • 14:32 WIB</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Chat Modal
  const ChatModal = ({ outlet, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full h-[600px] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {outlet.owner.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{outlet.owner}</h3>
              <p className="text-xs text-gray-500">{outlet.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          <div className="flex justify-start">
            <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-800">Selamat pagi, ada update terkait pengiriman bahan baku?</p>
              <span className="text-xs text-gray-400 mt-1 block">09:15</span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
              <p className="text-sm">Baik, sedang dalam proses pengiriman. Estimasi tiba siang ini.</p>
              <span className="text-xs text-blue-100 mt-1 block">09:18</span>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ketik pesan..."
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Outlet Detail Modal
  const OutletDetailModal = ({ outlet, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-md w-full my-8">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-xl">
          <h3 className="font-semibold text-gray-800">{outlet.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {/* Owner Info */}
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {outlet.owner.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{outlet.owner}</div>
              <div className="text-sm text-gray-500">Pemilik Gerai</div>
            </div>
            <div className="flex gap-2">
              <button className="bg-green-100 p-2 rounded-lg">
                <Phone size={18} className="text-green-600" />
              </button>
              <button className="bg-blue-100 p-2 rounded-lg">
                <Mail size={18} className="text-blue-600" />
              </button>
            </div>
          </div>

          {/* Status & Health */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Status Gerai</div>
              <div className={`font-semibold ${outlet.status === 'sehat' ? 'text-green-600' : 'text-orange-600'}`}>
                {outlet.status === 'sehat' ? '✓ Sehat' : '⚠ Perlu Perhatian'}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Health Score</div>
              <div className="font-semibold text-gray-800">{outlet.healthScore}/100</div>
            </div>
          </div>

          {/* Financial Stats */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">Statistik Keuangan</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pendapatan Bulan Ini</span>
                <span className="font-semibold text-gray-800">{formatCurrency(outlet.revenue)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pertumbuhan</span>
                <span className={`font-semibold flex items-center gap-1 ${
                  outlet.growth > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {outlet.growth > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {Math.abs(outlet.growth)}%
                </span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="text-sm font-semibold text-gray-800 mb-2">Aktivitas Terakhir</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-gray-400" />
                <span className="text-gray-600">Order terakhir: {outlet.lastOrder}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle size={16} className="text-gray-400" />
                <span className="text-gray-600">Komplain aktif: {outlet.complaints}</span>
              </div>
            </div>
          </div>

          {/* Laporan Keuangan */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
            <FileText size={20} />
            Lihat Laporan Keuangan Lengkap
          </button>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button 
              onClick={() => {
                onClose();
                setShowCCTV(outlet);
              }}
              className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 flex flex-col items-center gap-1"
            >
              <Camera size={18} />
              <span>CCTV</span>
            </button>
            <button 
              onClick={() => {
                onClose();
                setShowChat(outlet);
              }}
              className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 flex flex-col items-center gap-1"
            >
              <MessageSquare size={18} />
              <span>Chat</span>
            </button>
            <button className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 flex flex-col items-center gap-1">
              <Video size={18} />
              <span>Zoom</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sticky top-0 z-40 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">FranchiseHub</h1>
              <p className="text-xs text-blue-100">
                {userRole === 'franchisor' ? 'Dashboard Franchisor' : 'Portal Mitra'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative">
              <Bell size={24} />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {notifications}
                </span>
              )}
            </button>
            <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
              F
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          {activeMenu === 'beranda' && <BerandaView />}
          {activeMenu === 'mitra' && <MitraView />}
          {activeMenu === 'operasional' && <OperasionalView />}
          {activeMenu === 'interaksi' && <InteraksiView />}
          {activeMenu === 'peta' && <MapView />}
          {activeMenu === 'akun' && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h3 className="font-semibold text-gray-800 mb-4">Pengaturan Akun</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Role</span>
                    <select 
                      value={userRole}
                      onChange={(e) => setUserRole(e.target.value)}
                      className="bg-white border border-gray-200 rounded px-3 py-1 text-sm"
                    >
                      <option value="franchisor">Franchisor</option>
                      <option value="mitra">Mitra</option>
                    </select>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Edit Profil
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Pengaturan Notifikasi
                  </button>
                  <button className="w-full bg-red-50 text-red-600 py-3 rounded-lg text-sm font-medium hover:bg-red-100">
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg max-w-md mx-auto">
        <div className="grid grid-cols-5 gap-1 p-2">
          <button
            onClick={() => setActiveMenu('beranda')}
            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${
              activeMenu === 'beranda' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Home size={22} />
            <span className="text-xs font-medium">Beranda</span>
          </button>
          <button
            onClick={() => setActiveMenu('mitra')}
            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${
              activeMenu === 'mitra' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Store size={22} />
            <span className="text-xs font-medium">Mitra</span>
          </button>
          <button
            onClick={() => setActiveMenu('operasional')}
            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${
              activeMenu === 'operasional' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Package size={22} />
            <span className="text-xs font-medium">Operasi</span>
          </button>
          <button
            onClick={() => setActiveMenu('interaksi')}
            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${
              activeMenu === 'interaksi' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <MessageSquare size={22} />
            <span className="text-xs font-medium">Interaksi</span>
          </button>
          <button
            onClick={() => setActiveMenu('akun')}
            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-colors ${
              activeMenu === 'akun' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Settings size={22} />
            <span className="text-xs font-medium">Akun</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      {showCCTV && <CCTVModal outlet={showCCTV} onClose={() => setShowCCTV(false)} />}
      {showChat && <ChatModal outlet={showChat} onClose={() => setShowChat(false)} />}
      {selectedOutlet && <OutletDetailModal outlet={selectedOutlet} onClose={() => setSelectedOutlet(null)} />}
    </div>
  );
};

export default FranchisorApp;
