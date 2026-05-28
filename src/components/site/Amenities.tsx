import { monreiImages } from "@/lib/monreiImages";

const amenityImages = [
  {
    img: monreiImages.amenityMaster,
    t: "Tổng thể tiện ích Monrei Saigon",
    d: "Không gian tiện ích mặt nước, cảnh quan xanh và đường dạo nội khu được quy hoạch đồng bộ.",
    tag: "MASTER AMENITY",
  },
  {
    img: monreiImages.amenityWaterfall,
    t: "Thác nước mây mưa",
    d: "Điểm nhấn cảnh quan nước tạo hiệu ứng thư giãn, điều hòa vi khí hậu và tăng trải nghiệm nghỉ dưỡng.",
    tag: "WATERFALL",
  },
  {
    img: monreiImages.amenityPool,
    t: "Tổ hợp 6.500m² diện tích mặt nước & hồ bơi",
    d: "Hệ tiện ích mặt nước quy mô lớn, tương đương 65 hồ bơi trẻ em, kết hợp hồ bơi, đường dạo và cảnh quan xanh.",
    tag: "WATER PARK",
  },
  {
    img: monreiImages.amenityKids,
    t: "Sân chơi nước Kodomo",
    d: "Không gian vui chơi nước dành cho trẻ em, thiết kế sinh động, an toàn và giàu tính khám phá.",
    tag: "KODOMO",
  },
  {
    img: monreiImages.amenityHydro,
    t: "Urban Hydrotherapy City",
    d: "Không gian cảnh quan nước theo định hướng thành phố thủy liệu, kết hợp hồ thư giãn và mảng xanh nội khu.",
    tag: "HYDROTHERAPY",
  },
  {
    img: monreiImages.amenityKidsWater,
    t: "Sân chơi nước Kodomo cận cảnh",
    d: "Khu vui chơi nước với vòi phun, thác nước mini và không gian vận động dành riêng cho cư dân nhí.",
    tag: "KIDS WATER",
  },
  {
    img: monreiImages.amenitySport,
    t: "Khu thể thao ngoài trời Pocket Park",
    d: "Không gian vận động ngoài trời tích hợp sân thể thao, đường chạy bộ, đường đạp xe và cảnh quan xanh.",
    tag: "SPORT PARK",
  },
  {
    img: monreiImages.amenityKayak,
    t: "Dòng sông lười, chèo Kayak & cầu dạo bộ trên cao",
    d: "Thiết kế dòng sông lười dài 88m kết hợp hoạt động chèo kayak và cầu dạo bộ giữa mảng xanh nội khu.",
    tag: "KAYAK",
  },
  {
    img: monreiImages.amenityLuxuryCompound,
    t: "Tổ hợp Luxury Compound",
    d: "Quần thể căn hộ cao cấp quy mô lớn, riêng tư, an toàn và biệt lập tại trung tâm Đông Bắc Sài Gòn.",
    tag: "COMPOUND",
  },
];

const amenityTags = [
  "Onsen",
  "Jacuzzi",
  "Aqua Gym",
  "Hồ Aquatonic",
  "Steam & Sauna",
  "Công viên mặt nước",
  "Hồ bơi tràn bờ",
  "Kid Zone",
  "Pocket Park",
  "Kayak",
  "Cầu dạo bộ",
  "An ninh 24/7",
];

export function Amenities() {
  return (
    <section id="tienich" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">
            — TIỆN ÍCH —
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            TIỆN ÍCH DỰ ÁN CĂN HỘ MONREI SAIGON
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Monrei Saigon phát triển theo định hướng Urban Hydrotherapy City — dùng sức mạnh trị
            liệu của Nước làm kim chỉ nam, kết hợp cảnh quan xanh, mặt nước, vận động và phục hồi
            sức khỏe theo tinh thần sống chuẩn Nhật Bản.
          </p>
        </div>

        <div className="mb-10 overflow-hidden rounded-3xl bg-card shadow-elegant border border-border">
          <div className="relative h-[320px] md:h-[520px] overflow-hidden">
            <img
              src={monreiImages.amenityMaster}
              alt="Tổng thể tiện ích Monrei Saigon"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-flex rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-bold tracking-wider text-gold-foreground">
                URBAN HYDROTHERAPY CITY
              </div>

              <h3 className="mt-4 max-w-3xl text-2xl md:text-4xl font-bold text-white">
                Hệ sinh thái tiện ích mặt nước và cảnh quan xanh tại Monrei Saigon
              </h3>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenityImages.slice(1).map((item) => (
            <article
              key={item.t}
              className="group overflow-hidden rounded-2xl bg-card shadow-elegant border border-border"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.t}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={576}
                />

                <div className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold tracking-wider text-gold-foreground">
                  {item.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-2">{item.t}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {amenityTags.map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-primary/20 bg-card px-4 py-3 text-center text-sm font-semibold text-primary"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
