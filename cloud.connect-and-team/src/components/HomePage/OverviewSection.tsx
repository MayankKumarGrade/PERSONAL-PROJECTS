import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const OverviewSection = () => {

  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, []);

  const { resolvedTheme } = useTheme();

  if(loading) return "Loading";

  return (
    <section
      id="overview"
      className="min-h-screen pt-20 flex flex-col items-center"
    >
      <div className="flex justify-center items-center flex-col font-semibold font-sans">
        <h2>Why Choose Our Cloud Storage Solution ?</h2>
        <div className="flex items-center justify-center px-20">
          {/* <p className="px-20">
            Our cloud storage service offers a comprehensive solution for all
            your storage needs. With top-notch security, seamless sharing
            capabilities, and powerful AI tools, we ensure your data is always
            safe, accessible, and enhanced.
          </p> */}
          <Image src="/Home.png" alt="overview image" height={600} width={600} />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
