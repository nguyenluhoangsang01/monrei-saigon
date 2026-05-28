const devs = [
  { n: "Mitsubishi Corporation", s: "56%", d: "Tập đoàn đa quốc gia Nhật Bản với tiềm lực tài chính hùng hậu và kinh nghiệm phát triển đô thị bền vững toàn cầu." },
  { n: "Tokyu Land Corporation", s: "24%", d: "Đối tác phát triển bất động sản hàng đầu Nhật Bản — chuẩn mực chất lượng và kỷ luật vận hành quốc tế." },
  { n: "Phát Đạt", s: "20%", d: "Am hiểu sâu sắc thị trường nội địa, sở hữu các dự án biểu tượng như The EverRich, Astral City." },
];

export function Developer() {
  return (
    <section id="nhamau" className="py-24 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.3em] font-semibold text-gold mb-3">— CHỦ ĐẦU TƯ —</p>
          <h2 className="text-4xl md:text-5xl font-bold">LIÊN DANH "KIỀNG BA CHÂN"</h2>
          <p className="mt-6 max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed">
            Cú bắt tay chiến lược giữa ba "gã khổng lồ" bất động sản — sự giao thoa hoàn mỹ giữa tinh thần kỷ luật Nhật Bản và khả năng thấu hiểu cư dân của thương hiệu Việt.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {devs.map((d) => (
            <div key={d.n} className="rounded-2xl bg-background/10 backdrop-blur border border-primary-foreground/15 p-8">
              <div className="text-6xl font-display font-bold text-gold mb-2">{d.s}</div>
              <h3 className="text-xl font-display font-bold mb-3">{d.n}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
