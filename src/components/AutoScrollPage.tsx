import { useEffect } from "react";

export default function AutoScrollPage() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.scrollBy({
        top: 1,
        behavior: "smooth",
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}