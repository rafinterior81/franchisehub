# 🚀 PANDUAN DEPLOYMENT APLIKASI FRANCHISEHUB

Panduan lengkap untuk mempublish aplikasi FranchiseHub (Mobile App & Admin Dashboard) agar bisa diakses online.

---

## 📋 DAFTAR ISI

1. [Persiapan File](#persiapan-file)
2. [Metode Deployment](#metode-deployment)
3. [Deployment ke Vercel (GRATIS & RECOMMENDED)](#deployment-ke-vercel)
4. [Deployment ke Netlify (GRATIS)](#deployment-ke-netlify)
5. [Deployment ke GitHub Pages (GRATIS)](#deployment-ke-github-pages)
6. [Setup Backend & Database](#setup-backend--database)
7. [Custom Domain](#custom-domain)
8. [Testing & Monitoring](#testing--monitoring)

---

## 1. PERSIAPAN FILE

### A. Struktur Project yang Diperlukan

Buat folder project dengan struktur berikut:

```
franchisehub/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   └── (assets, images, icons)
└── src/
    ├── App.jsx (atau admin-dashboard.jsx)
    ├── franchisor-app.jsx
    ├── admin-dashboard.jsx
    └── main.jsx
```

### B. File yang Perlu Dibuat

#### 1. **package.json**
```json
{
  "name": "franchisehub",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "vite": "^4.3.9"
  }
}
```

#### 2. **vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/'
})
```

#### 3. **tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4. **postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 5. **index.html**
```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>FranchiseHub - Manajemen Franchise</title>
    <meta name="description" content="Platform manajemen franchise terlengkap untuk franchisor dan mitra" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 6. **src/main.jsx**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 7. **src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

#### 8. **src/App.jsx**
```javascript
import React, { useState } from 'react';
import FranchisorApp from './franchisor-app';
import AdminDashboard from './admin-dashboard';

function App() {
  const [view, setView] = useState('mobile'); // 'mobile' or 'admin'

  return (
    <div>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setView('mobile')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === 'mobile' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Mobile App
        </button>
        <button
          onClick={() => setView('admin')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            view === 'admin' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Admin Panel
        </button>
      </div>

      {/* Render View */}
      {view === 'mobile' ? <FranchisorApp /> : <AdminDashboard />}
    </div>
  );
}

export default App;
```

---

## 2. METODE DEPLOYMENT

### Pilihan Platform (Semua GRATIS):

| Platform | Kelebihan | Cocok Untuk |
|----------|-----------|-------------|
| **Vercel** | ⚡ Super cepat, auto deploy, SSL gratis | ✅ RECOMMENDED |
| **Netlify** | 🎯 Mudah, fitur lengkap, form handling | ✅ RECOMMENDED |
| **GitHub Pages** | 📦 Terintegrasi GitHub, unlimited bandwidth | Alternative |
| **Render** | 🔧 Backend + Frontend, database gratis | Full-stack apps |
| **Railway** | 🚄 Modern, auto-deploy, monitoring | Backend heavy |

---

## 3. DEPLOYMENT KE VERCEL (RECOMMENDED) ⭐

### Langkah-Langkah:

#### A. Persiapan

1. **Install Git** (jika belum ada)
   - Download: https://git-scm.com/downloads
   - Install dengan default settings

2. **Buat akun di Vercel**
   - Kunjungi: https://vercel.com/signup
   - Sign up dengan GitHub (recommended)

3. **Install Vercel CLI** (optional, untuk deploy dari terminal)
   ```bash
   npm install -g vercel
   ```

#### B. Deploy via GitHub (CARA TERMUDAH)

1. **Push ke GitHub:**
   ```bash
   # Inisialisasi git
   git init
   
   # Add semua file
   git add .
   
   # Commit
   git commit -m "Initial commit - FranchiseHub"
   
   # Buat repository di GitHub, lalu:
   git remote add origin https://github.com/username/franchisehub.git
   git branch -M main
   git push -u origin main
   ```

2. **Import di Vercel:**
   - Login ke Vercel: https://vercel.com
   - Click "Add New Project"
   - Import dari GitHub repository Anda
   - Click "Deploy"
   - ✅ **SELESAI!** Aplikasi langsung live

3. **URL Aplikasi:**
   - Vercel akan memberikan URL: `https://franchisehub.vercel.app`
   - Bisa custom domain nanti

#### C. Deploy via CLI

```bash
# Login ke Vercel
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

#### D. Environment Variables (untuk backend)

Di Vercel Dashboard:
1. Go to Project Settings
2. Environment Variables
3. Add variables:
   ```
   DATABASE_URL=your_database_url
   API_KEY=your_api_key
   NEXT_PUBLIC_API_URL=your_api_url
   ```

---

## 4. DEPLOYMENT KE NETLIFY

### Langkah-Langkah:

#### A. Deploy via Drag & Drop (TERCEPAT)

1. **Build aplikasi:**
   ```bash
   npm install
   npm run build
   ```

2. **Drag & Drop:**
   - Kunjungi: https://app.netlify.com/drop
   - Drag folder `dist` ke area drop
   - ✅ **LIVE dalam 30 detik!**

#### B. Deploy via GitHub

1. **Login ke Netlify:** https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub
4. Pilih repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### C. Custom Build Settings

Buat file `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 5. DEPLOYMENT KE GITHUB PAGES

### Langkah-Langkah:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://username.github.io/franchisehub",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/franchisehub/'  // nama repository
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Aktifkan GitHub Pages:**
   - Go to repository Settings
   - Pages → Source: gh-pages branch
   - ✅ Live di: `https://username.github.io/franchisehub`

---

## 6. SETUP BACKEND & DATABASE

### A. Option 1: Firebase (GRATIS & MUDAH)

1. **Setup Firebase:**
   ```bash
   npm install firebase
   ```

2. **Konfigurasi:**
   ```javascript
   // src/firebase.js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';
   import { getAuth } from 'firebase/auth';
   import { getStorage } from 'firebase/storage';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "franchisehub.firebaseapp.com",
     projectId: "franchisehub",
     storageBucket: "franchisehub.appspot.com",
     messagingSenderId: "123456789",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const auth = getAuth(app);
   export const storage = getStorage(app);
   ```

3. **Fitur Firebase:**
   - ✅ Authentication (Login/Register)
   - ✅ Firestore Database (NoSQL)
   - ✅ Storage (Upload gambar/file)
   - ✅ Hosting
   - ✅ GRATIS sampai 50K users

### B. Option 2: Supabase (PostgreSQL + Backend)

1. **Setup Supabase:**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Konfigurasi:**
   ```javascript
   // src/supabase.js
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = 'https://your-project.supabase.co';
   const supabaseKey = 'your-anon-key';

   export const supabase = createClient(supabaseUrl, supabaseKey);
   ```

3. **Fitur Supabase:**
   - ✅ PostgreSQL Database
   - ✅ Authentication
   - ✅ Storage
   - ✅ Realtime subscriptions
   - ✅ GRATIS sampai 500MB database

### C. Option 3: API Backend dengan Node.js

Deploy API terpisah di:
- **Railway.app** (recommended)
- **Render.com**
- **Fly.io**

Contoh struktur:
```
backend/
├── index.js
├── routes/
│   ├── outlets.js
│   ├── orders.js
│   ├── users.js
│   └── complaints.js
└── models/
    └── database.js
```

---

## 7. CUSTOM DOMAIN

### A. Setup di Vercel

1. Beli domain di:
   - Namecheap (mulai $8/tahun)
   - GoDaddy
   - Niagahoster (Indonesia)

2. Di Vercel Dashboard:
   - Settings → Domains
   - Add domain: `franchisehub.com`
   - Update DNS di domain registrar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. ✅ Wait 24-48 jam untuk propagasi DNS

### B. SSL Certificate

- ✅ **AUTO GRATIS** di Vercel, Netlify, GitHub Pages
- Menggunakan Let's Encrypt

---

## 8. TESTING & MONITORING

### A. Testing Checklist

✅ **Functionality:**
- [ ] Semua menu berfungsi
- [ ] Form bisa submit
- [ ] Data tampil dengan benar
- [ ] Modal open/close
- [ ] Search & filter berfungsi

✅ **Performance:**
- [ ] Load time < 3 detik
- [ ] Images ter-optimize
- [ ] No console errors
- [ ] Responsive di mobile

✅ **Cross-browser:**
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓

### B. Monitoring Tools

1. **Google Analytics:**
   ```html
   <!-- Add to index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

2. **Vercel Analytics:**
   - Auto-enabled untuk semua project
   - Real-time visitor tracking

3. **Sentry (Error Tracking):**
   ```bash
   npm install @sentry/react
   ```

---

## 9. QUICK START COMMAND

### Full Setup dari Awal:

```bash
# 1. Buat folder project
mkdir franchisehub
cd franchisehub

# 2. Inisialisasi npm
npm init -y

# 3. Install dependencies
npm install react react-dom lucide-react
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer

# 4. Setup Tailwind
npx tailwindcss init -p

# 5. Copy semua file (.jsx, config files, dll)

# 6. Test lokal
npm run dev

# 7. Build
npm run build

# 8. Deploy ke Vercel
npx vercel

# ATAU push ke GitHub lalu import di Vercel
```

---

## 10. TROUBLESHOOTING

### Problem: Build Failed

**Solution:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Problem: Routes tidak berfungsi (404)

**Solution:**
Tambahkan di `vercel.json` atau `netlify.toml`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Problem: Environment variables tidak load

**Solution:**
- Pastikan prefix dengan `VITE_` untuk Vite:
  ```
  VITE_API_URL=https://api.example.com
  ```
- Access dengan: `import.meta.env.VITE_API_URL`

---

## 11. ESTIMASI BIAYA

### GRATIS TIER (Cukup untuk startup):

| Platform | Free Tier |
|----------|-----------|
| **Vercel** | 100GB bandwidth/bulan |
| **Netlify** | 100GB bandwidth/bulan |
| **Firebase** | 50K users, 1GB storage |
| **Supabase** | 500MB database, 1GB storage |

### PAID (Jika scaling):

| Service | Cost |
|---------|------|
| Vercel Pro | $20/bulan |
| Netlify Pro | $19/bulan |
| Firebase Blaze | Pay-as-you-go |
| Custom Domain | $8-15/tahun |

---

## 12. NEXT STEPS

Setelah deploy:

1. ✅ Setup analytics
2. ✅ Configure email notifications
3. ✅ Setup database backup
4. ✅ Add monitoring
5. ✅ Create API documentation
6. ✅ Setup CI/CD pipeline
7. ✅ Add error tracking
8. ✅ Performance optimization
9. ✅ Security audit
10. ✅ User testing

---

## 📞 SUPPORT & RESOURCES

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Firebase Docs:** https://firebase.google.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Project structure ready
- [ ] All dependencies installed
- [ ] Build successful locally
- [ ] Environment variables set
- [ ] GitHub repository created
- [ ] Deployed to hosting platform
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Backend/database connected
- [ ] Testing completed
- [ ] Analytics setup
- [ ] Monitoring active

---

**🎉 SELAMAT! Aplikasi Anda sudah LIVE dan bisa diakses dari mana saja!**

**Recommended URL untuk share:**
- Mobile App: `https://franchisehub.vercel.app`
- Admin Panel: `https://franchisehub.vercel.app/admin`

---

*Last Updated: February 2026*
*Version: 1.0.0*
