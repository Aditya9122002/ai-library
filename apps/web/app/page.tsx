import { HeroSection } from "@/components/home/HeroSection";
import { SearchBar } from "@/components/home/SearchBar";
import { PathCards } from "@/components/home/PathCards";
import { WhyThisPlatform } from "@/components/home/WhyThisPlatform";
import { UpdatesSection } from "@/components/home/UpdatesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <PathCards />
      <WhyThisPlatform />
      <UpdatesSection />
    </div>
  );
}