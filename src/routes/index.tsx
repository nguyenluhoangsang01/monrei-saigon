import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { Location } from "@/components/site/Location";
import { Amenities } from "@/components/site/Amenities";
import { Masterplan } from "@/components/site/Masterplan";
import { Developer } from "@/components/site/Developer";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monrei Saigon — Thành phố Thủy liệu đầu tiên tại Việt Nam | BTCLand" },
      { name: "description", content: "Monrei Saigon — Urban Hydrotherapy City 4,46ha tại Thuận An, Bình Dương. CĐT Mitsubishi · Tokyu Land · Phát Đạt. Nhận bảng giá: 0356.99.01.99" },
      { property: "og:title", content: "Monrei Saigon — BTCLand Vietnam phân phối" },
      { property: "og:description", content: "Căn hộ cao cấp 4,46ha mặt tiền Nguyễn Thị Minh Khai, Thuận An. Onsen, Jacuzzi, Aqua Gym chuẩn Nhật." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Overview />
      <Location />
      <Amenities />
      <Masterplan />
      <Developer />
      <Contact />
      <Footer />
    </main>
  );
}
