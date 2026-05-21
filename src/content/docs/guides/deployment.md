---
title: Deployment
---

# Deployment

Deploy the Ticket-v2 documentation website to a separate server.

---

## Overview

The documentation website is a separate static Astro site that should be deployed on its own server/domain (docs.oriaxen.com). It is not connected to the main Ticket-v2 application.

---

## GitHub Pages (Recommended)

### 1. Push to GitHub

```bash
cd website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sayrzs/Ticket-v2-docs.git
git push -u origin main
```

### 2. Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Configure Domain

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter `docs.oriaxen.com`
3. Update your DNS to add a CNAME record pointing to your GitHub Pages URL

---

## Docker Deployment

### Dockerfile

Create a `Dockerfile` in the website root:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name docs.oriaxen.com;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

### Build and Run

```bash
docker build -t ticket-v2-docs .
docker run -p 80:80 ticket-v2-docs
```

### Docker Compose

```yaml
version: '3.8'

services:
  docs:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

---

## Vercel Deployment

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Deploy

```bash
cd website
vercel
```

Follow the prompts to configure your project.

### 3. Custom Domain

In the Vercel dashboard, add `docs.oriaxen.com` as a custom domain.

---

## Netlify Deployment

### 1. Connect Repository

1. Go to Netlify and click "Add new site"
2. Connect your GitHub repository
3. Select the `website` folder

### 2. Configure Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### 3. Custom Domain

Add `docs.oriaxen.com` in Netlify's domain settings.

---

## Environment Variables

The documentation site doesn't require any environment variables for basic deployment.

---

## Updating Content

To update the documentation after deployment:

1. Edit the markdown files in `src/content/docs/`
2. Run `npm run build` to rebuild
3. Deploy the updated `dist` folder

For GitHub Pages, simply push to the main branch and the workflow will automatically deploy.

---

## Customization

### Theme Colors

Edit `astro.config.mjs` to change the theme color:

```javascript
{
  tag: "meta",
  attrs: {
    property: "theme-color",
    content: "#8B5CF6", // Change this color
  },
}
```

### Logo

Replace `src/images/icon_new.webp` with your logo (recommended size: 512x512px).

### Social Links

Edit the social links in `astro.config.mjs`:

```javascript
social: {
  github: "https://github.com/sayrzs/Ticket-v2",
  discord: "https://discord.gg/tHwtjXhUHf",
},
```
