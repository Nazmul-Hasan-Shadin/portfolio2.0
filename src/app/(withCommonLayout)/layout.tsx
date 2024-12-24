import NavigationMenu from "@/src/components/modules/Shared/NavigationMenu";
import SelfBrandCard from "@/src/components/modules/Shared/SelfBrandCard";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-between gap-4 ">
      <div className="fixed top-0 left-0 w-[350px] pl-3">
        <SelfBrandCard></SelfBrandCard>
      </div>

      <div className="relative flex flex-col h-screen">
        <main className="container  mx-auto max-w-7xl ml-[350px] pt-16 px-6 flex-grow">
          {children}
        </main>
      </div>
      <div>
        <div className="fixed lg:right-16 lg:top-24">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}
