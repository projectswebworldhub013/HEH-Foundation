import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem("visitor-count") || "8798");
  });

  useEffect(() => {
    const newCount = count + 1;
    localStorage.setItem("visitor-count", newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className="text-[#eccc86] text-sm md:text-base font-medium text-center mx-2">
      Visitor Count:{" "}
      <span className="text-white font-semibold">{count.toLocaleString()}</span>
    </div>
  );
}