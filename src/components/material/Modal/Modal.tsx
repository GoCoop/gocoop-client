import { JSX, ReactNode } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props): JSX.Element | null {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="relative bg-white p-6 w-full h-full overflow-y-auto sm:max-w-[33rem] sm:h-auto sm:max-h-[18rem] sm:rounded-lg md:max-h-[24rem]">
                <button
                    className="bg-slate-300 p-1 w-6 h-6 rounded-full text-gray-400 flex justify-center items-center place-self-end hover:text-gray-600"
                    onClick={onClose}
                >&times;</button>
                {children}
            </div>
        </div>
    )
}