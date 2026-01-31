# EcomAssignment
A Ecommerce platform

## 🚀 Quick Start (For First Time Setup)

**New to this project?** Start here: **[QUICK_START.md](./QUICK_START.md)**

This guide will walk you through:
- Installing prerequisites
- Cloning and setting up the project
- Starting all services
- Accessing the application

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download](https://git-scm.com/downloads)

## ⚡ Quick Setup (After Cloning)

### 1. Clone and Install
```bash
git clone <repository-url>
cd EcomAssignment
npm install
cd apps/api && npm install && cd ../..
cd apps/web && npm install && cd ../..
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### 2. Setup Environment
Create `apps/api/.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/ecom?schema=public"
```

### 3. Start Everything
```bash
# Windows - Double-click or run:
start-dev.bat

# PowerShell:
.\start-dev.ps1
```

### 4. Access the App
Open http://localhost:3000 in your browser

## 📖 Detailed Setup Instructions

### Step 1: Install Dependencies
```bash
# Install root dependencies
npm install

# Install dependencies for each workspace
cd apps/api && npm install && cd ../..
cd apps/web && npm install && cd ../..
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### Step 2: Setup Environment Variables
Create a `.env` file in `apps/api/` directory:

**Copy the example file:**
```bash
# Windows
copy apps\api\.env.example apps\api\.env

# Mac/Linux
cp apps/api/.env.example apps/api/.env
```

**Or create manually** - Copy the contents from `apps/api/.env.example` to `apps/api/.env`

The default DATABASE_URL matches the Docker Compose configuration.

### Step 3: Start Docker Services
```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379

### Step 4: Run Prisma Migrations (if needed)
```bash
cd apps/api
npx prisma generate
npx prisma migrate dev
cd ../..
```

### Step 5: Start Development Servers

**Option 1: Using the startup script (Recommended)**
```bash
# Windows
start-dev.bat

# Or PowerShell
.\start-dev.ps1
```

**Option 2: Manual startup**
```bash
# Start Turbo dev (runs apps/api and apps/web)
npm run dev

# In separate terminals:
# Express server (port 5000)
cd server && npm run dev

# Vite client (port 5173)
cd client && npm run dev
```

## 🌐 Services & URLs

Once running, the services will be available at:
- **Next.js Web App**: http://localhost:3000 (Main application)
- **NestJS API**: http://localhost:3001
- **Express Server**: http://localhost:5000
- **Vite Client**: http://localhost:5173

## 📁 Project Structure
- `apps/api` - NestJS backend API
- `apps/web` - Next.js web application
- `server` - Express.js server
- `client` - React + Vite client application

## 📚 Additional Resources

- **[QUICK_START.md](./QUICK_START.md)** - Detailed first-time setup guide
- **[ACCESS_GUIDE.md](./ACCESS_GUIDE.md)** - Service URLs and API endpoints
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

## 🛠️ Available Scripts

- `npm run dev` - Start Turbo dev (runs apps/api and apps/web)
- `npm run build` - Build all projects
- `npm run lint` - Lint all projects
- `start-dev.bat` - Start all services (Windows)
- `start-dev.ps1` - Start all services (PowerShell)
- `start-nextjs.bat` - Start only Next.js app
