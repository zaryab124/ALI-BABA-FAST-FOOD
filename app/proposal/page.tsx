'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Smartphone, 
  UtensilsCrossed, 
  Bike, 
  BarChart3, 
  ShieldCheck, 
  Printer, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Globe, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  QrCode,
  DollarSign,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function ProposalPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const DEMO_ACCOUNTS = [
    {
      role: 'Executive Owner',
      tag: 'MASTER ADMIN',
      email: 'owner@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/owner',
      description: 'Consolidated sales ledger, hourly analytics, rejected order audit, and certified PDF export.',
      color: 'amber'
    },
    {
      role: 'Store Admin & Branch POS',
      tag: 'BRANCH POS',
      email: 'admin@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/admin',
      description: 'Order confirmation, service toggles (Dine-in/Delivery), and printable table standees.',
      color: 'blue'
    },
    {
      role: 'Kitchen Chef KDS',
      tag: 'KITCHEN DISPLAY',
      email: 'kitchen@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/kitchen',
      description: 'Real-time kitchen order bump bar with prep timers, item checklists, and audio alerts.',
      color: 'emerald'
    },
    {
      role: 'Delivery Rider Driver',
      tag: 'DELIVERY DISPATCH',
      email: 'rider@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/rider',
      description: 'Ready delivery queue, WhatsApp customer dispatch slip, turn-by-turn navigation, and cash ledger.',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Top Floating Action Bar (Hidden in Print) */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="badge" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">COMMERCIAL PROPOSAL</span>
              <h1 className="text-sm font-bold text-white">Ali Baba Fast Food Digital Platform</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/OK_Restaurant_International_Commercial_Proposal.pdf"
              download="Ali_Baba_Fast_Food_Commercial_Proposal.pdf"
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer border border-slate-700"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" /> Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save as PDF
            </button>
            <Link
              href="/"
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
            >
              Customer App
            </Link>
          </div>
        </div>
      </div>

      {/* Main Document Body */}
      <main id="printable-proposal" className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 space-y-10 print:p-0 print:space-y-6">
        
        {/* Cover / Document Header */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl print:border-none print:shadow-none print:bg-white print:p-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6 print:border-black">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3 print:hidden">
                <Sparkles className="w-3.5 h-3.5" /> Turnkey Enterprise Edition v2.4
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight print:text-black">
                ALI BABA FAST FOOD
              </h1>
              <p className="text-amber-500 font-extrabold text-sm sm:text-base mt-1 uppercase tracking-wider print:text-black">
                Commercial Proposal & Full Technology Handover
              </p>
              <p className="text-xs text-slate-400 mt-1 print:text-gray-600">
                Single-Branch & Multi-Branch Real-Time Ordering, Kitchen Display System (KDS), Delivery Dispatch & Executive Audit Ledger
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-right print:bg-gray-100 print:border-gray-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Proposal Document</span>
              <strong className="text-xs font-mono text-white block print:text-black">EXP-ALIBABA-2026-INT</strong>
              <span className="text-[10px] text-emerald-400 font-bold uppercase mt-1 inline-block">100% Ready for Handover</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 print:grid-cols-4">
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Commission Fee</span>
              <span className="text-lg font-black text-emerald-400 print:text-black">0% (Zero)</span>
              <span className="text-[10px] text-slate-400 block">Keep 100% Profits</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Table Turn Rate</span>
              <span className="text-lg font-black text-amber-400 print:text-black">+40% Faster</span>
              <span className="text-[10px] text-slate-400 block">Contactless QR Dine-in</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Active Branches</span>
              <span className="text-lg font-black text-blue-400 print:text-black">1 Main Branch</span>
              <span className="text-[10px] text-slate-400 block">Expandable Anytime</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Maintenance</span>
              <span className="text-lg font-black text-purple-400 print:text-black">Lifetime</span>
              <span className="text-[10px] text-slate-400 block">Zero Recurring Royalties</span>
            </div>
          </div>
        </section>

        {/* 1. Executive Summary & Value Proposition */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <DollarSign className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              1. Executive Summary & Business Value Proposition
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
            This proposal offers a full commercial acquisition and source code buyout of the <strong>Ali Baba Fast Food Digital Platform</strong>. 
            Built for modern hospitality operations, this software removes your dependence on third-party food delivery platforms that charge up to 35% commission. 
            It connects dine-in customers, buffet visitors, home delivery shoppers, branch managers, kitchen cooking staff, delivery riders, and executive leadership 
            under a single unified, real-time database.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-amber-400 print:text-black uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 print:text-black" /> Complete Digital Sovereignty
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                You own 100% of your customer records, phone numbers, purchase patterns, and order history. No aggregator can hold your client data hostage.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-amber-400 print:text-black uppercase flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400 print:text-black" /> Instant Table & Delivery Turnaround
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                Dine-in guests scan dynamic QR codes to order instantly from their table. Kitchen KDS alerts chefs via audio chimes with zero lost paper tickets.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-amber-400 print:text-black uppercase flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-purple-400 print:text-black" /> Audit-Grade Financial Tracking
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                Zero revenue leakage. Rejected and cancelled orders are segregated into audit logs with realized cash reported down to the exact rupee.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Platform Modules & Features */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <Building2 className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              2. Complete Ecosystem Architecture & Core Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Customer Module */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-gray-300">
              <div className="flex items-center gap-2 text-amber-400 print:text-black font-black text-sm">
                <Smartphone className="w-4 h-4" /> 1. Customer Ordering & Open Buffet
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside print:text-gray-800">
                <li>Dynamic branch selection with live distance computation.</li>
                <li>Dine-In Table QR code token ordering with auto-table detection.</li>
                <li>Distance-based delivery zone fee calculation (0-5 km, 5-10 km, etc.).</li>
                <li>Open Buffet pass registration with digital verification QR tickets.</li>
                <li>Real-time order tracking with live status updates.</li>
              </ul>
            </div>

            {/* Branch Admin Module */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-gray-300">
              <div className="flex items-center gap-2 text-blue-400 print:text-black font-black text-sm">
                <Building2 className="w-4 h-4" /> 2. Branch Admin Operations POS
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside print:text-gray-800">
                <li>Live order intake (Pending ➔ Confirmed ➔ Preparing ➔ Ready).</li>
                <li>Dynamic branch capability switches (Dine-in, Takeaway, Delivery).</li>
                <li>Branch-specific menu availability & pricing overrides.</li>
                <li>Custom delivery zone setup with maximum radius controls.</li>
                <li>One-click printable QR table standees for in-restaurant tables.</li>
              </ul>
            </div>

            {/* Kitchen Module */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-gray-300">
              <div className="flex items-center gap-2 text-emerald-400 print:text-black font-black text-sm">
                <UtensilsCrossed className="w-4 h-4" /> 3. Kitchen Display System (KDS)
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside print:text-gray-800">
                <li>Real-time kitchen bump bar with acoustic chime notifications.</li>
                <li>Itemized ingredient & variant preparation checklists.</li>
                <li>Elapsed cooking timers with urgency indicators (Yellow ➔ Red).</li>
                <li>Instant order dispatch directly notifying delivery riders and admins.</li>
              </ul>
            </div>

            {/* Rider Module */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-gray-300">
              <div className="flex items-center gap-2 text-purple-400 print:text-black font-black text-sm">
                <Bike className="w-4 h-4" /> 4. Rider Delivery & Dispatch Portal
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside print:text-gray-800">
                <li>Live queue of food orders ready for pickup.</li>
                <li>1-click WhatsApp customer delivery dispatch slip generator.</li>
                <li>Direct Google Maps turn-by-turn navigation deep-links.</li>
                <li>Cash collection recording upon physical delivery handover.</li>
              </ul>
            </div>

          </div>

          {/* Owner Executive Module */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 print:bg-white print:border-gray-300">
            <div className="flex items-center gap-2 text-amber-400 print:text-black font-black text-sm">
              <BarChart3 className="w-4 h-4" /> 5. Executive Owner Financial & Audit Portal
            </div>
            <p className="text-xs text-slate-300 print:text-gray-800">
              Multi-branch centralized oversight: view consolidated sales across all branches simultaneously or filter by individual branch. 
              Features real-time 24-hour daily ledgers, weekly comparative revenue trends, monthly breakdowns, top-selling dish rankings, 
              rejected order loss auditing, and certified multi-period executive PDF exports.
            </p>
          </div>
        </section>

        {/* 3. Live Links & Testing Credentials */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <Globe className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              3. Combined Live Links & Testing Credentials
            </h2>
          </div>
          <p className="text-xs text-slate-400 print:text-gray-600">
            Use these active staff credentials to log in and test each operational role in the live production environment:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-800 rounded-2xl overflow-hidden print:border-gray-300">
              <thead className="bg-slate-900 text-slate-400 uppercase font-black print:bg-gray-100 print:text-black">
                <tr>
                  <th className="p-3">Portal Role</th>
                  <th className="p-3">Live Portal Link</th>
                  <th className="p-3">Login Email</th>
                  <th className="p-3">Password</th>
                  <th className="p-3 print:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-950 text-slate-200 print:bg-white print:text-black print:divide-gray-200">
                {DEMO_ACCOUNTS.map((acc, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40">
                    <td className="p-3 font-bold">
                      <span className="text-amber-400 print:text-black block">{acc.role}</span>
                      <span className="text-[10px] text-slate-500 print:text-gray-500">{acc.tag}</span>
                    </td>
                    <td className="p-3 font-mono text-[11px] text-blue-400 print:text-black">
                      <a href={`https://ok-restuerent.vercel.app${acc.path}`} target="_blank" rel="noreferrer" className="underline flex items-center gap-1">
                        ok-restuerent.vercel.app{acc.path} <ExternalLink className="w-3 h-3 inline print:hidden" />
                      </a>
                    </td>
                    <td className="p-3 font-mono text-[11px] text-slate-300 print:text-black">
                      {acc.email}
                    </td>
                    <td className="p-3 font-mono text-[11px] text-amber-400 print:text-black font-bold">
                      {acc.password}
                    </td>
                    <td className="p-3 print:hidden">
                      <button
                        onClick={() => handleCopy(`${acc.email} / ${acc.password}`, acc.email)}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[10px] font-bold text-slate-300 flex items-center gap-1 transition-all"
                      >
                        {copiedKey === acc.email ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        {copiedKey === acc.email ? 'Copied' : 'Copy'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Direct Customer Demos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 print:hidden">
            <a
              href="/table/qr_dera_t01_sec789"
              target="_blank"
              className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-between text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <QrCode className="w-4 h-4 text-amber-400" />
                <div>
                  <strong className="text-white block">Table 01 Direct QR Scan Demo</strong>
                  <span className="text-[11px] text-slate-400">Experience customer auto-routed table ordering</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href="/buffet"
              target="_blank"
              className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl flex items-center justify-between text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <UtensilsCrossed className="w-4 h-4 text-emerald-400" />
                <div>
                  <strong className="text-white block">Open Buffet Entry Pass Booking</strong>
                  <span className="text-[11px] text-slate-400">Generate guest registration QR tickets</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </section>

        {/* 4. Operational Step-by-Step Guidance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <HelpCircle className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              4. End-to-End Operational Testing Guidance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <span className="font-black text-amber-400 uppercase print:text-black block">Step A: Place a Customer Order</span>
              <p className="text-slate-300 print:text-gray-700">
                1. Navigate to the online menu or scan the Table QR link.<br />
                2. Branch: <strong>Ali Baba Fast Food (Main Branch, Lahore, Pakistan)</strong>.<br />
                3. Add items to cart (e.g. Spicy Arabian Broast, Grill Burger) and choose order type: <strong>Dine-In</strong>, <strong>Takeaway</strong>, or <strong>Delivery</strong>.<br />
                4. Select <strong>Cash on Delivery / Pay at Counter</strong> and confirm order. Note down the Order # (e.g. AB-1001).
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <span className="font-black text-blue-400 uppercase print:text-black block">Step B: Branch Admin Confirmation</span>
              <p className="text-slate-300 print:text-gray-700">
                1. Open <a href="/admin" className="underline text-blue-400">/admin</a> and log in as Branch Admin.<br />
                2. The new order will appear with an amber tag.<br />
                3. Click <strong>"Confirm Order"</strong>. The order status advances to CONFIRMED and is automatically dispatched to the kitchen.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <span className="font-black text-emerald-400 uppercase print:text-black block">Step C: Kitchen KDS Cooking Flow</span>
              <p className="text-slate-300 print:text-gray-700">
                1. Open <a href="/kitchen" className="underline text-blue-400">/kitchen</a> and log in with kitchen credentials.<br />
                2. New tickets appear with cooking timers and itemized quantities.<br />
                3. Click <strong>"Start Preparing"</strong> ➔ when finished, click <strong>"Mark as Ready"</strong>.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <span className="font-black text-purple-400 uppercase print:text-black block">Step D: Delivery Dispatch & Owner Audit</span>
              <p className="text-slate-300 print:text-gray-700">
                1. In <a href="/rider" className="underline text-blue-400">/rider</a>, claim the ready order, click <strong>WhatsApp</strong> to generate the customer slip, and click <strong>"Deliver Order"</strong>.<br />
                2. In <a href="/owner" className="underline text-blue-400">/owner</a>, observe that net realized revenue updates immediately.<br />
                3. Click <strong>"Export / Print Financial PDF"</strong> to export an audit-certified statement.
              </p>
            </div>

          </div>
        </section>

        {/* 5. Commercial Terms & Lifetime Surety */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <ShieldCheck className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              5. Commercial Deliverables & Lifetime Maintenance Surety
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-white uppercase print:text-black flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 print:text-black" /> Personal Branded Domain Setup
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                Full configuration and deployment on your custom domain name (e.g., <code>order.yourrestaurant.com</code> or <code>www.yourbrand.com</code>) with automated SSL/TLS encryption, DNS records, and branded headers.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-white uppercase print:text-black flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 print:text-black" /> Lifetime Maintenance & Bug Warranty
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                Unconditional written assurance: lifetime bug fixes and maintenance support for core features with <strong>zero recurring vendor licensing fees or maintenance retainers</strong>.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-white uppercase print:text-black flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400 print:text-black" /> Complete Database Ownership
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                100% transfer of the master Supabase PostgreSQL database project, row-level security (RLS) policies, atomic stored procedures, and encrypted staff profiles directly to your business account.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-white uppercase print:text-black flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400 print:text-black" /> 100% Source Code & IP Transfer
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                Complete GitHub repository ownership (Next.js 14, Tailwind CSS, TypeScript) with full rights to modify, white-label, rebrand, or expand to unlimited international branches with zero vendor lock-in.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Commercial Milestone Structure */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <DollarSign className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              6. Commercial Milestone Payment Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* 25% Advance */}
            <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-3xl p-6 space-y-3 print:bg-gray-50 print:border-gray-400">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-black text-amber-400 print:text-black">25%</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider print:text-black">
                  Advance Deposit
                </span>
              </div>
              <h3 className="text-sm font-black text-white print:text-black uppercase">
                Contract Signing & Staging Initiation
              </h3>
              <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                Payable upon signing this commercial proposal. Initiates restaurant branding customizations (custom logo, menu onboarding, branch GPS coordinates), custom domain mapping, and staging environment initialization.
              </p>
            </div>

            {/* 75% Handover */}
            <div className="bg-blue-500/10 border-2 border-blue-500/40 rounded-3xl p-6 space-y-3 print:bg-gray-50 print:border-gray-400">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-black text-blue-400 print:text-black">75%</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider print:text-black">
                  Final Takeover
                </span>
              </div>
              <h3 className="text-sm font-black text-white print:text-black uppercase">
                Final Handover & Project Takeover Balance
              </h3>
              <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                Payable strictly upon your complete inspection and approval of the live production environment on your custom domain, transfer of the GitHub source code repository, handover of master Supabase database credentials, and staff training completion.
              </p>
            </div>

          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400 flex items-start gap-3 print:bg-white print:border-gray-300 print:text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 print:text-black" />
            <div>
              <strong className="text-white print:text-black block mb-0.5">Buyer Protection Guarantee</strong>
              The final 75% payment is strictly contingent upon your 100% satisfaction and verification that all features (Table QR Ordering, Admin POS, Kitchen KDS, Rider Delivery Dispatch, and Owner Financial Audits) are operating flawlessly on your custom domain.
            </div>
          </div>
        </section>

        {/* 7. Sign-off & Acceptance */}
        <section className="space-y-4 pt-4 border-t border-slate-800 print:border-black">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white uppercase tracking-wider print:text-black">
              7. Formal Acceptance & Authorization
            </h2>
          </div>
          <p className="text-xs text-slate-400 print:text-gray-600">
            By signing below, both parties agree to the commercial terms, milestone schedule (25% Advance / 75% Handover), and intellectual property transfer outlined in this document:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 print:bg-white print:border-gray-300">
              <strong className="text-xs font-black text-white print:text-black uppercase block">
                Prepared & Authorized By (Vendor / Engineering):
              </strong>
              <div className="pt-8 border-b border-dashed border-slate-700 print:border-gray-400"></div>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-0.5">
                <p className="font-bold text-white print:text-black">Lead Software Architect & Engineering Team</p>
                <p className="text-slate-400 print:text-gray-600">Ali Baba Fast Food Platform</p>
                <p className="text-slate-500 text-[10px] print:text-gray-500 font-mono">Date: October 18, 2026</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 print:bg-white print:border-gray-300">
              <strong className="text-xs font-black text-white print:text-black uppercase block">
                Accepted & Agreed By (Buyer / Restaurant Executive):
              </strong>
              <div className="pt-8 border-b border-dashed border-slate-700 print:border-gray-400"></div>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-0.5">
                <p className="font-bold text-white print:text-black">Authorized Representative / Business Owner</p>
                <p className="text-slate-400 print:text-gray-600">Organization: Ali Baba Fast Food</p>
                <p className="text-slate-500 text-[10px] print:text-gray-500 font-mono">Date: ________________________</p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-800/60 text-xs text-slate-500 print:text-gray-500 print:border-gray-200">
          <p>© 2026 Ali Baba Fast Food Digital Platform. All rights reserved.</p>
          <p className="text-[11px] mt-1">Confidential Commercial Proposal • Built for High-Volume Fast Food & Dine-In Operations</p>
        </footer>

      </main>

    </div>
  );
}
