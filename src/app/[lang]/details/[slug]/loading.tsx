"use client";

import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";
import DescriptionLoader from "@/components/core/Skeletons/DetailsPage/DescriptionLoader";
import InfoBoxLoader from "@/components/core/Skeletons/DetailsPage/InfoBoxLoader";
import RouterBack from "@/components/core/RouterBack";

export default function Loading() {
  return (
    <>
      <div className="p-6 grid gap-4 sm:justify-center">
        <RouterBack className="mt-[5rem]" />
        <ResultBoxLoader style="sm:w-[33rem] mt-[5rem]" />
        <DescriptionLoader />
        <InfoBoxLoader />
        <InfoBoxLoader />
      </div>
    </>
  );
}
