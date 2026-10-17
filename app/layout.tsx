import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Ali Baba Fast Food — Let's Hungry Reload",
  description: "Official ordering platform for Ali Baba Fast Food (New Alibaba Fast Food). Let's Hungry Reload! Spicy Arabian Broast, Special Grill Burgers, Pizzas, Shawarma & Fast Delivery in Lahore: 0320-4649460.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
