"use client";

import { useEffect, useState } from "react";

export default function TextClock() {
  const [date, setDate] = useState<Date>(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-mono text-sm">
      {date.toLocaleTimeString("en-US")}
    </h1>
  );
}
