import map from "@/assets/location-map.jpg";

const points = [
  { k: "Đối diện", v: "AEON Mall Bình Dương & sân Golf Sông Bé" },
  { k: "5 phút", v: "Tiếp cận trung tâm thành phố Thủ Dầu Một" },
  { k: "8 – 15 phút", v: "Kết nối KCN Việt Hương 1, VSIP 1 và VSIP 2" },
  { k: "30 – 40 phút", v: "Về ngã tư Hàng Xanh & sân bay Tân Sơn Nhất" },
];

const infra = [
  { t: "Đại lộ Bình Dương (QL13)", d: "Trục xương sống mở rộng lên 8 làn xe, khơi thông giao thương về TP.HCM." },
  { t: "Mỹ Phước – Tân Vạn & Thủ Khoa Huân", d: "Cung đường huyết mạch kết nối nội khu hoàn hảo." },
  { t: "Liền kề Vành đai 3", d: "Xóa nhòa khoảng cách Bình Dương – TP.HCM – Đồng Nai – Long An." },
  { t: "Cận kề Metro tương lai", d: "Đòn bẩy mạnh mẽ thúc đẩy giá trị bất động sản bứt phá." },
];

export function Location() {
  return (
    <section id="vitri" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— VỊ TRÍ —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">VỊ TRÍ KHU CĂN HỘ MONREI SAIGON</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <img src={map} alt="Vị trí Monrei Saigon" className="rounded-2xl shadow-elegant w-full" loading="lazy" width={1600} height={1000} />
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Monrei Saigon</strong> tọa lạc tại vị trí "độc tôn" trên mặt tiền Nguyễn Thị Minh Khai, trung tâm TP. Thuận An — trái tim năng động của khu vực Đông Bắc TP.HCM, cửa ngõ chiến lược kết nối các thủ phủ kinh tế trọng điểm.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {points.map((p) => (
                <div key={p.k} className="rounded-xl bg-secondary/50 p-5 border border-border">
                  <div className="text-xl font-display font-bold text-primary">{p.k}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-hero-gradient rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8 text-center">Hạ tầng chiến lược — Đòn bẩy vươn tầm</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {infra.map((i, idx) => (
              <div key={i.t} className="bg-background/95 backdrop-blur rounded-xl p-5">
                <div className="text-gold-foreground font-display font-bold text-xl mb-2">0{idx + 1}</div>
                <div className="font-bold text-primary text-sm mb-2">{i.t}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
