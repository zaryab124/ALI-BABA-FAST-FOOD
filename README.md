# ALI-BABA-FAST-FOOD

An enterprise-grade, multi-portal digital restaurant management, POS, kitchen automation, rider dispatch, and online customer ordering platform custom-built for **Ali Baba Fast Food (Lahore, Pakistan)**.

---

## 🌟 Key Features & Architecture

### 1. 🛍️ Customer Online Storefront & Delivery
* **Zero Aggregator Commission (0%):** Direct ordering eliminating 30%–35% third-party commissions.
* **13 Rich Menu Categories:** Full transcribed menu with Burgers, Shawarma, Paratha Rolls, Pizzas, Loaded Fries, Crispy Wings, and Beverages.
* **Cash on Delivery (COD) Checkout:** Streamlined checkout with immediate WhatsApp order notification and real-time status tracking.

### 2. 📱 Dine-In QR Table Ordering
* Instant QR table scan (`/table/[token]`) enabling contactless ordering directly from dining tables.
* Eliminates order taking errors and reduces waiter staffing overhead.

### 3. 🖥️ Kitchen Display System (KDS)
* Real-time audio-visual order alerts on kitchen touchscreens.
* Live order progression: `PENDING` ➔ `PREPARING` ➔ `READY_FOR_DELIVERY` / `COMPLETED`.
* High-contrast dark UI designed specifically for fast-paced kitchen environments.

### 4. 🛵 Rider Dispatch & Delivery Portal
* Real-time delivery dispatch dashboard for drivers.
* Route details, customer contact links, and Cash-on-Delivery payment collection confirmation.

### 5. 💳 Admin & POS Counter Billing Portal
* Counter order entry, live receipt printing, and cashier cash management.
* Comprehensive product and order management.

### 6. 📊 Executive Owner Business Intelligence Dashboard
* Real-time revenue analytics, sales graphs, average order value (AOV), and customer retention data.
* Daily, weekly, and monthly P&L reporting with exportable PDF summaries.

---

## 🛠️ Technology Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS & Framer Motion
* **Database & Auth:** Supabase PostgreSQL with RLS & Atomic RPCs + Offline Resilient Mock DB fallback
* **Icons:** Lucide React
* **Testing:** Jest & Supertest integration suite

---

## 🚀 Quick Start Guide

### Prerequisites
* Node.js 18+ or 20+
* npm or pnpm

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the assigned port) to view the customer portal.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🔐 Portal Directory

| Portal | URL Path | Role |
| :--- | :--- | :--- |
| **Customer Storefront** | `/` | Guest / Customer |
| **Dine-In Table QR** | `/table/qr-alibaba-table-01` | In-restaurant Guest |
| **Owner Dashboard** | `/owner` | Restaurant Owner |
| **Admin & POS** | `/admin` | Branch Admin & Cashier |
| **Kitchen KDS** | `/kitchen` | Kitchen Chef & Staff |
| **Rider Portal** | `/rider` | Delivery Fleet |
| **Commercial Proposal (Urdu)** | `/proposal-urdu` | Stakeholders & Client |
| **Commercial Proposal (English)**| `/proposal` | Stakeholders & Client |

---

## 📄 License & Ownership
Copyright © 2026 Ali Baba Fast Food, Lahore. All rights reserved.
Source code and customer data owned 100% by the business.
