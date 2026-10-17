'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Printer, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowLeft,
  DollarSign,
  Utensils,
  Clock,
  Smartphone,
  ChefHat,
  Bike,
  QrCode,
  Globe,
  FileText
} from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function UrduProposalPage() {
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
      role: 'ایگزیکٹو اونر پورٹل (Executive Owner)',
      tag: 'MASTER ADMIN',
      email: 'owner@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/owner',
      description: 'روزانہ، ہفتہ وار اور ماہانہ سیلز کا آڈٹ، خالص منافع، مسترد شدہ آرڈرز کا حساب اور پی ڈی ایف سرٹیفکیٹ۔',
      color: 'amber'
    },
    {
      role: 'برانچ مینیجر و پوائنٹ آف سیل (Store POS)',
      tag: 'BRANCH POS',
      email: 'admin@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/admin',
      description: 'نئے آرڈرز کی تصدیق، ڈائن اِن، ٹیک اوے، ڈلیوری سروس کی فوری سیٹنگز اور کیو آر سٹینڈیز پرنٹنگ۔',
      color: 'blue'
    },
    {
      role: 'کچن ڈسپلے سسٹم (Kitchen Chef KDS)',
      tag: 'KITCHEN DISPLAY',
      email: 'kitchen@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/kitchen',
      description: 'باورچی خانے کے لیے آرڈر اسکرین، ہر ڈش کے پکنے کا ٹائمر، آئٹم چیک لسٹ اور خودکار آڈیو بیپ۔',
      color: 'emerald'
    },
    {
      role: 'ڈلیوری رائیڈر پورٹل (Delivery Rider)',
      tag: 'DELIVERY DISPATCH',
      email: 'rider@alibabafastfood.com',
      password: 'okaykarubas12390',
      path: '/rider',
      description: 'ڈلیوری آرڈرز کی قطار، کسٹمر کا فون اور پتہ، ون-کلک واٹس ایپ ڈسپیچ سلپ اور کیش کا حساب۔',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black" dir="rtl">
      
      {/* Top Floating Action Bar (Hidden in Print) */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="badge" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">کمرشل پروپوزل (اردو ایڈیشن)</span>
              <h1 className="text-sm font-bold text-white">علی بابا فاسٹ فوڈ ڈیجیٹل سسٹم — لاہور</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Ali_Baba_Fast_Food_Commercial_Proposal_Urdu.pdf"
              download="Ali_Baba_Fast_Food_Commercial_Proposal_Urdu.pdf"
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer border border-slate-700"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" /> ڈاؤنلوڈ پی ڈی ایف (PDF)
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> پرنٹ کریں / PDF محفوظ کریں
            </button>
            <Link
              href="/"
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
            >
              کسٹمر پورٹل
            </Link>
          </div>
        </div>
      </div>

      {/* Main Document Body */}
      <main id="printable-proposal" className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 space-y-10 print:p-0 print:space-y-6">
        
        {/* Cover / Document Header */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl print:border-none print:shadow-none print:bg-white print:p-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-slate-800 pb-6 print:border-black">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-2xl overflow-hidden border-2 border-amber-500/50 p-1 flex-shrink-0 shadow-lg shadow-amber-500/20">
                <img src="/images/alibaba-logo.png" alt="New Ali Baba Fast Food" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-2 print:hidden">
                  <Sparkles className="w-3.5 h-3.5" /> کمرشل کاروباری پیشکش (Commercial Proposal)
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight print:text-black">
                  نیو علی بابا فاسٹ فوڈ (New Ali Baba Fast Food)
                </h1>
                <p className="text-amber-500 font-extrabold text-sm sm:text-base mt-0.5 tracking-wider print:text-black">
                  “Let&apos;s Hungry Reload” • لاہور برانچ
                </p>
                <p className="text-xs text-slate-400 mt-1 print:text-gray-600">
                  ریئل ٹائم کسٹمر آرڈرنگ، کچن ڈسپلے (KDS)، رائیڈر ڈسپیچ اور ایگزیکٹو آڈٹ روزنامچہ
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-right print:bg-gray-100 print:border-gray-300 min-w-[200px]">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">پروپوزل نمبر</span>
              <strong className="text-xs font-mono text-white block print:text-black">EXP-ALIBABA-2026-URD</strong>
              <span className="text-[10px] text-emerald-400 font-bold uppercase mt-1 inline-block">100% حوالگی کے لیے تیار</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 print:grid-cols-4">
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] font-bold text-slate-500 block">کمیشن فیس</span>
              <span className="text-lg font-black text-emerald-400 print:text-black">0% (صفر)</span>
              <span className="text-[10px] text-slate-400 block">100% منافع آپ کا</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] font-bold text-slate-500 block">آرڈر کی رفتار</span>
              <span className="text-lg font-black text-amber-400 print:text-black">+40% تیز</span>
              <span className="text-[10px] text-slate-400 block">کیو آر ٹیبل آرڈرنگ</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] font-bold text-slate-500 block">برانچ سیٹ اپ</span>
              <span className="text-lg font-black text-blue-400 print:text-black">1 مین برانچ</span>
              <span className="text-[10px] text-slate-400 block">لاہور (توسیع کے لیے تیار)</span>
            </div>
            <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 print:bg-gray-50 print:border-gray-300">
              <span className="text-[10px] font-bold text-slate-500 block">مینٹیننس وارنٹی</span>
              <span className="text-lg font-black text-purple-400 print:text-black">تاحیات مفت</span>
              <span className="text-[10px] text-slate-400 block">بغیر کسی ماہانہ فیس</span>
            </div>
          </div>
        </section>

        {/* 1. Executive Summary & Value Proposition */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <DollarSign className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white tracking-wider print:text-black">
              ۱. ایگزیکٹو سمری اور آپ کے ریستوران کے لیے منافع کا تجزیہ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800 text-justify">
            یہ پیشکش <strong>علی بابا فاسٹ فوڈ (لاہور)</strong> کے لیے مکمل کسٹم ڈیجیٹل سسٹم اور سورس کوڈ کی مکمل ملکیت حاصل کرنے کے لیے تیار کی گئی ہے۔ 
            فوڈ پانڈا یا دوسری ڈلیوری سروسز آپ کے ہر آرڈر پر <strong>30% سے 35% تک کٹوتی</strong> کر لیتی ہیں۔ اس سسٹم کے نفاذ کے بعد آپ کے ریستوران کو کسی تیسرے فریق کو ایک روپیہ بھی کمیشن نہیں دینا پڑے گا۔ 
            کسٹمر کا آرڈر براہ راست آپ کے کچن اور رائیڈر کے پاس جائے گا اور تمام کیش اور منافع سیدھا آپ کے پاس رہے گا۔
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-amber-400 print:text-black flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 print:text-black" /> کسٹمرز ڈیٹا کی 100% ملکیت
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                آپ کے تمام گاہکوں کے نام، فون نمبر، پتے اور پسندیدہ کھانے آپ کے ذاتی ڈیٹا بیس میں محفوظ رہتے ہیں۔
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-blue-400 print:text-black flex items-center gap-1.5">
                <ChefHat className="w-4 h-4 text-blue-400 print:text-black" /> کچن ڈسپلے اسکرین (KDS)
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                باورچی خانے کے لیے کاغذ کی پرچیوں کا خاتمہ۔ لائیو اسکرین پر آرڈرز، وقت کا ٹائمر اور تیاری کی فوری اپ ڈیٹ۔
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="text-xs font-black text-purple-400 print:text-black flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-purple-400 print:text-black" /> واٹس ایپ آٹو ڈسپیچ سلپس
              </h3>
              <p className="text-xs text-slate-400 print:text-gray-700">
                کھانا پیک ہوتے ہی رائیڈر ایک کلک سے گاہک کو لائیو رسید اور ڈسپیچ کا واٹس ایپ میسج بھیج دیتا ہے۔
              </p>
            </div>
          </div>
        </section>

        {/* 2. Menu Integration */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <Utensils className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white tracking-wider print:text-black">
              ۲. علی بابا فاسٹ فوڈ کے تمام ۱۳ مینو کارڈ سیکشنز کا مکمل اندراج
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800">
            آپ کے تینوں اصل مینو کارڈز کے مطابق تمام قیمتیں اور ڈیلز سسٹم میں باقاعدہ محفوظ کی جا چکی ہیں:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-right border-collapse border border-slate-800 print:border-gray-300">
              <thead>
                <tr className="bg-slate-900 print:bg-gray-100 text-amber-400 print:text-black">
                  <th className="p-3 border border-slate-800 print:border-gray-300">کیٹیگری</th>
                  <th className="p-3 border border-slate-800 print:border-gray-300">کھانوں اور ڈیلز کی تفصیل</th>
                  <th className="p-3 border border-slate-800 print:border-gray-300">قیمتیں</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 print:divide-gray-300 text-slate-300 print:text-gray-800">
                <tr>
                  <td className="p-3 font-bold border border-slate-800 print:border-gray-300">سپائسی عریبین بروسٹ</td>
                  <td className="p-3 border border-slate-800 print:border-gray-300">کوارٹر بروسٹ (Rs. 700)، ہاف بروسٹ (Rs. 1350)، فل بروسٹ (Rs. 2400)، انجیکٹڈ نگٹس اور ونگز</td>
                  <td className="p-3 font-mono font-bold text-amber-400 print:text-black border border-slate-800 print:border-gray-300">Rs. 380 - 2400</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-800 print:border-gray-300">او جی اور فیملی ڈیلز</td>
                  <td className="p-3 border border-slate-800 print:border-gray-300">او جی کوارٹر ڈیل (Rs. 750)، او جی ڈبل اپ (Rs. 1420)، فیملی فیسٹ (Rs. 2550)، فاسٹ فوڈ ڈیلز ۱ تا ۵</td>
                  <td className="p-3 font-mono font-bold text-amber-400 print:text-black border border-slate-800 print:border-gray-300">Rs. 520 - 2550</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-800 print:border-gray-300">چارکول اسپیشل گرل برگرز</td>
                  <td className="p-3 border border-slate-800 print:border-gray-300">چمیکسی، گرل تھرل، اے بی دی باس، بادشاہ، امیگو، سونک، موزارٹ اور پیزا برگر</td>
                  <td className="p-3 font-mono font-bold text-amber-400 print:text-black border border-slate-800 print:border-gray-300">Rs. 450 - 750</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-800 print:border-gray-300">پریمیم و کراؤن پیزا</td>
                  <td className="p-3 border border-slate-800 print:border-gray-300">اے بی سگنیچر، فلی اسٹیک، ملائی بوٹی، لزانیا، کراؤن کرسٹ، کباب سٹفر (سمال، میڈیم، لارج، XXL)</td>
                  <td className="p-3 font-mono font-bold text-amber-400 print:text-black border border-slate-800 print:border-gray-300">Rs. 650 - 2400</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold border border-slate-800 print:border-gray-300">شوارما، پراٹھا رولز اور پاستا</td>
                  <td className="p-3 border border-slate-800 print:border-gray-300">عریبین شوارما، زنگر پراٹھا رول، ٹورٹیا ریپ، کریمی الفریڈو پاستا، پیزا فرائز اور کولڈ ڈرنکس</td>
                  <td className="p-3 font-mono font-bold text-amber-400 print:text-black border border-slate-800 print:border-gray-300">Rs. 80 - 850</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Credentials & Demo Portals */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <Globe className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white tracking-wider print:text-black">
              ۳. ٹیسٹنگ کے لیے تمام پورٹلز، یوزر نیم اور پاس ورڈز (Credentials)
            </h2>
          </div>
          
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-xs font-bold text-amber-400 block">تمام پورٹلز کا مشترکہ پاس ورڈ (Testing Password):</span>
              <strong className="text-sm font-mono text-white">okaykarubas12390</strong>
            </div>
            <button
              onClick={() => handleCopy('okaykarubas12390', 'pwd')}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 transition-all print:hidden cursor-pointer"
            >
              {copiedKey === 'pwd' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedKey === 'pwd' ? 'کاپی ہو گیا!' : 'پاس ورڈ کاپی کریں'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEMO_ACCOUNTS.map((acc, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 print:bg-white print:border-gray-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 print:text-black">
                      {acc.tag}
                    </span>
                    <h3 className="font-bold text-sm text-white print:text-black mt-0.5">{acc.role}</h3>
                  </div>
                  <Link
                    href={acc.path}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-lg text-xs font-mono font-bold flex items-center gap-1 print:hidden"
                  >
                    پورٹل کھولیں <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <p className="text-xs text-slate-400 print:text-gray-600 leading-relaxed">
                  {acc.description}
                </p>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 print:bg-gray-50 print:border-gray-200 flex justify-between items-center text-xs font-mono" dir="ltr">
                  <span className="text-slate-300 print:text-black">{acc.email}</span>
                  <button
                    onClick={() => handleCopy(acc.email, `email-${idx}`)}
                    className="p-1 hover:text-amber-400 text-slate-500 transition-colors print:hidden"
                    title="Copy Email"
                  >
                    {copiedKey === `email-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Commercial Agreement, 25/75 Terms, Lifetime Maintenance */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print:border-black">
            <FileText className="w-5 h-5 text-amber-500 print:text-black" />
            <h2 className="text-lg font-black text-white tracking-wider print:text-black">
              ۴. کمرشل شرائط، ادائیگی کا مرحلہ وار طریقہ کار اور تاحیات معاہدہ
            </h2>
          </div>

          <div className="bg-amber-500/10 border-2 border-dashed border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-4 print:border-gray-400 print:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-lg">
                %
              </div>
              <div>
                <h3 className="text-base font-black text-white print:text-black">
                  ادائیگی کا شفاف ماڈل: 25% پیشگی بیعانہ اور 75% پروجیکٹ کے مکمل قبضے پر
                </h3>
                <span className="text-xs text-amber-400 print:text-black font-semibold">
                  (25% Advance Booking & 75% Upon Complete Handover & Source Code Buyout)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs leading-relaxed">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 print:bg-white print:border-gray-200 space-y-2">
                <span className="font-black text-amber-400 print:text-black text-sm block">مرحلہ ۱: 25% ایڈوانس بیعانہ</span>
                <p className="text-slate-300 print:text-gray-700">
                  پروجیکٹ کی تصدیق اور آغاز پر ادا کیا جائے گا۔ اس میں کلاؤڈ ڈیٹا بیس، سرور سیٹ اپ، ڈومین رجسٹریشن اور آپ کے برانڈ کے لوگو و مینو کی فائنل ترتیب شامل ہے۔
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 print:bg-white print:border-gray-200 space-y-2">
                <span className="font-black text-emerald-400 print:text-black text-sm block">مرحلہ ۲: 75% حتمی ادائیگی پروجیکٹ حوالگی پر</span>
                <p className="text-slate-300 print:text-gray-700">
                  جب آپ تمام پورٹلز کو مکمل تسلی سے ٹیسٹ کر لیں گے، لائیو آرڈرز کی جانچ ہو جائے گی اور <strong>تمام سورس کوڈ، ایڈمن لاگ انز اور ڈومین کا کنٹرول آپ کے نام منتقل (Takeover)</strong> کر دیا جائے گا۔
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="font-black text-sm text-emerald-400 print:text-black flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 print:text-black" /> تاحیات مفت مینٹیننس کی باقاعدہ ضمانت
              </h3>
              <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                سسٹم کی تاحیات تکنیکی معاونت (Free Lifetime Maintenance) فراہم کی جائے گی۔ کسی بھی غیر متوقع بگ، تکنیکی خامی یا سرور کی خرابی کو بغیر کسی اضافی چارجز کے ترجیحی بنیادوں پر حل کیا جائے گا۔
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 print:bg-white print:border-gray-300">
              <h3 className="font-black text-sm text-amber-400 print:text-black flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 print:text-black" /> ذاتی کسٹم ڈومین (.com / .pk) مع مفت SSL
              </h3>
              <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                آپ کے برانڈ کے نام کی پرسنل ویب ڈومین لائف ٹائم محفوظ SSL سیکیورٹی (https) کے ساتھ کنیکٹ کی جائے گی جس سے گوگل سرچ اور کسٹمرز میں برانڈ کی ساکھ بلند ترین سطح پر پہنچ جائے گی۔
              </p>
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-800 print:border-black">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 print:bg-white print:border-gray-300">
              <strong className="text-xs font-black text-white print:text-black block">
                ڈویلپمنٹ انجینئرنگ ٹیم (سافٹ ویئر وینڈر):
              </strong>
              <div className="pt-8 border-b border-dashed border-slate-700 print:border-gray-400"></div>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-0.5">
                <p className="font-bold text-white print:text-black">سافٹ ویئر آرکیٹیکٹ و ڈویلپمنٹ لیڈ</p>
                <p className="text-slate-400 print:text-gray-600">Ali Baba Fast Food Digital Platform</p>
                <p className="text-slate-500 text-[10px] print:text-gray-500 font-mono">تاریخ: 18 اکتوبر 2026</p>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 print:bg-white print:border-gray-300">
              <strong className="text-xs font-black text-white print:text-black block">
                علی بابا فاسٹ فوڈ (مجاز مالک / خریدار کی جانب سے):
              </strong>
              <div className="pt-8 border-b border-dashed border-slate-700 print:border-gray-400"></div>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-0.5">
                <p className="font-bold text-white print:text-black">مجاز ایگزیکٹو / مالک دستخط</p>
                <p className="text-slate-400 print:text-gray-600">ادارہ: علی بابا فاسٹ فوڈ، لاہور</p>
                <p className="text-slate-500 text-[10px] print:text-gray-500 font-mono">تاریخ: ________________________</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-800/60 text-xs text-slate-500 print:text-gray-500 print:border-gray-200">
          <p>© 2026 Ali Baba Fast Food Digital Platform (Lahore). All rights reserved.</p>
          <p className="text-[11px] mt-1">کمرشل پرپوزل دستاویز • باقاعدہ بین الاقوامی معاہدہ برائے فاسٹ فوڈ ڈیجیٹل سسٹم</p>
        </footer>

      </main>

    </div>
  );
}
