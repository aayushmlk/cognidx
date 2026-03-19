# Cognidx Enterprises Pvt. Ltd. — Website

A Next.js 14 website for Cognidx Enterprises Pvt. Ltd., a biomedical diagnostic equipment supplier based in Kathmandu, Nepal.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + CSS animations
- **Icons**: Lucide React
- **Fonts**: Playfair Display, DM Sans, Space Mono (Google Fonts)
- **Language**: TypeScript

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add the logo

Copy `Cognidx_Logo.png` into the `/public` folder and rename it to `logo.png`:

```
public/
  logo.png   ← place the Cognidx logo here
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (metadata, fonts)
│   ├── page.tsx          # Home page (assembles all sections)
│   └── globals.css       # Global styles + Tailwind
├── components/
│   ├── GenzBanner.tsx    # Scrolling "We Support GenZ" top banner
│   ├── Navbar.tsx        # Sticky nav with product category dropdown
│   ├── Hero.tsx          # Full-screen hero section
│   ├── ScrollFade.tsx    # Purple-to-white gradient transition
│   ├── About.tsx         # Company info, stats, values
│   ├── Products.tsx      # Category tabs + product grid
│   ├── ProductCard.tsx   # Individual product card with visitor counter
│   ├── Donate.tsx        # Donation prompt section
│   └── Footer.tsx        # Footer with contact + links
└── data/
    └── products.ts       # All product data + category definitions
```

---

## Customisation Guide

### Adding / Editing Products

Edit `src/data/products.ts`. Each product has:

```ts
{
  id: "unique-id",
  name: "Full Product Name",
  model: "Model Number",
  brand: "Brand Name",
  category: "Display Category",
  categoryId: "fia" | "blood" | "hema5" | "hema3" | "chemi" | "urine" | "biochem",
  description: "...",
  specs: [{ key: "Spec Name", value: "Value" }],
  highlights: ["Key feature 1", ...],
  baseVisitors: 1234,   // starting visitor count
}
```

### Adding a New Category

1. Add to the `categories` array in `src/data/products.ts`
2. Add products with the new `categoryId`

### Changing Colors

Primary purple colors are defined in `tailwind.config.ts` under `colors.cognidx` and `colors.purple`. The main brand colors are:

- Deep purple: `#2d1b69`
- Mid purple: `#5b2d8e`
- Light purple: `#8b5cf6`
- Gold accent: `#f59e0b`

### Visitor Counter

The visitor counter uses `localStorage` to persist counts per product per browser. Each time a product card mounts, it increments the count for that product. The total is summed across all products.

For a real production visitor counter, replace the `localStorage` logic in `ProductCard.tsx` with an API call to your backend or a service like Vercel Analytics / Plausible.

### Donation Form

The donation form in `Donate.tsx` is currently a UI mockup (no payment gateway). To add real payments:

1. Integrate [Stripe](https://stripe.com), [Khalti](https://khalti.com), or [eSewa](https://esewa.com.np)
2. Add a `/api/donate` route in `src/app/api/donate/route.ts`
3. Call that route from the form's `handleSubmit` function

---

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Contact

**Cognidx Enterprises Pvt. Ltd.**  
Kathmandu, Bagmati Province, Nepal  
info@cognidx.com.np
