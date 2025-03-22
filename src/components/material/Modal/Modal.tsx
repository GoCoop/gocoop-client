"use client";

import { JSX, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  button: {
    name: string;
    className: string;
  };
};

export default function Modal({
  children,
  button,
}: Props): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`${button.className} p-2 border-x border-y rounded-2xl hover:bg-slate-100 transition`}
        onClick={openModal}
      >
        {button.name}
      </button>

    {
      isOpen &&
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative flex flex-col bg-white p-6 w-full h-full overflow-y-auto scrollbar-thin sm:max-w-[33rem] sm:h-auto sm:max-h-[18rem] sm:rounded-lg md:max-h-[24rem]">
            <button
              className="bg-slate-300 p-1 w-6 h-6 rounded-full text-gray-400 flex justify-center items-center place-self-end hover:text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            {children}
          </div>
        </div>
    } 
    </>
  );
}
