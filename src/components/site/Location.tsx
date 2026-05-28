import { monreiImages } from "@/lib/monreiImages";

const points = [
  { k: "Đối diện", v: "AEON Mall Bình Dương & sân Golf Sông Bé" },
  { k: "5 phút", v: "Tiếp cận trung tâm thành phố Thủ Dầu Một" },
  { k: "8 – 15 phút", v: "Kết nối KCN Việt Hương 1, VSIP 1 và VSIP 2" },
  { k: "30 – 40 phút", v: "Về ngã tư Hàng Xanh & sân bay Tân Sơn Nhất" },
];

const infra = [
  {
    img: monreiImages.infraQ13,
    t: "Đại lộ Bình Dương (Quốc lộ 13)",
    d: "Trục xương sống đang chuyển mình mở rộng lên 8 làn xe, khơi thông dòng chảy giao thương về trung tâm TP.HCM.",
  },
  {
    img: monreiImages.infraMyPhuocTanVan,
    t: "Đường Mỹ Phước – Tân Vạn & Thủ Khoa Huân",
    d: "Những cung đường huyết mạch giúp vận chuyển và kết nối nội khu hoàn hảo, gia tăng khả năng tiếp cận các tiện ích dịch vụ đẳng cấp.",
  },
  {
    img: monreiImages.infraVanhDai3,
    t: "Liền kề Vành đai 3",
    d: "Tuyến đường động lực quan trọng nhất phía Nam, xóa nhòa khoảng cách giữa Bình Dương – TP.HCM – Đồng Nai – Long An.",
  },
  {
    img: monreiImages.infraMetro,
    t: "Cận kề các trạm Metro tương lai",
    d: "Đòn bẩy mạnh mẽ thúc đẩy giá trị bất động sản bứt phá theo mô hình đô thị gắn liền với giao thông công cộng hiện đại.",
  },
];

export function Location() {
  return (
    <section id="vitri" className="pt-24">
      <div className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">
            — VỊ TRÍ —
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            VỊ TRÍ KHU CĂN HỘ MONREI SAIGON
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={monreiImages.locationMap}
            alt="Vị trí Monrei Saigon"
            className="rounded-2xl shadow-elegant w-full"
            loading="lazy"
            width={1600}
            height={1000}
          />

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Monrei Saigon</strong> tọa lạc tại vị trí "độc
              tôn" trên mặt tiền Nguyễn Thị Minh Khai, trung tâm TP. Thuận An — trái tim năng động
              của khu vực Đông Bắc TP.HCM, cửa ngõ chiến lược kết nối các thủ phủ kinh tế trọng
              điểm.
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
      </div>

      <div className="bg-[#0d5688] py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-white mb-10">
            Hạ tầng chiến lược – Đòn bẩy vươn tầm tâm điểm
          </h3>

          <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
            {infra.map((item) => (
              <article
                key={item.t}
                className="overflow-hidden bg-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <img
                  src={item.img}
                  alt={item.t}
                  className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[390px]"
                  loading="lazy"
                  width={900}
                  height={620}
                />

                <div className="min-h-[104px] px-5 py-4">
                  <h4 className="text-center text-lg font-bold text-primary">{item.t}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground">{item.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
