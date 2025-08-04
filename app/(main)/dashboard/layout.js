import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl mb-5 md:text-8xl lg:text-[105px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-purple-800">
        Dashboard
      </h1>

      {/*Dashboard Page*/}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
