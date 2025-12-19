import React from "react";
import {
  FaFileContract,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCopyright,
  FaLink,
  FaGavel,
  FaCreditCard,
} from "react-icons/fa";

const TermsConditions = () => {
  return (
    <section className="mt-20 bg-[#F9FAF7] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-xs text-[#F47A1F] mb-3">
            Legal Information
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1F33]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-[#374151]">
            Last updated on <span className="font-medium">Dec 17, 2025</span>
          </p>
        </div>

        {/* Intro */}
        <div className="bg-[#FFF4E6] border border-[#E5E7EB] rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <FaInfoCircle className="text-xl text-[#F47A1F] mt-1" />
            <p className="text-[#374151] leading-relaxed">
              These Terms & Conditions govern your use of the HEH Foundation
              website and any interaction, engagement, or transaction carried
              out through it. By accessing this website, you agree to be bound
              by these terms.
            </p>
          </div>
        </div>

        {/* Definitions */}
        <PolicyBlock
          icon={<FaFileContract />}
          title="Definitions"
        >
          <p>
            For the purpose of these Terms & Conditions:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>
              <strong>“We”, “Us”, “Our”</strong> refers to{" "}
              <strong>HEH Foundation</strong>, having its registered/operational
              office at No. 9, Sai Nagar, Thippenahalli,
              Doddabidarakkallu, Bengaluru – 560073, Karnataka, India.
            </li>
            <li>
              <strong>“You”, “User”, “Visitor”</strong> refers to any natural or
              legal person accessing or using this website.
            </li>
          </ul>
        </PolicyBlock>

        {/* Website Usage */}
        <PolicyBlock
          icon={<FaExclamationTriangle />}
          title="Use of Website"
        >
          <ul className="list-disc ml-6 space-y-2">
            <li>
              The content of this website is subject to change without prior
              notice.
            </li>
            <li>
              Information provided on the website may contain inaccuracies or
              errors, and we expressly exclude liability to the fullest extent
              permitted by law.
            </li>
            <li>
              Your use of any information, services, or materials is entirely at
              your own risk.
            </li>
            <li>
              It is your responsibility to ensure that any information or
              services meet your specific requirements.
            </li>
          </ul>
        </PolicyBlock>

        {/* Intellectual Property */}
        <PolicyBlock
          icon={<FaCopyright />}
          title="Intellectual Property Rights"
        >
          <p>
            This website contains material owned by or licensed to HEH
            Foundation, including but not limited to design, layout, appearance,
            text, and graphics.
          </p>
          <p className="mt-2">
            Unauthorized reproduction, distribution, or misuse of any material
            is strictly prohibited and may result in legal action.
          </p>
        </PolicyBlock>

        {/* Trademarks */}
        <PolicyBlock
          icon={<FaFileContract />}
          title="Trademarks"
        >
          <p>
            All trademarks reproduced on this website that are not the property
            of, or licensed to, HEH Foundation are duly acknowledged.
          </p>
        </PolicyBlock>

        {/* External Links */}
        <PolicyBlock
          icon={<FaLink />}
          title="External Links"
        >
          <p>
            From time to time, this website may include links to other websites.
            These links are provided for convenience and additional information.
          </p>
          <p className="mt-2">
            You may not create a link to this website from another website or
            document without prior written consent from HEH Foundation.
          </p>
        </PolicyBlock>

        {/* Jurisdiction */}
        <PolicyBlock
          icon={<FaGavel />}
          title="Governing Law & Jurisdiction"
        >
          <p>
            Any dispute arising out of your use of this website or engagement
            with HEH Foundation shall be governed by and interpreted in
            accordance with the laws of India.
          </p>
        </PolicyBlock>

        {/* Payment & Transactions */}
        <PolicyBlock
          icon={<FaCreditCard />}
          title="Transactions & Authorization"
        >
          <p>
            HEH Foundation shall not be held liable for any loss or damage
            arising directly or indirectly from the decline of authorization
            for any transaction due to the cardholder exceeding preset limits
            agreed upon with the acquiring bank.
          </p>
        </PolicyBlock>

        {/* Footer Note */}
        <div className="mt-8 border-t border-[#E5E7EB] pt-6 text-center">
          <p className="text-sm text-[#6B7280]">
            By continuing to use this website, you acknowledge that you have
            read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>

      </div>
    </section>
  );
};

/* Reusable Policy Block */
const PolicyBlock = ({ icon, title, children }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-3">
      <div className="p-3 rounded-full bg-[#FFF4E6] text-[#F47A1F] text-lg">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-[#0B1F33]">
        {title}
      </h2>
    </div>
    <div className="text-[#374151] leading-relaxed text-sm">
      {children}
    </div>
    <div className="mt-6 h-px bg-[#E5E7EB]" />
  </div>
);

export default TermsConditions;
