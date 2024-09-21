import { useTheme } from "next-themes";

const HomeFooter = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`w-full p-2 flex justify-center items-center ${resolvedTheme == "dark" ? 'bg-gray-950' : 'bg-gray-200'}`}>
      <div className="text-center">
        &copy;Copyright Content, All rights belongs to connect and team
      </div>
    </div>
  );
};
export default HomeFooter;
