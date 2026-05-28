import overview from "@/assets/monrei-overview.jpg";

const rows: [string, string][] = [
  ["Tên thương mại", "Monrei Saigon"],
  ["Vị trí chiến lược", "MT Nguyễn Thị Minh Khai, TP. Thuận An, Bình Dương"],
  ["Chủ đầu tư", "Mitsubishi Corp (56%), Tokyu Land (24%) & Phát Đạt (20%)"],
  ["Tổng thầu xây dựng", "Coteccons"],
  ["Tổng vốn đầu tư", "Khoảng 18.000 tỷ đồng"],
  ["Quy mô quỹ đất", "Tổng thể: 4,46 ha (GĐ1: 1,8 ha)"],
  ["Mật độ xây dựng", "Khoảng 37,5%"],
  ["Số lượng sản phẩm", "3 toà tháp – 2.717 căn hộ"],
  ["Loại hình sản phẩm", "Studio, 2PN, 3PN, Shophouse, Garden House"],
  ["Mô hình định hướng", "Urban Hydrotherapy City"],
  ["Tiện ích đặc trưng", "Onsen, Jacuzzi, Aqua Gym, Hồ Aquatonic, Steam & Sauna"],
  ["Thời điểm ra mắt", "Dự kiến Tháng 5/2026"],
];

export function Overview() {
  return (
    <section id="tongquan" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold-foreground mb-3">— TỔNG QUAN —</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">TỔNG QUAN DỰ ÁN MONREI SAIGON</h2>
        </div>
        <img src={overview} alt="Phối cảnh tổng thể Monrei Saigon" className="w-full rounded-2xl shadow-elegant mb-10" loading="lazy" width={1600} height={900} />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p><strong className="text-foreground">Monrei Saigon</strong> là dự án phức hợp căn hộ cao cấp quy mô <strong>4,46 ha</strong>, kiệt tác kiến trúc định nghĩa lại chuẩn mực sống mới tại tâm điểm mặt tiền đường Nguyễn Thị Minh Khai, Thuận An. Với tổng vốn đầu tư <strong>18.000 tỷ đồng</strong> — tâm huyết của Mitsubishi Corporation, Tokyu Land và Phát Đạt.</p>
            <p>Khơi nguồn từ định hướng kiến tạo <strong className="text-primary">Urban Hydrotherapy City</strong> đầu tiên tại Việt Nam, Monrei Saigon là sự giao thoa giữa kiến trúc thượng lưu và hệ sinh thái trị liệu từ nước và thiên nhiên thuần khiết.</p>
            <p>Mỗi bước chân trở về là một hành trình chạm đến sự tĩnh tại, biến tổ ấm thành một "trạm phục hồi" chuyên sâu giữa nhịp sống giao thương sôi động.</p>
          </div>
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border">
            <table className="w-full text-sm">
              <tbody>
                {rows.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-secondary/30" : ""}>
                    <td className="px-5 py-3.5 font-semibold text-primary border-r border-border w-1/2 align-top">{k}</td>
                    <td className="px-5 py-3.5 text-foreground">{v}</td>
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
