import ResultBoxLoader from "@/components/core/Skeletons/SearchPage/ResultBoxLoader";
import DescriptionLoader from "@/components/core/Skeletons/DetailsPage/DescriptionLoader";
import InfoBoxLoader from "@/components/core/Skeletons/DetailsPage/InfoBoxLoader";

export default function Loader() {
  return (
    <div className="grid gap-4 sm:justify-center">
      <ResultBoxLoader style="sm:w-[33rem]" />
      <DescriptionLoader />
      <InfoBoxLoader />
      <InfoBoxLoader />
    </div>
  )
}