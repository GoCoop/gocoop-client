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
            <div className="relative bg-white p-6 w-full h-full overflow-y-auto sm:max-w-md sm:max-h-[28rem] sm:rounded-lg">
                <button
                    className="bg-slate-300 p-1 w-6 h-6 rounded-full text-gray-400 flex justify-center items-center hover:text-gray-600"
                    onClick={onClose}
                >&times;</button>
                {children}
            </div>
        </div>
    )
}