# 🚀 FranchiseHub - Platform Manajemen Franchise

Platform manajemen franchise profesional yang lengkap dengan fitur monitoring gerai, manajemen keuangan, tracking order, CCTV monitoring, dan komunikasi real-time.

## ✨ Fitur Utama

### 📱 Mobile App (Franchisor & Mitra)
- 📊 Dashboard overview dengan statistik lengkap
- 🏪 Manajemen gerai & mitra
- 📹 Live CCTV monitoring (4 kamera per gerai)
- 💰 Laporan keuangan real-time
- 📦 Order & inventory management
- 💬 Chat & komunikasi langsung
- 📹 Zoom meeting integration
- 🗺️ Google Maps lokasi gerai
- 📈 Analisis pertumbuhan bisnis

### 💼 Admin Dashboard (Backend Panel)
- 📊 Dashboard analytics komprehensif
- 👥 User management (Admin, Manager, Mitra)
- 🏪 CRUD outlet management
- 📦 Order tracking & management
- 💬 Complaint handling system
- 📈 Reports & analytics
- ⚙️ System settings & configuration
- 🔔 Notification management

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify
- **Backend Ready:** Firebase / Supabase integration

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/franchisehub.git
cd franchisehub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### 4. Build untuk Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

### Deploy ke Vercel (Recommended)

1. **Via GitHub (Termudah):**
   - Push code ke GitHub
   - Import repository di [Vercel](https://vercel.com)
   - Deploy otomatis

2. **Via CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

### Deploy ke Netlify

1. **Drag & Drop:**
   ```bash
   npm run build
   # Drag folder 'dist' ke https://app.netlify.com/drop
   ```

2. **Via GitHub:**
   - Connect repository di [Netlify](https://netlify.com)
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔧 Configuration

### Environment Variables

Buat file `.env` di root project:

```env
# API Configuration
VITE_API_URL=https://api.franchisehub.com

# Firebase (optional)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id

# Supabase (optional)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 📂 Struktur Project

```
franchisehub/
├── public/               # Static assets
├── src/
│   ├── franchisor-app.jsx    # Mobile app component
│   ├── admin-dashboard.jsx   # Admin panel component
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Mengubah Warna Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      }
    }
  }
}
```

### Menambah Fitur

1. Buat component baru di `src/components/`
2. Import di `App.jsx` atau component parent
3. Rebuild: `npm run build`

## 📊 Database Setup (Optional)

### Option 1: Firebase

```bash
npm install firebase
```

Setup di `src/firebase.js` - lihat dokumentasi lengkap di `DEPLOYMENT_GUIDE.md`

### Option 2: Supabase

```bash
npm install @supabase/supabase-js
```

Setup di `src/supabase.js` - lihat dokumentasi lengkap di `DEPLOYMENT_GUIDE.md`

## 🔐 Security

- ✅ Environment variables untuk sensitive data
- ✅ HTTPS enforced di production
- ✅ Content Security Policy headers
- ✅ XSS protection
- ✅ CORS configuration

## 📱 Progressive Web App (PWA)

Untuk mengaktifkan PWA, tambahkan:

1. Service Worker
2. Web App Manifest
3. Offline functionality

Lihat dokumentasi di `DEPLOYMENT_GUIDE.md`

## 🧪 Testing

```bash
# Coming soon
npm run test
```

## 📝 License

MIT License - bebas digunakan untuk project komersial maupun personal

## 👥 Contributors

- FranchiseHub Team

## 📞 Support

- 📧 Email: support@franchisehub.com
- 📱 WhatsApp: +62 xxx xxxx xxxx
- 🌐 Website: https://franchisehub.com

## 🎯 Roadmap

- [x] Mobile App dengan fitur lengkap
- [x] Admin Dashboard komprehensif
- [x] CCTV Monitoring
- [x] Real-time Communication
- [ ] Push Notifications
- [ ] Mobile Apps (iOS & Android)
- [ ] Advanced Analytics
- [ ] AI-powered Insights
- [ ] Multi-language Support

## ⭐ Star History

Jika project ini membantu, berikan ⭐ star di GitHub!

---

**Made with ❤️ by FranchiseHub Team**

**Version:** 1.0.0  
**Last Updated:** February 2026
