import { Phone } from "lucide-react";
import logo from "@/assets/btc-logo.png";

const nav = [
  { label: "TỔNG QUAN", href: "#tongquan" },
  { label: "VỊ TRÍ", href: "#vitri" },
  { label: "TIỆN ÍCH", href: "#tienich" },
  { label: "MẶT BẰNG", href: "#matbang" },
  { label: "NHÀ MẪU", href: "#nhamau" },
  { label: "LIÊN HỆ", href: "#lienhe" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="BTC Land Vietnam" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:0356990199" className="hidden md:flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-primary">
            <Phone className="w-4 h-4" />
            <span className="font-bold text-sm">0356.99.01.99</span>
          </a>
          <a href="#lienhe" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold hover:opacity-95 transition">
            BẢNG GIÁ
          </a>
        </div>
      </div>
    </header>
  );
}
