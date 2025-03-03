import ResultBoxLoader from "../ResultBoxLoader";
import DescriptionLoader from "./DescriptionLoader";
import InfoBoxLoader from "./InfoBoxLoader";

export default function DetailsPageLoader() {
  return (
    <div className="grid gap-4 sm:justify-center">
      <ResultBoxLoader style="sm:w-[33rem]" />
      <DescriptionLoader />
      <InfoBoxLoader />
      <InfoBoxLoader />
    </div>
  )
}