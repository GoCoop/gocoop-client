'use client'

import Image from "next/image";

import Header from "./components/core/Header";
import InputField from "./components/material/InputField/InputField";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 h-[calc(100vh-75px)] grid grid-rows-[max-content_max-content_max-content_1fr] gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 32 32"
          className="place-self-center"
        >
          <path
            fill="#5DC04F"
            d="M30.674 15.2c.033-.118.072-.233.1-.353c.006-.024.008-.048.014-.072a7.274 7.274 0 0 0-1.651-6.612a7.807 7.807 0 0 0-6.323-3.148h-.052c-.1 0-.212.007-.318.01h-.121a39.667 39.667 0 0 0-6.282.854l-4.477-.715h-.035a9.745 9.745 0 0 0-6.237 1a8.767 8.767 0 0 0-2.71 2.558l-.041.055l-.025.035a8.6 8.6 0 0 0-.108 9.45c-.019.034-.03.072-.048.107a3.972 3.972 0 0 0-.221.537c-.032.1-.056.206-.079.31c-.018.085-.036.169-.048.254a3.395 3.395 0 0 0-.022.319c0 .086-.01.17-.006.255c.007.112.02.223.038.334c.012.079.018.158.036.236c.03.123.07.244.116.362c.023.063.038.128.066.19c.082.183.182.356.3.518A3.338 3.338 0 0 0 4.424 23a2.758 2.758 0 0 0 .95 2.272a4.058 4.058 0 0 0 2.028.954c.155.503.427.962.793 1.34a3.118 3.118 0 0 0 1.905.98c.174.593.504 1.129.956 1.55c.557.548 1.303.86 2.084.87a3.372 3.372 0 0 0 1.639-.434c.744.426 1.616.57 2.458.406a3.063 3.063 0 0 0 2.117-1.509c.021-.033.033-.062.052-.095c.85.174 1.735.021 2.478-.428a3.1 3.1 0 0 0 1.4-1.67c.894.012 1.76-.31 2.427-.905a3.045 3.045 0 0 0 1.026-2.595c0-.028-.007-.05-.009-.077a3 3 0 0 0 1.358-.855a3.29 3.29 0 0 0 .52-3.804a10.214 10.214 0 0 0 2-3.556c.024-.077.044-.161.068-.244Zm-1.712-1.7a6.27 6.27 0 0 1-.329 1.474l-.032.1a8.482 8.482 0 0 1-1.418 2.448c-3.137-2.738-7.7-6.734-8.075-7.092a2.349 2.349 0 0 0-1.608-.652a1.837 1.837 0 0 0-.549.079c-.634.2-2.192.7-3.552 1.205c-.52.193-1.114-.3-1.295-.72c-.12-.252-.14-.54-.058-.806c.163-.295.437-.514.761-.608a34.491 34.491 0 0 1 9.546-1.9h.121c.111 0 .221-.008.323-.01a5.48 5.48 0 0 1 2.179.413a7.135 7.135 0 0 1 2.624 2.05a5.633 5.633 0 0 1 1.272 2.483l.009.046a5.25 5.25 0 0 1 .091.746c.003.081.008.183.008.273c0 .145 0 .289-.017.432l-.001.039ZM4.007 20.159C4 20.116 4 20.069 4 20.024a1.275 1.275 0 0 1 0-.29a1.48 1.48 0 0 1 .043-.168c.02-.089.05-.176.086-.259c.033-.06.071-.118.113-.172a1.28 1.28 0 0 1 .215-.265l.006-.005l1.881-1.595a1.2 1.2 0 0 1 1.684.22a.807.807 0 0 1 .1.708l-2.95 2.874a1.178 1.178 0 0 1-1.021-.555a.942.942 0 0 1-.15-.358Zm2.516 2.395L9.76 19.4l-.015-.015a.986.986 0 0 1 .589-.092c.257.07.489.214.666.414c.176.15.294.356.334.584a1.23 1.23 0 0 1-.146.665a.817.817 0 0 0-.026.085l-3.271 3.187a1.602 1.602 0 0 1-1.234-.5a1.117 1.117 0 0 1-.134-1.174Zm2.785 3.085l3.38-3.289c.215.043.412.153.562.314a1.3 1.3 0 0 1 .412.693a.976.976 0 0 1-.015.347l-2.923 2.845a1.168 1.168 0 0 1-1.075-.36a1.363 1.363 0 0 1-.341-.55Zm3.137 3.012a1.617 1.617 0 0 1-.418-.58l2.761-2.687c.197.065.377.172.528.313a.96.96 0 0 1 .307.433a.741.741 0 0 1 0 .385a3.019 3.019 0 0 1-.611 1.094l-.756.88h.006c-.025.016-.053.023-.076.041a1.641 1.641 0 0 1-1.026.427a1.029 1.029 0 0 1-.715-.306Zm4.474.307c-.148.023-.297.03-.446.02l.074-.086l.024-.029l.001.001a5.96 5.96 0 0 0 .764-1.221l.442.468a1.95 1.95 0 0 1-.13.273a1.081 1.081 0 0 1-.729.574Zm6.4-3.725l-1.779-1.971a.999.999 0 0 0-1.694 1.002a1 1 0 0 0 .208.336l1.436 1.6c-.01.102-.031.203-.063.3a1.139 1.139 0 0 1-.53.669a1.46 1.46 0 0 1-1.06.216l-1.2-1.274a.993.993 0 0 0-1.03-.259a2.575 2.575 0 0 0-.063-.288a2.956 2.956 0 0 0-.887-1.347a3.525 3.525 0 0 0-.985-.635a2.783 2.783 0 0 0-.035-.556a3.267 3.267 0 0 0-.977-1.777a3.152 3.152 0 0 0-1.323-.8c.005-.134 0-.267-.015-.4a2.967 2.967 0 0 0-.912-1.759a3.352 3.352 0 0 0-1.671-.951a2.702 2.702 0 0 0-.659-.045a2.606 2.606 0 0 0-.465-1.025a3.2 3.2 0 0 0-4.493-.579l-.035.028l-1.235 1.04a6.542 6.542 0 0 1 .314-6.812l.021-.03A6.793 6.793 0 0 1 6.292 7.9a7.762 7.762 0 0 1 4.982-.751l.464.074A3.056 3.056 0 0 0 10.2 8.77a3.022 3.022 0 0 0 .066 2.356a3.154 3.154 0 0 0 3.834 1.812c1.32-.489 2.834-.98 3.4-1.159a.3.3 0 0 1 .238.105c.489.46 6.392 5.627 8.858 7.776l.2.171a1.32 1.32 0 0 1-.183 1.62a1 1 0 0 1-.535.3l-1.733-1.757a1.004 1.004 0 0 0-1.432 1.406l1.656 1.678c.007.03.015.06.024.089l.012.031a2.473 2.473 0 0 1 .135.662a1.061 1.061 0 0 1-.321.943c-.299.28-.694.434-1.103.43h.003Z"
          />
        </svg>
        <h1 className="text-xl">Descubra cooperativas de diferentes ramos em todo o Brasil.</h1>
        <InputField />

        <div className="grid grid-cols-2 gap-4 place-content-end">
          <button className="w-full p-4 border-2 rounded-2xl h-28 flex flex-col justify-between">
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M12.1471 21.2646L12 21.2351L11.8529 21.2646C9.47627 21.7399 7.23257 21.4756 5.59352 20.1643C3.96312 18.86 2.75 16.374 2.75 12C2.75 7.52684 3.75792 5.70955 5.08541 5.04581C5.77977 4.69863 6.67771 4.59759 7.82028 4.72943C8.96149 4.86111 10.2783 5.21669 11.7628 5.71153L12.0235 5.79841L12.2785 5.69638C14.7602 4.70367 16.9909 4.3234 18.5578 5.05463C20.0271 5.7403 21.25 7.59326 21.25 12C21.25 16.374 20.0369 18.86 18.4065 20.1643C16.7674 21.4756 14.5237 21.7399 12.1471 21.2646Z"
                stroke="#EE3939"
                strokeWidth="1.5">
              </path>
              <path
                d="M12 5.5C12 3 11 2 9 2"
                stroke="#EE3939"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>Alimentos</span>
          </button>
          <button className="w-full p-4 border-2 rounded-2xl h-28 flex flex-col justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#2E6FD0"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"
              />
            </svg>
            <span>Serviços</span>
          </button>
          <button className="w-full p-2 border-2 rounded-2xl col-start-1 col-end-3">Ver mais</button>
        </div>
      </main>
    </>

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
