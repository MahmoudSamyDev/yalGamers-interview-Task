import ClanOverviewSection from "./Sections/OverviewSection";
import ClanCardsSection from "./Sections/ClanCardsSection";
import backgroundImg from "/backgroundImg.webp";

function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center pt-16 pb-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full inset-0 fixed left-0 top-0 bg-gradient-to-r from-[#100613ED] to-[#100613F5]" />
      <div className="container w-[80%] mx-auto flex flex-col gap-[50px]">
        <ClanCardsSection />
        <ClanOverviewSection />
      </div>
    </div>
  );
}

export default HomePage;
