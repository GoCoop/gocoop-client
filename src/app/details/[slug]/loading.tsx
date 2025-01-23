"use client";

import Header from "@/components/core/Header";
import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import DescriptionLoader from "@/components/core/Skeletons/DetailsPage/DescriptionLoader";
import InfoBoxLoader from "@/components/core/Skeletons/DetailsPage/InfoBoxLoader";
import RouterBack from "@/components/core/RouterBack";

export default function Loading() {
  return (
    <>
      <Header />
      <div className="p-6 grid gap-4 sm:justify-center pt-20">
        <RouterBack />
        <ResultBoxLoader style="sm:w-[33rem]" />
        <DescriptionLoader />
        <InfoBoxLoader />
        <InfoBoxLoader />
      </div>
    </>
  );
}
