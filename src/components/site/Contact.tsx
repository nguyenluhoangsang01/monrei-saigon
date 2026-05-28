import { MapPin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="lienhe" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— LIÊN HỆ —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">ĐĂNG KÝ NHẬN BẢNG GIÁ</h2>
          <p className="text-muted-foreground leading-relaxed">
            Để lại thông tin để nhận báo giá chi tiết, chính sách bán hàng và ưu đãi mới nhất từ BTCLand Vietnam — đơn vị phân phối chính thức dự án Monrei Saigon.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-4 bg-card rounded-2xl shadow-elegant p-6 border border-border">
            <div className="rounded-full bg-primary/10 p-4 text-primary"><MapPin className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold text-foreground mb-1">Địa chỉ</div>
              <div className="text-sm text-muted-foreground">Số 37, đường 37, khu đô thị Vạn Phúc</div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 bg-card rounded-2xl shadow-elegant p-6 border border-border">
            <div className="rounded-full bg-primary/10 p-4 text-primary"><Phone className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold text-foreground mb-1">Hotline 24/7</div>
              <a href="tel:0356990199" className="text-sm text-primary font-bold">0356.99.01.99</a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 bg-card rounded-2xl shadow-elegant p-6 border border-border">
            <div className="rounded-full bg-primary/10 p-4 text-primary"><Mail className="w-6 h-6" /></div>
            <div>
              <div className="font-semibold text-foreground mb-1">Email</div>
              <a href="mailto:btclandvn1@gmail.com" className="text-sm text-primary">btclandvn1@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
