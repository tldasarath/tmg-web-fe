import { Container } from "../layout/Container";
import { Navbar } from "../navbar/Navbar";
import { BottomBanner } from "./BottomBanner";
import { CTACard } from "./CtaCard";
import { SocialSidebar } from "./SocialSidebar";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background - Full Width */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Circle - Full Width */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl z-0" />

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Main Content - With Container */}
      <div className="relative z-20 h-full flex items-center">
        <Container>
          <div className="flex items-center justify-between">
            {/* Hero Text */}
            <div className="flex-1 pr-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Gorem ipsum , consectetur<br />
                adipiscing. Nunc vulputate libero et
              </h1>
            </div>

            {/* CTA Card */}
            <CTACard />
          </div>
        </Container>
      </div>

      {/* Bottom Banner */}
      {/* <BottomBanner /> */}
    </section>
  );
};