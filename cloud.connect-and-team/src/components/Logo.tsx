import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ href = "/", className = "" }) => {
  const { resolvedTheme } = useTheme();

  return (
    <Link
      className="flex justify-center items-center gap-1 md:gap-3"
      href={href}
    >
      <div className="flex justify-center items-center">
        <Image
          alt="icon"
          width={70}
          height={50}
          className="md:w-16 w-10"
          src="/cloud-connect.png"
        />
      </div>
      <div>
        <h2
          className={`flex bg-gradient-to-br bg-clip-text text-transparent font-bold ${
            resolvedTheme == "dark"
              ? "from-purple-300 to-blue-400"
              : "from-purple-500 to-blue-700"
          } ${className}`}
        >
          AICipherHive
        </h2>
        <h3 className={`text-[10px] md:text-lg sm:text-sm font-semibold ${resolvedTheme == "dark" ? 'text-gray-400' : 'text-gray-500'}`}>By Connect and team</h3>
      </div>
    </Link>
  );
};

export default Logo;
