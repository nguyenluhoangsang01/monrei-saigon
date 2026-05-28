import { monreiImages } from "@/lib/monreiImages";

const stats = [
  { v: "4,46 ha", l: "Quỹ đất tổng thể" },
  { v: "18.000 tỷ", l: "Tổng vốn đầu tư" },
  { v: "36–39 tầng", l: "Chiều cao tháp" },
  { v: "2.717", l: "Căn hộ" },
  { v: "37,5%", l: "Mật độ xây dựng" },
  { v: "3–4 tầng", l: "Hầm thông minh" },
];

const towers = [
  {
    t: "Wellness Onsen",
    d: ["36 tầng cao & 3 tầng hầm độc lập", "1.106 căn hộ & 9 Shophouse"],
  },
  {
    t: "Detox 1",
    d: ["39 tầng cao & 3 tầng hầm thông", "825 căn hộ – 9 Garden House – 2 Shophouse"],
  },
  {
    t: "Detox 2",
    d: ["39 tầng cao & 3 tầng hầm thông", "753 căn hộ – 7 Garden House – 6 Shophouse"],
  },
];

const products = [
  { t: "Căn hộ Studio", s: "34 – 38m²", c: "563 căn", p: "21%" },
  { t: "Căn hộ 2PN1WC", s: "51 – 55m²", c: "1.130 căn", p: "42%" },
  { t: "Căn hộ 2PN2WC", s: "64 – 66m²", c: "854 căn", p: "31%" },
  { t: "Căn hộ 3PN", s: "88m²", c: "137 căn", p: "5%" },
  { t: "Garden House", s: "—", c: "16 căn", p: "0,5%" },
  { t: "Shophouse", s: "—", c: "17 căn", p: "0,5%" },
];

const showcases = [
  {
    img: monreiImages.interior1,
    t: "Căn hộ điển hình 1PN – 3PN",
    d: "Được thiết kế với diện tích linh hoạt và bố trí thông minh, tối ưu hóa công năng đến từng cm. Đây là không gian phù hợp cho người trẻ độc thân, gia đình trẻ hoặc gia đình nhiều thế hệ đang tìm kiếm sự ấm cúng nhưng vẫn đảm bảo tính riêng tư.",
    tag: "APARTMENT",
  },
  {
    img: monreiImages.interior2,
    t: "Bộ sưu tập Penthouse & Duplex",
    d: "Ngự trị tại những tầng cao nhất của tòa tháp, các sản phẩm hạng sang sở hữu sân vườn riêng biệt, không gian rộng mở và tầm nhìn không giới hạn.",
    tag: "PENTHOUSE",
  },
  {
    img: monreiImages.shophouse,
    t: "Shophouse khối đế thương mại",
    d: "Tọa lạc tại tầng 1 và tầng 2, tiếp giáp trực diện mặt tiền đường Nguyễn Thị Minh Khai. Đây là lựa chọn phù hợp cho các dịch vụ kinh doanh cao cấp, đón đầu dòng khách sầm uất từ khu vực Đông Bắc.",
    tag: "SHOPHOUSE",
  },
];

export function Masterplan() {
  return (
    <section id="matbang" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold-foreground">
            — MẶT BẰNG —
          </p>

          <h2 className="text-4xl font-bold text-primary md:text-5xl">
            MẶT BẰNG TỔNG THỂ DỰ ÁN MONREI SAIGON
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            Mặt bằng Monrei Saigon được quy hoạch trên quỹ đất rộng 4,46 ha với tổng vốn đầu tư lên
            đến 18.000 tỷ đồng. Dự án cung ứng ra thị trường 3 tòa tháp cao từ 36–39 tầng, gồm 2.717
            căn hộ với đa dạng loại hình sản phẩm từ căn hộ Studio, 2 phòng ngủ, 3 phòng ngủ, Garden
            House đến Shophouse.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((item) => (
            <div
              key={item.l}
              className="rounded-2xl border border-primary/10 bg-card p-5 text-center shadow-sm"
            >
              <div className="font-display text-2xl font-bold text-primary">{item.v}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {item.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <img
            src={monreiImages.masterplan}
            alt="Mặt bằng tổng thể Monrei Saigon"
            className="w-full object-cover"
            loading="lazy"
            width={1000}
            height={400}
          />
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-gold-foreground">
              3 TÒA THÁP — 3 HÀNH TRÌNH
            </p>

            <h3 className="font-display text-3xl font-bold text-primary">
              Wellness — Detox — Refresh
            </h3>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Điểm nhấn trong quy hoạch mặt bằng là sự đan xen nghệ thuật giữa các khối nhà hình chữ
              U và chữ L. Cách bố trí này tạo nên vẻ đẹp kiến trúc đa chiều, đồng thời đảm bảo 100%
              căn hộ đều sở hữu tầm nhìn khoáng đạt: hướng về đại lộ Bình Dương hoặc hệ tiện ích
              thủy liệu nội khu.
            </p>

            <div className="mt-6 space-y-4">
              {towers.map((tower) => (
                <div key={tower.t} className="rounded-2xl border border-border bg-secondary/40 p-5">
                  <h4 className="font-display text-xl font-bold text-primary">{tower.t}</h4>

                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {tower.d.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href="#lienhe"
              className="mt-7 inline-flex rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition hover:opacity-95"
            >
              NHẬN NGAY MẶT BẰNG TỔNG – MẶT BẰNG TÒA CHI TIẾT
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            <img
              src={monreiImages.masterplanTower}
              alt="Mặt bằng 3 tòa tháp Monrei Saigon"
              className="w-full object-cover"
              loading="lazy"
              width={1000}
              height={750}
            />
          </div>
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-gold-foreground">
              CƠ CẤU SẢN PHẨM
            </p>

            <h3 className="font-display text-3xl font-bold text-primary">
              Phân lớp sản phẩm đa dạng và thông minh
            </h3>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Monrei Saigon phát triển đa dạng loại hình sản phẩm, phù hợp nhiều nhóm nhu cầu: khách
              hàng độc thân, gia đình trẻ, gia đình nhiều thế hệ, nhà đầu tư khai thác cho thuê và
              khách hàng tìm kiếm sản phẩm thương mại khối đế.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <table className="w-full text-sm">
              <thead className="bg-hero-gradient text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Loại hình</th>
                  <th className="px-4 py-3 text-left font-semibold">Diện tích</th>
                  <th className="px-4 py-3 text-right font-semibold">Tổng cộng</th>
                  <th className="px-4 py-3 text-right font-semibold">Tỉ lệ</th>
                </tr>
              </thead>

              <tbody className="bg-card">
                {products.map((p, i) => (
                  <tr key={p.t} className={i % 2 ? "bg-secondary/30" : ""}>
                    <td className="px-4 py-3 font-semibold text-foreground">{p.t}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.s}</td>
                    <td className="px-4 py-3 text-right text-foreground">{p.c}</td>
                    <td className="px-4 py-3 text-right font-bold text-primary">{p.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {showcases.map((item) => (
            <article
              key={item.t}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
            >
              <div className="relative h-[330px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.t}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={900}
                  height={1100}
                />

                <div className="absolute left-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold tracking-wider text-gold-foreground">
                  {item.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{item.t}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</p>

                <a
                  href="#lienhe"
                  className="mt-5 inline-flex rounded-full border border-primary/20 px-5 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  BÁO GIÁ CHI TIẾT
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <img
            src={monreiImages.masterplanStats}
            alt="Quy mô Monrei Saigon"
            className="w-full object-cover"
            loading="lazy"
            width={1000}
            height={563}
          />
        </div>
      </div>
    </section>
  );
}
