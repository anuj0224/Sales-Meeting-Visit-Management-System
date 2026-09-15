# Deploying Backend to Render

Step-by-step guide to deploy the Node.js + Express backend service to **Render**.

---

## Prerequisites
- A Render Account ([https://render.com](https://render.com)).
- A MongoDB Atlas Cluster URL or managed MongoDB connection string (`mongodb+srv://...`).
- Git repository pushed to GitHub or GitLab.

---

## Step 1: Create a New Web Service on Render

1. Log in to your **Render Dashboard**.
2. Click **"New +"** → **"Web Service"**.
3. Connect your repository containing the assignment.
4. Set the **Root Directory** to `backend`.

---

## Step 2: Configure Service Build & Runtime Settings

| Setting | Value |
| :--- | :--- |
| **Name** | `optronix-sales-api` |
| **Environment** | `Node` |
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

---

## Step 3: Configure Environment Variables

In the **Environment** tab on Render, add the following variables:

| Environment Variable | Example Value | Notes |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Production runtime flag |
| `PORT` | `10000` | Render default web port |
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/sales_db` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | `prod_super_secret_optronix_jwt_key_2026` | Secure production JWT signing secret |
| `JWT_EXPIRES_IN` | `7d` | Token expiration duration |
| `CLIENT_URL` | `https://optronix-sales.vercel.app` | Vercel frontend URL for CORS |

---

## Step 4: Health Check Verification

Render continuously polls health check endpoints to ensure service availability.

- **Health Check Path**: `/api/health`

Response returned by `/api/health`:
```json
{
  "status": "healthy",
  "service": "Optronix Sales Meeting & Visit Management API",
  "timestamp": "2026-09-15T12:00:00.000Z",
  "environment": "production"
}
```

---

## Step 5: Seed Production Data (Optional)

To seed initial demo accounts (`admin@optronix.com`, `manager@optronix.com`, `employee@optronix.com`) on your production database:

1. In Render Dashboard, go to **Shell** tab of your deployed web service.
2. Run command:
   ```bash
   npm run seed
   ```

---

## Step 6: Verify Production CORS

Ensure your Render API headers allow origin requests from your Vercel domain (`CLIENT_URL`).
The Express backend automatically parses `CLIENT_URL` and accepts request headers from Vercel.
