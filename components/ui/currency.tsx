import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-sm">
      ₱ <span className="font-bold">{Number(value).toFixed(2)}</span>
    </div>
  );
};

export default Currency;
