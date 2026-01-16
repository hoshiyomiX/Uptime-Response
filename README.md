# Uptime-Response

Cloudflare Worker sederhana untuk monitoring uptime website dengan response status check.

## Fitur

- Health check endpoint dengan timeout 5 detik
- JSON response dengan status dan timestamp
- Auto-deploy via GitHub Actions
- Error handling dengan HTTP 503 status

## Response Format

### Online Status
```json
{
  "status": "online",
  "code": 200,
  "time": "2026-01-16T04:42:00.000Z"
}
```

### Offline Status
```json
{
  "status": "offline",
  "error": "Error message"
}
```
HTTP Status: 503

## Setup

### 1. Clone Repository
```bash
git clone https://github.com/hoshiyomiX/Uptime-Response.git
cd Uptime-Response
```

### 2. Konfigurasi GitHub Secrets

Tambahkan secrets berikut di repository settings:

- `CLOUDFLARE_API_TOKEN` - API token dari Cloudflare (Workers Edit permission)
- `CLOUDFLARE_ACCOUNT_ID` - Account ID dari Cloudflare dashboard

### 3. Deploy

Push ke branch `main` untuk trigger auto-deployment:
```bash
git add .
git commit -m "Update configuration"
git push origin main
```

Atau trigger manual via GitHub Actions tab.

## Local Development

```bash
npm install -g wrangler
wrangler dev
```

## Manual Deploy

```bash
wrangler deploy
```

## Konfigurasi

Edit `wrangler.toml` untuk mengubah route atau environment:

```toml
name = "uptime-response"
main = "worker.js"
compatibility_date = "2024-01-01"

[env.production]
name = "uptime-response"
route = { pattern = "uptime.hoshiyomi.web.id/*", zone_name = "hoshiyomi.web.id" }
```

## Target Website

Default monitoring target: `https://hoshiyomi.web.id`

Ubah di `worker.js` baris 6:
```javascript
const target = 'https://your-website.com'
```

## License

MIT