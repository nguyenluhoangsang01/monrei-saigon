import logo from "@/assets/btc-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="BTC Land Vietnam" className="h-14 w-auto mb-4" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            BTCLand Vietnam — Đơn vị phân phối chính thức các dự án bất động sản cao cấp tại TP.HCM, Bình Dương và khu vực Đông Nam Bộ.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gold">Thông tin liên hệ</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Số 37, đường 37, KĐT Vạn Phúc</li>
            <li>Hotline: <a href="tel:0356990199" className="font-bold text-gold">0356.99.01.99</a></li>
            <li>Email: btclandvn1@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gold">Dự án Monrei Saigon</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>MT Nguyễn Thị Minh Khai, Thuận An, Bình Dương</li>
            <li>CĐT: Mitsubishi · Tokyu Land · Phát Đạt</li>
            <li>Ra mắt: T5/2026</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 mt-10 pt-6 border-t border-primary-foreground/15 text-xs text-primary-foreground/60 text-center">
        © 2026 BTCLand Vietnam. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}
