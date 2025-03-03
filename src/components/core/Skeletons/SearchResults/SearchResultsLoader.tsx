import ResultBoxLoader from "@/components/core/Skeletons/ResultBoxLoader";

export default function SearchResultsLoader() {
  return (
    <>
      <div className="grid gap-4 sm:justify-center">
        <ResultBoxLoader 
          style="sm:w-[33rem]"
        />
        <ResultBoxLoader 
          style="sm:w-[33rem]"
        />
        <ResultBoxLoader 
          style="sm:w-[33rem]"
        />
      </div>
    </>
  );
}