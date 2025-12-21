import React from "react";

/* Background Images */
import visionBgDesktop from "../assets/images/vision.jpg";
import visionBgMobile from "../assets/images/mobile-vision.jpg";

const Vision = () => {
  return (
    <>
      {/* ===================== DESKTOP / TABLET (PARALLAX) ===================== */}
      <section
        className="mt-24 relative hidden md:flex min-h-screen w-full items-center
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${visionBgDesktop})`,
          backgroundAttachment: "fixed", // ✅ Parallax for desktop
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F33]/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 flex justify-end">
          <div className="w-full lg:w-1/2 text-white space-y-12 p-8 md:p-12">
            
            {/* Vision */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-wide
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Vision
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#E5E7EB] leading-relaxed">
                We envision a compassionate and inclusive society where hunger
                is eliminated, education reaches every child, healthcare supports
                the vulnerable, and children, orphans, and the elderly live with
                dignity, safety, and hope.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#F47A1F] to-[#DC2626] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-wide
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Mission
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#E5E7EB] leading-relaxed">
                Our mission is to serve humanity through ethical, transparent,
                and community-driven initiatives that address hunger, poverty,
                education, and healthcare — creating sustainable impact beyond
                temporary relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MOBILE / SMALL SCREENS ===================== */}
      <section
        className="mt-24 relative flex md:hidden min-h-[80vh] w-full items-center
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${visionBgMobile})`,
        }}
      >
        {/* Stronger overlay for readability */}
        <div className="absolute inset-0 bg-[#0B1F33]/80"></div>

        <div className="relative max-w-xl mx-auto px-6 flex justify-center">
          <div
            className="w-full text-white space-y-8 p-6 rounded-2xl
                        text-center"
          >
            
            {/* Vision */}
            <div>
              <h2
                className="text-3xl font-semibold
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#E5E7EB]">
                To build a society where hunger is eliminated, education and
                healthcare are accessible, and every child and elderly individual
                lives with dignity and care.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-[#F47A1F] to-[#DC2626] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2
                className="text-3xl font-semibold
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#E5E7EB]">
                To uplift vulnerable communities through compassion-led action,
                sustainable support systems, and initiatives that empower people
                to live healthier, independent, and meaningful lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
