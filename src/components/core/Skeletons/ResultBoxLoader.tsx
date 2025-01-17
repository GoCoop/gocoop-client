export default function ResultBoxLoader() {
    return (
        <div className="p-6 border-x border-y rounded-lg grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 cursor-pointer hover:bg-slate-100 animate-pulse">
            <div className="w-[50px] h-[50px] bg-slate-200 row-start-1 row-end-3 rounded-full"></div>
            <h1 className="text-lg bg-slate-200 rounded-lg"></h1>
            <p className="text-sm bg-slate-200 rounded-lg"></p>
        </div>
    )
}