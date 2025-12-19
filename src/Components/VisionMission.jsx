import React from "react";
import visionBg from "../assets/images/vision.jpg";
import mobileVisionBg from "../assets/images/vision.jpg";

const VisionMission = () => {
  return (
    <>
      {/* Desktop / Tablet View with Parallax */}
      <section
        className="relative hidden md:flex h-screen w-full items-center
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${visionBg})`,
          backgroundAttachment: "fixed", // ✅ Parallax
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F33]/30"></div>

        <div className="relative container mx-auto px-6 lg:px-12 flex justify-end">
          <div className="w-full lg:w-1/2 text-white space-y-10 p-8 md:p-12">
            
            {/* Vision */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-wide
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Vision
              </h2>
              <p className="mt-4 text-md md:text-lg text-[#E5E7EB] leading-relaxed">
                We envision a compassionate and inclusive society where hunger
                is eliminated, education is within every child’s reach, healthcare
                supports the most vulnerable, and children, orphans, and elderly
                individuals live with dignity, security, and hope.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-20 bg-gradient-to-r from-[#F47A1F] to-[#DC2626] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-semibold tracking-wide
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Mission
              </h2>
              <p className="mt-4 text-md md:text-lg text-[#E5E7EB] leading-relaxed">
                Our mission is to serve humanity through ethical, transparent,
                and community-driven initiatives that address hunger, poverty,
                education, and healthcare challenges—creating long-term impact
                that empowers individuals and families beyond short-term relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View (No fixed parallax – smooth & safe) */}
      <section
        className="relative flex md:hidden h-screen w-full items-center
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${mobileVisionBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F33]/80"></div>

        <div className="relative container mx-auto px-6 flex justify-center">
          <div
            className="w-full text-white space-y-8 p-6 rounded-2xl
                       shadow-xl text-center backdrop-blur-sm
                       bg-[#0F2A44]/50"
          >
            
            {/* Vision */}
            <div>
              <h2
                className="text-3xl font-bold
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Vision
              </h2>
              <p className="mt-3 text-sm text-[#E5E7EB] leading-relaxed">
                To build a society where hunger is eliminated, education and
                healthcare are accessible, and every child and elderly person
                lives with dignity, care, and confidence.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-16 mx-auto bg-gradient-to-r from-[#F47A1F] to-[#DC2626] rounded-full"></div>

            {/* Mission */}
            <div>
              <h2
                className="text-3xl font-bold
                           bg-gradient-to-r from-[#F47A1F] to-[#DC2626]
                           bg-clip-text text-transparent"
              >
                Our Mission
              </h2>
              <p className="mt-3 text-sm text-[#E5E7EB] leading-relaxed">
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

export default VisionMission;
