import { monreiImages } from "@/lib/monreiImages";

const developers = [
  {
    n: "Mitsubishi Corporation",
    s: "56%",
    logo: monreiImages.developerMitsubishiLogo,
    d: "Tập đoàn đa quốc gia hàng đầu Nhật Bản với tiềm lực tài chính hùng hậu và kinh nghiệm phát triển đô thị bền vững trên quy mô toàn cầu.",
  },
  {
    n: "Tokyu Land Corporation",
    s: "24%",
    logo: monreiImages.developerTokyuLogo,
    d: "Thương hiệu phát triển bất động sản Nhật Bản nổi bật với chuẩn mực chất lượng, quy chuẩn vận hành khắt khe và tư duy kiến tạo đô thị hiện đại.",
  },
  {
    n: "Tập đoàn Phát Đạt",
    s: "20%",
    logo: monreiImages.developerPhatDatLogo,
    d: "Doanh nghiệp bất động sản Việt Nam am hiểu sâu sắc thị trường nội địa, gắn với các dự án biểu tượng như The EverRich và Astral City.",
  },
];

const trustPoints = [
  {
    t: "Liên danh “kiềng ba chân” vững chắc",
    d: "Sự kết hợp giữa hai tập đoàn Nhật Bản và một thương hiệu Việt tạo nên nền tảng triển khai cân bằng: tài chính mạnh, tiêu chuẩn quốc tế và khả năng thấu hiểu thị trường bản địa.",
  },
  {
    t: "Năng lực thực thi được bảo chứng",
    d: "Các thành viên trong liên danh được nhấn mạnh bởi tốc độ triển khai, quy chuẩn quản lý khắt khe, pháp lý minh bạch và chất lượng bàn giao vượt trội.",
  },
  {
    t: "Chuẩn sống Nhật Bản kết hợp bản sắc Việt",
    d: "Monrei Saigon là sự giao thoa giữa tinh thần kỷ luật, chuẩn mực chất lượng Nhật Bản và khả năng thấu hiểu nhu cầu cư dân của thương hiệu Việt.",
  },
  {
    t: "Định hướng Wellness Investment",
    d: "Chủ đầu tư tập trung vào phân khúc cao cấp, hạng sang, đề cao giá trị sống bền vững, sức khỏe và mô hình Urban Hydrotherapy City.",
  },
];

export function Developer() {
  return (
    <section id="nhamau" className="bg-hero-gradient py-24 text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold">— CHỦ ĐẦU TƯ —</p>

          <h2 className="text-4xl font-bold md:text-5xl">CHỦ ĐẦU TƯ DỰ ÁN MONREI SAIGON</h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-primary-foreground/80">
            Monrei Saigon là cú bắt tay chiến lược giữa ba “gã khổng lồ” trong ngành bất động sản:
            Mitsubishi Corporation, Tokyu Land Corporation và Tập đoàn Phát Đạt. Sự kết hợp này tạo
            nên một “kiềng ba chân” vững chắc cho dự án tại trung tâm Đông Bắc TP.HCM.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {developers.map((dev) => (
            <article
              key={dev.n}
              className="rounded-3xl border border-primary-foreground/15 bg-background/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur"
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl bg-white/10 p-5">
                <img
                  src={dev.logo}
                  alt={dev.n}
                  className="max-h-16 w-auto object-contain"
                  loading="lazy"
                  width={260}
                  height={100}
                />
              </div>

              <div className="mb-2 font-display text-6xl font-bold text-gold">{dev.s}</div>

              <h3 className="mb-3 font-display text-xl font-bold text-white">{dev.n}</h3>

              <p className="text-sm leading-relaxed text-primary-foreground/75">{dev.d}</p>
            </article>
          ))}
        </div>

        <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-gold">
              NỀN TẢNG UY TÍN
            </p>

            <h3 className="font-display text-3xl font-bold text-white">
              Bảo chứng bởi tài chính Nhật Bản, tiêu chuẩn quốc tế và kinh nghiệm nội địa
            </h3>

            <p className="mt-5 leading-relaxed text-primary-foreground/78">
              Các chủ đầu tư đều có bảng thành tích với những dự án biểu tượng như The EverRich,
              Astral City của Phát Đạt và các khu đô thị phức hợp quốc tế của nhóm đối tác Nhật Bản.
              Đây là nền tảng uy tín quan trọng giúp khách hàng an tâm về tiến độ, pháp lý và chất
              lượng bàn giao.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point.t}
                  className="rounded-2xl border border-primary-foreground/15 bg-background/10 p-5"
                >
                  <h4 className="font-display text-lg font-bold text-gold">{point.t}</h4>

                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                    {point.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-background/10 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
            <img
              src={monreiImages.developerUrbanWater}
              alt="Urban Water Monrei Saigon"
              className="w-full object-cover"
              loading="lazy"
              width={1000}
              height={750}
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 bg-background/10 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
            <img
              src={monreiImages.developerFlow}
              alt="Flow to you soon Monrei Saigon"
              className="w-full object-cover"
              loading="lazy"
              width={1000}
              height={350}
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-gold">
              ĐỊNH HƯỚNG PHÁT TRIỂN
            </p>

            <h3 className="font-display text-3xl font-bold text-white">
              Từ Urban Green đến Urban Water — Thành phố nước thủy liệu đầu tiên
            </h3>

            <p className="mt-5 leading-relaxed text-primary-foreground/78">
              Định hướng của chủ đầu tư tại Monrei Saigon tập trung vào phân khúc bất động sản cao
              cấp và hạng sang, đề cao sức khỏe, sự riêng tư và giá trị sống bền vững. Thay vì phát
              triển các tòa tháp bê tông thuần túy, dự án đưa yếu tố nước và thiên nhiên trở thành
              hạ tầng cốt lõi.
            </p>

            <p className="mt-4 leading-relaxed text-primary-foreground/78">
              Mục tiêu cuối cùng là kiến tạo một không gian sống “Wellness Investment” đặc quyền,
              nơi cư dân được tận hưởng hệ sinh thái trị liệu chuyên sâu ngay giữa tâm điểm đô thị
              náo nhiệt.
            </p>

            <a
              href="#lienhe"
              className="mt-7 inline-flex rounded-full bg-gold-gradient px-7 py-3 text-sm font-bold text-gold-foreground shadow-gold transition hover:opacity-95"
            >
              NHẬN THÔNG TIN PHÁP LÝ & CHỦ ĐẦU TƯ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
