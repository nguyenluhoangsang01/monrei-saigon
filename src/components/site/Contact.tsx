import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="lienhe" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— LIÊN HỆ —</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">ĐĂNG KÝ NHẬN BẢNG GIÁ</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Để lại thông tin để nhận báo giá chi tiết, chính sách bán hàng và ưu đãi mới nhất từ BTCLand Vietnam — đơn vị phân phối chính thức dự án Monrei Saigon.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="font-semibold text-foreground">Địa chỉ</div>
                  <div className="text-sm text-muted-foreground">Số 37, đường 37, khu đô thị Vạn Phúc</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><Phone className="w-5 h-5" /></div>
                <div>
                  <div className="font-semibold text-foreground">Hotline 24/7</div>
                  <a href="tel:0356990199" className="text-sm text-primary font-bold">0356.99.01.99</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary"><Mail className="w-5 h-5" /></div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a href="mailto:btclandvn1@gmail.com" className="text-sm text-primary">btclandvn1@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-2xl shadow-elegant p-8 border border-border"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Nhận tư vấn miễn phí</h3>
            <p className="text-sm text-muted-foreground mb-6">Tuyệt đối bảo mật thông tin cá nhân.</p>
            {sent ? (
              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
                <div className="text-3xl mb-2">✓</div>
                <p className="font-semibold text-primary">Cảm ơn quý khách!</p>
                <p className="text-sm text-muted-foreground mt-1">BTCLand sẽ liên hệ trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input required placeholder="Họ và tên" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <input required type="tel" placeholder="Số điện thoại" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <input type="email" placeholder="Email (tuỳ chọn)" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <textarea rows={3} placeholder="Loại căn hộ quan tâm (Studio, 2PN, 3PN, Shophouse...)" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <button type="submit" className="w-full rounded-full bg-gold-gradient py-3.5 font-bold text-gold-foreground shadow-gold hover:opacity-95 transition">
                  GỬI ĐĂNG KÝ NGAY
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
