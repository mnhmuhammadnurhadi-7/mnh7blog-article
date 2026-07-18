# Instruksi Menyalin Desain Portfolio ke Web Blog

## 📋 Overview Teknologi

Portfolio ini menggunakan:
- **React 19** dengan TypeScript
- **Vite** sebagai build tool
- **TailwindCSS** untuk styling
- **Framer Motion** untuk animasi
- **Lucide React** untuk icons
- **React Router DOM** untuk routing

## 🎨 Komponen Desain Utama

### 1. **AnimatedBackground** (`src/components/AnimatedBackground.tsx`)
- Background animasi dengan gradient dan floating elements
- Efek visual yang menarik untuk halaman utama

### 2. **FloatingIcons** (`src/components/decor/FloatingIcons.tsx`)
- Icon-icon teknologi yang melayang di background
- Menggunakan Lucide React icons
- Animasi floating dengan delay random
- Warna-warna neon (blue, purple, emerald, cyan, pink, orange, yellow, indigo)

### 3. **CustomCursor** (`src/components/CustomCursor.tsx`)
- Custom cursor dengan efek glow
- Hover effect pada elemen interaktif

### 4. **Hero** (`src/components/Hero.tsx`)
- Section hero dengan animasi teks
- Rotating text untuk menampilkan role/skill
- Call-to-action buttons

### 5. **Navbar** (`src/components/Navbar.tsx`)
- Navigation bar dengan glassmorphism effect
- Responsive design
- Dark/light mode toggle

### 6. **Skills** (`src/components/Skills.tsx`)
- Grid layout untuk menampilkan skills
- Hover effects dan animations

### 7. **ProjectCard** (`src/components/ProjectCard.tsx`)
- Card design untuk menampilkan projects
- Hover effects dan modal untuk detail

### 8. **Stats** (`src/components/Stats.tsx`)
- Statistik dengan animasi counting
- Grid layout responsive

## 🎯 Langkah-langkah Implementasi

### Step 1: Setup Project Baru

```bash
# Buat project baru dengan Vite + React + TypeScript
npm create vite@latest blog-anda -- --template react-ts
cd blog-anda
npm install
```

### Step 2: Install Dependencies

```bash
# Install dependencies yang diperlukan
npm install framer-motion lucide-react react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Konfigurasi TailwindCSS

Copy file `tailwind.config.ts` dari portfolio ini:
- Custom colors (navy theme)
- Custom fonts (Inter, Sora)
- Custom animations (floatSlow, floatSlower, floatIcon)

### Step 4: Copy CSS Global

Copy isi file `src/index.css`:
- Tailwind directives
- Dark/light mode variables
- Custom cursor styles
- Smooth transitions

### Step 5: Copy Komponen yang Dibutuhkan

Salin komponen-komponen berikut ke project blog Anda:

**Wajib:**
- `src/components/decor/FloatingIcons.tsx` - Background decoration
- `src/components/AnimatedBackground.tsx` - Background animasi
- `src/components/Navbar.tsx` - Navigation
- `src/components/Footer.tsx` - Footer

**Opsional (sesuai kebutuhan blog):**
- `src/components/Hero.tsx` - Hero section
- `src/components/Skills.tsx` - Skills section
- `src/components/ProjectCard.tsx` - Project cards
- `src/components/CustomCursor.tsx` - Custom cursor (jika ingin efek ini)

### Step 6: Setup Layout

Copy atau adapt `src/components/Layout.tsx`:
- Wrap content dengan AnimatedBackground
- Include Navbar dan Footer
- Setup routing structure

### Step 7: Integrasikan ke Blog

Contoh penggunaan di halaman utama:

```tsx
import AnimatedBackground from './components/AnimatedBackground';
import FloatingIcons from './components/decor/FloatingIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function BlogHome() {
  return (
    <div className="relative min-h-screen dark">
      <AnimatedBackground />
      <FloatingIcons opacity={0.6} iconSize={32} />
      <Navbar />
      <Hero />
      {/* Blog content di sini */}
    </div>
  );
}
```

### Step 8: Customisasi untuk Blog

**Modifikasi yang disarankan:**
1. **Hero Section**: Ganti teks untuk blog (bukan portfolio)
2. **Navbar**: Tambahkan link ke blog posts, categories, dll
3. **Colors**: Sesuaikan color scheme dengan brand blog Anda
4. **Fonts**: Setup font yang sesuai dengan blog (Inter, Sora, atau custom)
5. **Content**: Hapus components yang tidak relevan (seperti Skills, Projects jika tidak diperlukan)

## 🎨 Customization Tips

### Mengubah Color Scheme

Edit `tailwind.config.ts`:
```ts
colors: {
  navy: { // Ganti dengan brand colors Anda
    DEFAULT: '#YOUR_COLOR',
    dark: '#YOUR_DARK_COLOR',
    light: '#YOUR_LIGHT_COLOR',
  },
}
```

### Mengubah Icons di FloatingIcons

Edit `src/components/decor/FloatingIcons.tsx`:
```ts
const icons = [
  { Icon: YourIcon1, size: iconSize },
  { Icon: YourIcon2, size: iconSize * 1.3 },
  // Tambah atau ganti icons sesuai kebutuhan
];
```

### Menghapus Custom Cursor

Jika tidak ingin custom cursor:
1. Hapus import CustomCursor
2. Hapus CSS custom cursor dari `index.css`
3. Hapus komponen CustomCursor dari Layout

### Mengubah Animations

Edit `tailwind.config.ts` keyframes:
```ts
keyframes: {
  floatSlow: {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '25%': { transform: 'translate(15px, -15px)' },
    // Sesuaikan animation values
  },
}
```

## 📦 File Structure yang Disarankan untuk Blog

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogPost.tsx
│   │   └── CategoryFilter.tsx
│   ├── decor/
│   │   ├── FloatingIcons.tsx
│   │   └── AnimatedBackground.tsx
│   └── ui/
│       └── CustomCursor.tsx (opsional)
├── pages/
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── index.css
└── main.tsx
```

## 🚀 Run Development

```bash
npm run dev
```

## 📝 Notes Penting

1. **Dark Mode Default**: Portfolio ini menggunakan dark mode sebagai default. Sesuaikan dengan preferensi blog Anda.
2. **Performance**: FloatingIcons dan AnimatedBackground menggunakan animasi CSS yang ringan.
3. **Responsive**: Semua komponen sudah responsive-ready.
4. **Accessibility**: Custom cursor mungkin perlu di-disable untuk accessibility considerations.

## 🔗 Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev/icons/)
- [React Router DOM](https://reactrouter.com/)

---

**Dibuat berdasarkan desain portfolio mnurhadi-porto**
**Tech Stack: React 19 + TypeScript + Vite + TailwindCSS**
