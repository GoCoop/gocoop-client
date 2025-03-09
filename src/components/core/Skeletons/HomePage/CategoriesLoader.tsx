export default function CategoriesLoader() {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-end sm:place-content-start sm:grid-cols-3">
      <button
        className={`w-full p-4 h-[106px] border-x border-y rounded-2xl flex flex-col gap-6 items-start bg-slate-50 `}
      >
        <div className="w-6 h-6 rounded-full bg-slate-300 animate-pulse"></div>
        <span className="w-2/4 h-6 rounded-2xl bg-slate-300 animate-pulse"></span>
      </button>
      <button
        className={`w-full p-4 border-x border-y rounded-2xl flex flex-col gap-6 items-start bg-slate-50`}
      >
        <div className="w-6 h-6 rounded-full bg-slate-300 animate-pulse"></div>
        <span className="w-2/4 h-6 rounded-2xl bg-slate-300 animate-pulse"></span>
      </button>
      <button
        className={`w-full p-4 border-x border-y rounded-2xl bg-slate-50 hidden sm:flex flex-col gap-6 items-start`}
      >
        <div className="w-6 h-6 rounded-full bg-slate-300 animate-pulse"></div>
        <span className="w-2/4 h-6 rounded-2xl bg-slate-300 animate-pulse"></span>
      </button>

      <button
        className={`p-2 flex justify-center border-x border-y rounded-2xl w-full col-start-1 col-end-3 sm:col-end-4 bg-slate-50`}
      >
        <div className="w-2/6 h-6 bg-slate-300 rounded-2xl animate-pulse"></div>
      </button>
    </div>
  )
}