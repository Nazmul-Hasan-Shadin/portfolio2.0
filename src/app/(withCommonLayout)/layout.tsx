import NavigationMenu from "@/src/components/modules/Shared/NavigationMenu";
import SelfBrandCard from "@/src/components/modules/Shared/SelfBrandCard";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid lg:grid-cols-12 lg:gap-4 ">
      <div className="col-span-12 lg:col-span-3">
        <div className="lg:fixed top-0 left-0  pl-3">
          <SelfBrandCard></SelfBrandCard>
        </div>
      </div>
      <div className=" col-span-12 lg:col-span-7">
        <main className="container  mx-auto max-w-7xl   pt-16 px-6 flex-grow">
          {children}
        </main>
      </div>
      <div className="w-3/4  mx-4 md:w-ful md:col-span-12 lg:col-span-2">
        <div className="fixed bottom-3 lg:right-16 lg:top-24">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}
