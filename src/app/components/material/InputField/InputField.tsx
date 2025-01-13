import React, { JSX } from "react";

type Props = {
    id: string;
    name: string;
    placeholder?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    autoFocus?: boolean;
}

export default function InputField({
    id,
    name,
    placeholder = 'Digite o texto',
    icon: Icon,
    autoFocus = false
}: Props): JSX.Element {
    return (
        <div className="relative">
            {Icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3"> <Icon /> </span>}
            <input
                id={id}
                name={name}
                type="text"
                className={`w-full p-4 ${[Icon ? 'pl-10' : 'p-4']} border-2 rounded-2xl focus:outline-[#5DC04F]`}
                autoFocus={autoFocus}
                placeholder={placeholder}
            />
        </div>
    )
}