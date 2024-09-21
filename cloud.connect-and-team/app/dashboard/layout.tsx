import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";

export default function Dashboardlayout({
  children
}: {
  children: React.ReactNode;
}) {

  auth().protect();

  return (
    <div className="h-full">
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
}
