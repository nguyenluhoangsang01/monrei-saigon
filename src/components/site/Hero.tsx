import { monreiImages } from "@/lib/monreiImages";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <img
        src={monreiImages.hero}
        alt="Monrei Saigon"
        className="absolute inset-0 w-full h-full object-cover"
        width={1000}
        height={563}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      <div className="relative container mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] font-semibold text-primary mb-4">
            BTCLAND VIETNAM PHÂN PHỐI
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.05] text-balance">
            MONREI
            <br />
            SAIGON
          </h1>
          <p className="mt-6 text-2xl md:text-3xl font-display italic text-gold-foreground">
            Thành phố Nước – Thuỷ liệu
            <br />
            <span className="text-primary">đầu tiên tại Việt Nam</span>
          </p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            Dự án phức hợp căn hộ cao cấp 4,46 ha tại mặt tiền Nguyễn Thị Minh Khai, Thuận An — kiệt
            tác của Mitsubishi Corporation, Tokyu Land & Phát Đạt.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#lienhe"
              className="inline-flex items-center gap-2 rounded-full bg-hero-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant hover:opacity-95 transition"
            >
              NHẬN BẢNG GIÁ
            </a>
            <a
              href="#tongquan"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 px-7 py-3.5 text-sm font-bold text-primary hover:bg-primary/5 transition"
            >
              KHÁM PHÁ DỰ ÁN
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "4,46", l: "HA QUỸ ĐẤT" },
              { v: "39", l: "TẦNG CAO" },
              { v: "2.717", l: "CĂN HỘ" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-gold pl-4">
                <div className="text-3xl font-display font-bold text-primary">{s.v}</div>
                <div className="text-xs tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
