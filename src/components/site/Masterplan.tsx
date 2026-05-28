import masterplan from "@/assets/masterplan.jpg";

const products = [
  { t: "Căn hộ Studio", s: "34 – 38m²", c: "563 căn", p: "21%" },
  { t: "Căn hộ 2PN1WC", s: "51 – 55m²", c: "1.130 căn", p: "42%" },
  { t: "Căn hộ 2PN2WC", s: "64 – 66m²", c: "854 căn", p: "31%" },
  { t: "Căn hộ 3PN", s: "88m²", c: "137 căn", p: "5%" },
  { t: "Garden House", s: "—", c: "16 căn", p: "0,5%" },
  { t: "Shophouse", s: "—", c: "17 căn", p: "0,5%" },
];

export function Masterplan() {
  return (
    <section id="matbang" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— MẶT BẰNG —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">MẶT BẰNG TỔNG THỂ DỰ ÁN</h2>
        </div>

        <img src={masterplan} alt="Mặt bằng tổng thể Monrei Saigon" className="w-full rounded-2xl shadow-elegant mb-12" loading="lazy" width={1600} height={1000} />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Thiết kế hình khối tối ưu tầm nhìn</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Điểm nhấn quy hoạch chính là sự đan xen nghệ thuật giữa các khối nhà hình <strong className="text-foreground">chữ U và chữ L</strong>. Đảm bảo <strong className="text-primary">100% căn hộ</strong> sở hữu tầm nhìn khoáng đạt — góc nhìn về đại lộ Bình Dương hoặc hệ tiện ích thủy liệu nội khu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quy hoạch trên <strong>4,46 ha</strong> với <strong>3 toà tháp 36-39 tầng</strong>, mật độ xây dựng chỉ <strong>37,5%</strong>, 3-4 tầng hầm thông minh.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
            <table className="w-full text-sm">
              <thead className="bg-hero-gradient text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Loại hình</th>
                  <th className="px-4 py-3 text-left font-semibold">Diện tích</th>
                  <th className="px-4 py-3 text-right font-semibold">Số căn</th>
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
      </div>
    </section>
  );
}
