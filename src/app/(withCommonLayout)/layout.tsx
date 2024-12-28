import NavigationMenu from "@/src/components/modules/Shared/NavigationMenu";
import SelfBrandCard from "@/src/components/modules/Shared/SelfBrandCard";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid  lg:grid-cols-12 lg:gap-4 ">
      <div className="col-span-12 md:col-span-2 lg:col-span-3">
        <div className="lg:fixed top-8 left-0  md:pl-3">
          <SelfBrandCard></SelfBrandCard>
        </div>
      </div>
      <div className=" col-span-12 md:col-span-7 lg:col-span-7">
        <main className="container  mx-auto max-w-7xl">{children}</main>
      </div>
      <div className="w-3/4 col-span-12   mx-4 md:w-full md:col-span-12 lg:col-span-1">
        <div className="fixed  right-6  top-20  md:top-5  lg:right-16 lg:top-24">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}

// bottom-3 left-0 w-full
