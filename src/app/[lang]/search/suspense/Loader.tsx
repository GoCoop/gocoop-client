import ResultBoxLoader from "@/components/core/Skeletons/SearchPage/ResultBoxLoader";

export function Loader() {
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