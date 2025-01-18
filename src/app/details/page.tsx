'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/components/core/Header";

import coops from "@/services/coops";
import { CoopDetailsT } from "@/services/coops/details/GET";

export default function DetailsPage() {

    const router = useRouter();

    const [details, setDetails] = useState<CoopDetailsT[] | null>(null);

    const getCoopDetails = async(id: number): Promise<void> => {
        const res = await coops.details.GET({
            id: id
        });

        if (res.success) {
            console.log(res, 'success res');
            setDetails(res.data);
        };
    };

    const translateCategory = (category: string): string => {
        const categories = {
            "industry": "Indústria"
        };

        return categories[category as keyof typeof categories] || 'N/I';
    }

    useEffect(() => {
        getCoopDetails(1);
    }, []);

    return (
        <>
            <Header />
            <main className="p-6 pb-8 grid gap-4 sm:justify-center">
                <button onClick={() => router.back()} className="w-fit flex items-center gap-4">
                    <svg 
                        width="40px" 
                        height="40px" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="p-2 bg-slate-200 rounded-full"
                        color="#000000"
                    >
                        <path 
                            d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" 
                            stroke="#000000" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    Voltar
                </button>
                {details && details.map(d => (
                    <React.Fragment key={d.id}>
                        <div className="grid grid-cols-[max-content_1fr] gap-x-4">
                            <Image 
                                className="row-start-1 row-end-3 rounded-full"
                                src="/agraria-logo.jpg"
                                alt="Logo da cooperativa"
                                width={70}
                                height={70}
                            />
                            <h1 className="text-lg self-center">{d.name}</h1>
                            <p className="text-sm">{d.shortDesc}</p>
                        </div>
                        <div className="w-fit p-3 border-y border-x rounded-lg flex items-center gap-2">
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
                                    d="M18 10C18 9 17 8 15 8C14.6978 8 14.355 8 14.0002 8C12.3434 8 11 6.65685 11 5V2"
                                    stroke="#652F2F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M18 21H21V12H18V16.5M18 21V16.5M18 21L3 21V17L6.5 14L10.5 16.5L14.5 14L18 16.5"
                                    stroke="#652F2F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M21 10C21 4 17 4 17 4C17 4 21 4.5 21 2"
                                    stroke="#652F2F"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <span>{translateCategory(d.category)}</span>
                        </div>
                        <section className="p-3 border-y border-x rounded-lg sm:w-[33rem]">
                            {d.desc && d.desc.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    <p>{line}</p>
                                    {(d.desc.split('\n').length - 1) > i && <br />} 
                                </React.Fragment>
                            ))}
                        </section>
                        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
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
                                    d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" 
                                    stroke="#EE3939" 
                                    strokeWidth="1.5"
                                ></path>
                                <path 
                                    d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" 
                                    fill="#000000" 
                                    stroke="#EE3939" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                ></path>
                            </svg> 
                            {d.location}
                        </div>
                        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
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
                                    d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952" 
                                    stroke="#000000" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                ></path>
                                <path 
                                    d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999" 
                                    stroke="#000000" 
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <Link 
                                href={d.websiteURL} 
                                target="_blank"
                                className="text-sky-400 underline"
                            >{d.websiteURL}</Link>
                        </div>
                        <div className="p-3 border-y border-x rounded-lg flex items-center gap-2">
                            <svg 
                                width="24px" 
                                height="24px" 
                                viewBox="0 0 48 48" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g 
                                    id="SVGRepo_bgCarrier" 
                                    strokeWidth="0">
                                </g>
                                <g 
                                    id="SVGRepo_tracerCarrier" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <path 
                                        d="M21.37 36C22.82 30.75 27.89 27 33.73 27.62C39.29 28.21 43.71 32.9 43.99 38.48C44.06 39.95 43.86 41.36 43.43 42.67C43.17 43.47 42.39 44 41.54 44H11.7584C6.71004 44 2.92371 39.3814 3.91377 34.4311L9.99994 4H21.9999L25.9999 11L17.43 17.13L14.9999 14" 
                                        stroke="#000000" 
                                        strokeWidth="4" 
                                        strokeMiterlimit="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    ></path> 
                                    <path 
                                        d="M17.4399 17.13L22 34" 
                                        stroke="#000000" 
                                        strokeWidth="4" 
                                        strokeMiterlimit="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    ></path> 
                                </g>
                            </svg>
                            {d.workers} cooperados
                        </div>
                    </React.Fragment>
                ))}
            </main>
        </>
    )
}