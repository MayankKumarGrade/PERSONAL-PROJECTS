import { ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const { resolvedTheme } = useTheme();

  return (
    <div>
      {isVisible &&
        <button
          title="scroll to top"
          className={`fixed bottom-10 right-7 p-3 rounded-full border-none cursor-pointer ${resolvedTheme ==
          "dark"
            ? "bg-slate-700"
            : "bg-slate-300"}`}
          onClick={scrollToTop}
        >
          <ChevronUp size={30} />
        </button>}
    </div>
  );
};

export default ScrollButton;
