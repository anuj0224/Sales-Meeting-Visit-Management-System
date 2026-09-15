# Deploying Frontend to Vercel

Step-by-step guide to deploy the React (Vite) frontend application to **Vercel**.

---

## Prerequisites
- A GitHub / GitLab / Bitbucket repository containing this project.
- A Vercel Account ([https://vercel.com](https://vercel.com)).
- The deployed Render Backend API URL (e.g. `https://optronix-sales-api.onrender.com/api`).

---

## Step 1: Import Project into Vercel

1. Log in to your **Vercel Dashboard**.
2. Click **"Add New..."** → **"Project"**.
3. Connect your Git repository provider and select the repository.
4. Set the **Root Directory** to `frontend`.

---

## Step 2: Configure Build & Framework Settings

Vercel will automatically detect **Vite**. Confirm the following settings:

- **Framework Preset**: `Vite`
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## Step 3: Configure Environment Variables

Add the environment variable pointing to your production backend API on Render:

| Key | Value | Description |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | `https://optronix-sales-api.onrender.com/api` | Render backend API endpoint URL |

---

## Step 4: Add SPA Routing Rewrite Config

To ensure deep links (e.g. `/meetings/123`) route properly on page refresh without throwing 404 errors, create `frontend/vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Step 5: Deploy & Verify Production

1. Click **"Deploy"**.
2. Once the deployment finishes, open your production Vercel URL (e.g., `https://optronix-sales.vercel.app`).
3. Log in using demo credentials (`employee@optronix.com` / `password123`).
4. Verify network calls in Browser DevTools target the Render API URL cleanly.
