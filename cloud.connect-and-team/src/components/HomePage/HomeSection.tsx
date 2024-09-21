import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import StarsCanvas from "../StarCanvas";
import { motion } from "framer-motion";
import { slideIn } from "../../lib/motion";
import { useEffect, useState } from "react";

const HomeSection = () => {
  const [loaded, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
  }, []);

  const { resolvedTheme } = useTheme();

  return (
    <section className="min-h-screen md:pt-24 pt-20 px-3 flex flex-col items-center">
      <StarsCanvas />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-center text-2xl md:text-4xl font-extrabold">
          Secure Your Files with Our End-to-End Encrypted Cloud Storage
        </h1>
        <h2
          className={`md:text-xl mt-3 m-5 text-center ${
            resolvedTheme == "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Experience the future of cloud storage with robust security, seamless
          sharing, and advanced AI tools.
        </h2>
        <div className="flex gap-3 md:gap-8 items-center m-5">
          {!loaded ? (
            (<div className="flex gap-7 justify-center items-center">
              <div className="bg-slate-400 h-10 w-24 rounded-md animate-pulse"></div>
              <div className="bg-slate-400 h-10 w-24 rounded-md animate-pulse"></div>
            </div>)
          ) : (
            <>
              <Link
                href="/login"
                className={`${
                  resolvedTheme == "dark"
                    ? "bg-slate-100 text-black"
                    : "bg-black text-white"
                } font-semibold text-center p-2 md:p-3 rounded-xl`}
              >
                Welcome Back
              </Link>
              <Link
                href="/register"
                className={`${
                  resolvedTheme == "dark" ? "border-white" : "border-black"
                } border-2 font-semibold text-center p-2 md:p-3 rounded-xl`}
              >
                Start With Us
              </Link>
            </>
          )}
        </div>
        <h3 className="mt-10 text-sm md:text-lg text-center">
          Don&apos;t have an account ?{" "}
          <Link
            href="/register"
            className={`md:ml-8 ${
              resolvedTheme == "dark" ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Register for free
          </Link>
        </h3>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex justify-center items-center mt-10"
      >
        <Image src="/Home.png" alt="Home image" height={800} width={900} />
      </motion.div>
      <div className="bg-gray-500 my-7 w-full flex h-[1px] rounded-lg" />
      <Link href="#overview" className="flex flex-col items-center gap-3">
        <h2 className="text-center">See what you can do with cloud.connect</h2>
        <ChevronDown />
      </Link>
    </section>
  );
};

export default HomeSection;
