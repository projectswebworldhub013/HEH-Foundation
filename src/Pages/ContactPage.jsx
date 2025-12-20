import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";
import ContactHero from "../Components/ContactHero";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <section className="bg-[#F9FAF7] py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT INFO */}
            <div>
              <h2 className="text-4xl font-semibold text-[#0B1F33] mb-4">
                Get In Touch
              </h2>

              <p className="text-[#374151] text-base leading-relaxed mb-10 max-w-lg">
                We welcome your questions, ideas, and collaboration requests.
                Connect with HEH Foundation and help us restore human dignity
                through compassion and meaningful action.
              </p>

              {/* ADDRESS & CONTACT */}
              <div className="space-y-7 text-base text-[#374151]">

                <div className="flex items-start gap-5">
                  <IconWrap>
                    <FaMapMarkerAlt />
                  </IconWrap>
                  <div>
                    <p className="font-semibold text-[#0B1F33] mb-1">
                      Registered & Operational Address
                    </p>
                    <p>
                      No. 9, Sai Nagar, Thippenahalli,  
                      Doddabidarakkallu, Bengaluru 560073,  
                      Nelakadiranahalli, Karnataka – 560073
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <IconWrap>
                    <FaPhoneAlt />
                  </IconWrap>
                  <p>
                    +91 7012502008 <br />
                    +91 9980483859
                  </p>
                </div>

                <div className="flex items-start gap-5">
                  <IconWrap>
                    <FaEnvelope />
                  </IconWrap>
                  <p>
                    hehfoundationtrust@gmail.com <br />
                    hehfoundationindia@gmail.com
                  </p>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="hidden md:flex gap-5 text-lg mt-8 ml-4">
                          <a href="https://in.pinterest.com/hehfoundation/" target="_blank" rel="noreferrer" className="text-[#E60023] hover:scale-110"><FaPinterestP /></a>
                          <a href="https://www.instagram.com/heh_foundation_official" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110"><FaInstagram /></a>
                          <a href="https://x.com/hehfoundation" target="_blank" rel="noreferrer" className="hover:scale-110"><FaXTwitter /></a>
                          <a href="https://www.youtube.com/@hehfoundation" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110"><FaYoutube /></a>
                          <a href="https://www.facebook.com/profile.php?id=61584475671866" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110"><FaFacebookF /></a>
                          <a href="https://www.linkedin.com/company/hunger-education-healthcare-foundation/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:scale-110"><FaLinkedinIn /></a>
                          <a href="https://t.me/hehfoundation" target="_blank" rel="noreferrer" className="text-[#229ED9] hover:scale-110"><FaTelegramPlane /></a>
                        </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-semibold text-[#0B1F33] mb-8">
                Send a Message
              </h3>

              <form
                action="mailto:info@hehfoundation.org"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Your Name"
                  className="w-full border border-[#E5E7EB] rounded-lg px-5 py-3 text-base focus:outline-none focus:border-[#F47A1F]"
                />

                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Your Email Address"
                  className="w-full border border-[#E5E7EB] rounded-lg px-5 py-3 text-base focus:outline-none focus:border-[#F47A1F]"
                />

                <textarea
                  name="Message"
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  className="w-full border border-[#E5E7EB] rounded-lg px-5 py-3 text-base focus:outline-none focus:border-[#F47A1F]"
                />

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  By submitting this form, you consent to the collection and
                  processing of your personal information in accordance with
                  our Privacy Policy.
                </p>

                <button
                  type="submit"
                  className="cursor-pointer bg-gradient-to-r from-[#F47A1F] to-[#DC2626] text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-20 rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae3dc7e14f384d%3A0x5847181ff8dd694c!2sIInd%20Floor%20Sainagara%2C%20No.9%2C%20Tippenahalli%2C%20opposite%20Mamatha%20Paper%20Cup%20Industries%2C%20Doddabidarakallu%2C%20Bengaluru%2C%20Karnataka%20560073!3m2!1d13.035419!2d77.485823!5e0!3m2!1sen!2sin!4v1766213359384!5m2!1sen!2sin"
              className="w-full h-[380px] md:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HEH Foundation Location"
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

/* ICON WRAPPER */
const IconWrap = ({ children }) => (
  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFF4E6] text-[#F47A1F] text-lg">
    {children}
  </div>
);

/* SOCIAL ICON */
const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF4E6] text-[#F47A1F] hover:bg-[#F47A1F] hover:text-white transition cursor-pointer text-lg">
    {icon}
  </div>
);

export default ContactPage;
