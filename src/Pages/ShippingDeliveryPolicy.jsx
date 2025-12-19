import React from "react";
import {
  FaTruck,
  FaGlobeAsia,
  FaClock,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ShippingDeliveryPolicy = () => {
  return (
    <section className="mt-20 bg-[#F9FAF7] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-xs text-[#F47A1F] mb-3">
            Legal & Transparency
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1F33]">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-4 text-sm text-[#374151] max-w-lg mx-auto">
            Clear guidelines on how HEH Foundation manages shipping, delivery,
            and service confirmations responsibly.
          </p>
          <p className="mt-1 text-xs text-[#6B7280]">
            Last updated on <span className="font-medium">Dec 17, 2025</span>
          </p>
        </div>

        {/* Intro */}
        <div className="bg-[#FFF4E6] border border-[#E5E7EB] rounded-2xl p-8 mb-12">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-white shadow-sm">
              <FaTruck className="text-xl text-[#F47A1F]" />
            </div>
            <p className="text-[#374151] leading-relaxed text-sm">
              HEH Foundation ensures that all shipments and service-related
              deliveries are handled through registered courier partners and
              postal services, prioritizing transparency, reliability, and
              timely communication.
            </p>
          </div>
        </div>

        {/* Policy Blocks */}
        <div className="grid gap-8">

          <PolicyBlock
            icon={<FaGlobeAsia />}
            title="International & Domestic Shipping"
          >
            For international buyers, orders are shipped through registered
            international courier companies and/or international speed post.
            Domestic orders are dispatched via registered domestic courier
            services or speed post only.
          </PolicyBlock>

          <PolicyBlock
            icon={<FaClock />}
            title="Order Dispatch Timeline"
          >
            Orders are generally shipped within <strong>Not Applicable</strong>{" "}
            from payment confirmation or as per the delivery timeline agreed
            during order confirmation, subject to courier or postal authority
            norms.
          </PolicyBlock>

          <PolicyBlock
            icon={<FaTruck />}
            title="Delivery Responsibility"
          >
            HEH Foundation is not responsible for delays caused by courier
            companies or postal authorities. Our responsibility is limited to
            handing over the shipment within the committed timeframe.
          </PolicyBlock>

          <PolicyBlock
            icon={<FaMapMarkedAlt />}
            title="Delivery Address & Confirmation"
          >
            All deliveries are made to the address provided at checkout.
            Confirmation of service delivery is sent to the registered email ID
            shared during registration.
          </PolicyBlock>

        </div>

        {/* Compact Contact Section */}
        <div className="mt-14 border-t border-[#E5E7EB] pt-8">
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-6
                          flex flex-col sm:flex-row items-start sm:items-center
                          justify-between gap-6">

            <div>
              <h3 className="text-lg font-semibold text-[#0B1F33]">
                Need assistance with delivery?
              </h3>
              <p className="text-sm text-[#374151] mt-1">
                Our team is here to help you with any shipping or service-related queries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <div className="flex items-center gap-2 text-[#374151]">
                <FaPhoneAlt className="text-[#F47A1F]" />
                <span>7356038727</span>
              </div>

              <div className="flex items-center gap-2 text-[#374151]">
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
    <p className="text-sm text-[#374151] leading-relaxed">
      {children}
    </p>
  </div>
);

export default ShippingDeliveryPolicy;
