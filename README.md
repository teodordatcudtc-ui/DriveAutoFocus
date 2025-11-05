# Drive Auto Focus — Școala de șoferi

Site web complet pentru școala de șoferi Drive Auto Focus din București. Construit cu Next.js 14, TypeScript, Tailwind CSS și optimizat pentru performanță, SEO și accesibilitate.

## 🚀 Caracteristici

- **6 pagini complete**: Acasă, Prețuri și Oferte, Instructori, Galerie, Despre noi, Contact
- **Design modern**: Paletă de culori profesională, animații fluide, responsive mobile-first
- **SEO optimizat**: Meta tags, OpenGraph, Twitter Cards, JSON-LD structured data, sitemap
- **Performanță**: Optimizare imagini, lazy loading, code splitting, Core Web Vitals
- **Accesibilitate**: ARIA labels, semantic HTML, keyboard navigation, contrast optimizat
- **Formular contact**: Validare client și server, protecție antispam (honeypot)

## 📋 Cerințe

- Node.js 18+ sau mai recent
- npm, yarn sau pnpm

## 🛠️ Instalare

### Folosind npm:
```bash
npm install
```

### Folosind yarn:
```bash
yarn install
```

### Folosind pnpm:
```bash
pnpm install
```

## 🏃 Rulare

### Modul development:
```bash
npm run dev
# sau
yarn dev
# sau
pnpm dev
```

Site-ul va fi disponibil la [http://localhost:3000](http://localhost:3000)

### Build pentru producție:
```bash
npm run build
# sau
yarn build
# sau
pnpm build
```

### Pornire server producție:
```bash
npm start
# sau
yarn start
# sau
pnpm start
```

## 🔧 Configurare

### Variabile de mediu

Creează un fișier `.env.local` în root-ul proiectului:

```env
# Pentru formularul de contact (opțional)
# Opțiunea 1: Resend
RESEND_API_KEY=your_resend_api_key

# Opțiunea 2: SMTP (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password

# Google Analytics (opțional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Configurare formular contact

Formularul de contact este funcțional, dar necesită configurare pentru a trimite email-uri efectiv. Opțiuni recomandate:

1. **Resend** (recomandat pentru Next.js):
   - Creează cont la [resend.com](https://resend.com)
   - Obține API key
   - Instalează: `npm install resend`
   - Decomentează codul din `app/api/contact/route.ts`

2. **EmailJS** (client-side, free tier):
   - Creează cont la [emailjs.com](https://www.emailjs.com)
   - Configurează template-ul
   - Actualizează `ContactForm.tsx` cu API key

3. **Formspree** (serverless, free tier):
   - Creează cont la [formspree.io](https://formspree.io)
   - Actualizează endpoint-ul în `ContactForm.tsx`

## 📁 Arhitectură

Proiectul folosește Next.js 14 cu App Router:

- `app/` — Rute și layout-uri (App Router)
- `components/` — Componente reutilizabile React
- `public/` — Assets statice (imagini, favicon, etc.)
- `app/api/` — API routes (serverless functions)

### Structura paginilor:
- `/` — Pagina principală (Acasă)
- `/preturi` — Prețuri și oferte
- `/instructori` — Instructori
- `/galerie` — Galerie foto și video
- `/despre` — Despre noi
- `/contact` — Contact și formular

## 🎨 Design System

### Culori:
- Roșu principal: `#B30000`
- Roșu închis: `#8C0000`
- Negru: `#000000`
- Gri fundal: `#111111`
- Alb: `#FFFFFF`

### Tipografie:
- Font principal: Inter (Google Fonts)
- Optimizat pentru performanță cu `next/font`

## 🚀 Deploy

### Vercel (Recomandat)

1. Instalează Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Sau conectează repository-ul GitHub direct în dashboard-ul Vercel

### Netlify

1. Instalează Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Build static (opțional)

Pentru export static, modifică `next.config.mjs`:
```js
output: 'export',
```

Apoi rulează:
```bash
npm run build
```

## 📝 Optimizări recomandate

1. **Imagini**: Înlocuiește imaginile placeholder din `/public/gallery/` și `/public/instructors/` cu imagini reale optimizate
2. **OG Image**: Adaugă o imagine optimă pentru OpenGraph în `/public/og-image.jpg` (1200x630px)
3. **Favicon**: Adaugă favicon personalizat în `/public/favicon.ico`
4. **Google Analytics**: Activează tracking-ul (vezi instrucțiuni în comentarii)
5. **reCAPTCHA**: Adaugă reCAPTCHA pentru formular (opțional, vezi documentație)

## 🧪 Testare

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📞 Contact

- **Telefon**: 0764421141
- **Adresă**: Strada Gheorghe Țițeica NR. 178, București 014192
- **Facebook**: [Drive Auto Focus](https://www.facebook.com/p/Scoala-de-soferi-Drive-Auto-Focus-100040185049796/)

## 📄 Licență

© 2024 Drive Auto Focus. Toate drepturile rezervate.

---

**Notă**: Site-ul este gata de utilizare în producție. Asigură-te că configurezi serviciul de email pentru formularul de contact înainte de deploy.

