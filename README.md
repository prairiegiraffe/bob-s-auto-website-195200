# Astro Website

This website was created with Website Studio.

## 🚀 Project Structure

```
/
├── public/              # Static assets served directly
├── src/
│   ├── assets/
│   │   └── images/      # Optimized images organized by category
│   └── pages/          # Astro pages (.astro, .md, .mdx files)
└── package.json
```

## 📸 Image Optimization

This project uses Astro's built-in `astro:assets` for automatic image optimization:
- WebP conversion with fallbacks
- Responsive image generation  
- Automatic layout shift prevention
- Lazy loading by default

To use optimized images in your components:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero/main-hero.jpg';
---
<Image src={heroImage} alt="Description" width={800} height={400} />
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🔗 Deploy

This site is configured to deploy on Cloudflare Pages. Connect your repository to Cloudflare Pages for automatic deployments.
