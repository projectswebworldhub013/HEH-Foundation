import React from "react";
import {
  FaUserShield,
  FaClipboardList,
  FaLock,
  FaCookieBite,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="mt-20 bg-[#F9FAF7] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-xs text-[#F47A1F] mb-3">
            Legal & Transparency
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1F33]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#374151] max-w-lg mx-auto">
            This policy explains how HEH Foundation responsibly collects,
            uses, and safeguards your personal information.
          </p>
          <p className="mt-1 text-xs text-[#6B7280]">
            Last updated on <span className="font-medium">Dec 17, 2025</span>
          </p>
        </div>

        {/* Intro */}
        <div className="bg-[#FFF4E6] border border-[#E5E7EB] rounded-2xl p-8 mb-12">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-white shadow-sm">
              <FaUserShield className="text-xl text-[#F47A1F]" />
            </div>
            <p className="text-sm text-[#374151] leading-relaxed">
              HEH Foundation is committed to protecting your privacy.
              Any information you share with us is handled ethically,
              transparently, and in accordance with responsible data practices.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="grid gap-8">

          <PolicyBlock
            icon={<FaClipboardList />}
            title="Information We Collect"
          >
            <ul className="grid sm:grid-cols-2 gap-2 list-disc ml-5">
              <li>Name and personal identification details</li>
              <li>Email address and contact number</li>
              <li>Demographic information and preferences</li>
              <li>Survey responses and feedback</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaEdit />}
            title="How We Use Your Information"
          >
            <ul className="space-y-2 list-disc ml-5">
              <li>Maintain internal records and administration</li>
              <li>Improve services, outreach, and programs</li>
              <li>Send updates and awareness communications</li>
              <li>Conduct research to assess community needs</li>
              <li>Enhance user experience on our website</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaLock />}
            title="Information Security"
          >
            <p>
              We apply appropriate physical, electronic, and managerial
              safeguards to protect your data against unauthorized access,
              misuse, or disclosure.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaCookieBite />}
            title="Use of Cookies"
          >
            <p className="mb-2">
              Cookies help us analyze traffic and improve website performance.
            </p>
            <p>
              They do not grant access to your device or personal data.
              You may choose to accept or decline cookies through browser settings.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaUserShield />}
            title="Your Control Over Personal Information"
          >
            <ul className="space-y-2 list-disc ml-5">
              <li>Opt out of communications at any time</li>
              <li>Withdraw consent by contacting us directly</li>
              <li>
                We never sell or rent personal data to third parties
                unless required by law
              </li>
            </ul>
          </PolicyBlock>

        </div>

        {/* Compact Contact Strip */}
        <div className="mt-14 border-t border-[#E5E7EB] pt-8">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6
                          flex flex-col lg:flex-row gap-6
                          items-start lg:items-center
                          justify-between">

            <div>
              <h3 className="text-lg font-semibold text-[#0B1F33]">
                Privacy & Data Protection Queries
              </h3>
              <p className="text-sm text-[#374151] mt-1 max-w-md">
                If you have any questions regarding this policy or how your
                data is handled, feel free to contact us.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-sm text-[#374151]">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#F47A1F] mt-1" />
                <span>
                  No. 9, Sai Nagar, Thippenahalli,
                  Doddabidarakkallu, Bengaluru – 560073
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#F47A1F]" />
                <span>7356038727</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#F47A1F]" />
                <span>Info@hehfoundation.org</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

/* Reusable Policy Block */
const PolicyBlock = ({ icon, title, children }) => (
  <div className="bg-white border border-[#E5E7EB] rounded-xl p-7">
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 rounded-full bg-[#FFF4E6] text-[#F47A1F] text-lg">
        {icon}
      </div>
      <h2 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
        {title}
      </h2>
    </div>
    <div className="text-sm text-[#374151] leading-relaxed">
      {children}
    </div>
  </div>
);

export default PrivacyPolicy;
