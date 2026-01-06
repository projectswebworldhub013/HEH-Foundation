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
import { FaXTwitter } from "react-icons/fa6";
import ContactHero from "../Components/ContactHero";
import BankDetails from "../Components/BankDetails";

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <section className="bg-[#F9FAF7] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT INFO SECTION */}
            <div className="space-y-12">

              {/* INTRO */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F33] mb-4">
                  Get In Touch
                </h2>

                <p className="text-[#374151] text-base leading-relaxed max-w-lg">
                  We welcome your questions, ideas, and collaboration requests.
                  Connect with HEH Foundation and help us restore human dignity
                  through compassion and meaningful action.
                </p>
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-[#E5E7EB]" />

              {/* CONTACT DETAILS */}
              <div className="space-y-8">

                {/* ADDRESS */}
                <div className="flex gap-5">
                  <IconWrap>
                    <FaMapMarkerAlt />
                  </IconWrap>
                  <div>
                    <p className="font-semibold text-[#0B1F33] mb-1">
                      Registered & Operational Address
                    </p>
                    <p className="text-[#374151] leading-relaxed">
                      No. 9, Sai Nagar, Thippenahalli,  
                      Doddabidarakkallu, Bengaluru – 560073,  
                      Nelakadiranahalli, Karnataka
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-5">
                  <IconWrap>
                    <FaPhoneAlt />
                  </IconWrap>
                  <p className="text-[#374151] leading-relaxed">
                    +91 7012502008 <br />
                    +91 9980483859
                  </p>
                </div>

                {/* EMAIL */}
                <div className="flex gap-5">
                  <IconWrap>
                    <FaEnvelope />
                  </IconWrap>
                  <p className="text-[#374151] leading-relaxed">
                    hehfoundationtrust@gmail.com <br />
                    hehfoundationindia@gmail.com
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="h-px bg-[#E5E7EB]" />

              {/* SOCIAL ICONS */}
              <div>
                <p className="text-sm uppercase tracking-widest text-[#6B7280] mb-4">
                  Follow Us
                </p>

                <div className="flex flex-wrap gap-4 text-lg">
                  <SocialIcon href="https://in.pinterest.com/hehfoundation/" color="#E60023"><FaPinterestP /></SocialIcon>
                  <SocialIcon href="https://www.instagram.com/heh_foundation_official" color="#E1306C"><FaInstagram /></SocialIcon>
                  <SocialIcon href="https://x.com/hehfoundation"><FaXTwitter /></SocialIcon>
                  <SocialIcon href="https://www.youtube.com/@hehfoundation" color="#FF0000"><FaYoutube /></SocialIcon>
                  <SocialIcon href="https://www.facebook.com/profile.php?id=61584475671866" color="#1877F2"><FaFacebookF /></SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/company/hunger-education-healthcare-foundation/" color="#0A66C2"><FaLinkedinIn /></SocialIcon>
                  <SocialIcon href="https://t.me/hehfoundation" color="#229ED9"><FaTelegramPlane /></SocialIcon>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-[#0B1F33] mb-8">
                Send a Message
              </h3>

              <form
  action="https://formsubmit.co/info@hehfoundation.org"
  method="POST"
  className="space-y-6"
>
  {/* FormSubmit hidden configs */}
  <input type="hidden" name="_subject" value="New Contact Message - HEH Foundation" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_replyto" value="%Email%" />

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

   <input
  type="tel"
  name="Contact Number"
  required
  placeholder="Your Contact Number"
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
    className="bg-gradient-to-r from-[#F47A1F] to-[#DC2626] text-white px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition"
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
              className="w-full h-[380px] md:h-[350px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HEH Foundation Location"
            ></iframe>
          </div>
        </div>
      </section>
      <BankDetails/>
    </>
  );
};

/* ICON WRAPPER */
const IconWrap = ({ children }) => (
  <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-[#FFF4E6] text-[#F47A1F] text-lg">
    {children}
  </div>
);

/* SOCIAL ICON */
const SocialIcon = ({ href, children, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ color }}
    className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFF4E6] hover:scale-110 transition"
  >
    {children}
  </a>
);

export default ContactPage;
