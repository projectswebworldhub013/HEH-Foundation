import React from "react";
import {
  FaUndoAlt,
  FaBan,
  FaBoxOpen,
  FaExclamationTriangle,
  FaShippingFast,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const CancellationRefundPolicy = () => {
  return (
    <section className="mt-20 bg-[#F9FAF7] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.28em] text-xs text-[#F47A1F] mb-3">
            Legal & Transparency
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-[#0B1F33]">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-4 text-sm text-[#374151] max-w-lg mx-auto">
            This policy explains how HEH Foundation manages cancellations,
            refunds, and related concerns with fairness and accountability.
          </p>
          <p className="mt-1 text-xs text-[#6B7280]">
            Last updated on <span className="font-medium">Dec 17, 2025</span>
          </p>
        </div>

        {/* Intro */}
        <div className="bg-[#FFF4E6] border border-[#E5E7EB] rounded-2xl p-8 mb-12">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-white shadow-sm">
              <FaUndoAlt className="text-xl text-[#F47A1F]" />
            </div>
            <p className="text-sm text-[#374151] leading-relaxed">
              HEH Foundation believes in assisting its supporters wherever
              possible. Our cancellation and refund practices are designed
              to remain ethical, transparent, and aligned with humanitarian values.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="grid gap-8">

          <PolicyBlock
            icon={<FaBan />}
            title="Cancellation Requests"
          >
            <p>
              Cancellation requests will be considered only if submitted within{" "}
              <strong>Not Applicable</strong> of placing the order. Requests may
              not be entertained once processing has started or vendors have
              been notified.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaBoxOpen />}
            title="Non-Cancellable Items"
          >
            <p>
              Cancellation requests are not accepted for perishable goods such
              as flowers, eatables, or similar items. Refunds or replacements
              may be considered only if product quality is found to be unsatisfactory.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaExclamationTriangle />}
            title="Damaged or Defective Products"
          >
            <p>
              In case of damaged or defective items, please notify our Customer
              Service team within <strong>Not Applicable</strong> of receipt.
              Requests will be reviewed after verification by the concerned merchant.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaShippingFast />}
            title="Product Not as Described"
          >
            <p>
              If a product differs significantly from its description or does
              not meet expectations, the issue must be reported within{" "}
              <strong>Not Applicable</strong> of delivery. A suitable resolution
              will be provided after evaluation.
            </p>
          </PolicyBlock>

          <PolicyBlock
            icon={<FaMoneyCheckAlt />}
            title="Refund Processing"
          >
            <p>
              Once approved by HEH Foundation, refunds will be processed within{" "}
              <strong>Not Applicable</strong> and credited to the original
              payment method used by the customer.
            </p>
          </PolicyBlock>

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

export default CancellationRefundPolicy;
