import onsen from "@/assets/amenity-onsen.jpg";
import pool from "@/assets/amenity-pool.jpg";
import interior from "@/assets/interior.jpg";
import amenity2 from "@/assets/amenity-2.jpg";
import amenity3 from "@/assets/amenity-3.jpg";
import masterAmenity from "@/assets/monrei-amenities-master.jpg";

const items = [
  { img: onsen, t: "Liệu pháp trị liệu Nhật Bản", d: "Hệ thống Onsen & Jacuzzi nước khoáng nóng — thư giãn cơ bắp, tăng tuần hoàn máu, xoa dịu tâm trí.", tag: "ONSEN & JACUZZI" },
  { img: pool, t: "Vận động & Nước", d: "Hồ Aquatonic & Aqua Gym tập luyện hiện đại dưới nước. Áp lực nước tự nhiên massage, bảo vệ xương khớp.", tag: "AQUA GYM" },
  { img: amenity2, t: "Hồ bơi tràn bờ", d: "Hồ bơi tràn bờ view đại lộ Bình Dương, không gian thư giãn giữa thiên nhiên xanh mát.", tag: "INFINITY POOL" },
  { img: amenity3, t: "Steam & Sauna", d: "Phòng xông hơi khô và ướt chuẩn Nhật, giải độc cơ thể và phục hồi năng lượng.", tag: "STEAM & SAUNA" },
  { img: interior, t: "Sky Lounge & BBQ", d: "Khu vực thư giãn trên cao, BBQ ngoài trời với tầm nhìn panorama toàn khu đô thị.", tag: "SKY LOUNGE" },
  { img: masterAmenity, t: "Công viên mặt nước", d: "Hệ thống công viên mặt nước nội khu — trái tim xanh của Urban Hydrotherapy City.", tag: "WATER PARK" },
];

export function Amenities() {
  return (
    <section id="tienich" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— TIỆN ÍCH —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">URBAN HYDROTHERAPY CITY</h2>
          <p className="text-muted-foreground leading-relaxed">
            "Thành phố Thủy liệu" khép kín đầu tiên tại Việt Nam — dùng sức mạnh trị liệu của Nước làm kim chỉ nam, biến tổ ấm thành "trạm phục hồi" năng lượng theo chuẩn Nhật Bản.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i.t} className="group rounded-2xl overflow-hidden bg-card shadow-elegant border border-border">
              <div className="relative h-72 overflow-hidden">
                <img src={i.img} alt={i.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1600} height={1000} />
                <div className="absolute top-4 left-4 bg-gold-gradient px-3 py-1 rounded-full text-xs font-bold text-gold-foreground tracking-wider">
                  {i.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-2">{i.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.d}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {["Onsen", "Jacuzzi", "Aqua Gym", "Hồ Aquatonic", "Steam & Sauna", "Công viên mặt nước", "Hồ bơi tràn bờ", "Gym & Yoga", "Sky Lounge", "Khu BBQ", "Kid Zone", "An ninh 24/7"].map((t) => (
            <div key={t} className="rounded-full border border-primary/20 bg-card px-4 py-3 text-center text-sm font-semibold text-primary">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
