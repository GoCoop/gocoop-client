import React, { ChangeEvent, JSX, KeyboardEvent } from "react";

type Props = {
    id: string;
    name: string;
    placeholder?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    autoFocus?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function InputField({
    id,
    name,
    placeholder = 'Digite o texto',
    icon: Icon,
    autoFocus = false,
    onChange,
    onKeyDown
}: Props): JSX.Element {
    return (
        <div className="relative">
            {Icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3"> <Icon /> </span>}
            <input
                id={id}
                name={name}
                type="text"
                className={`w-full p-4 ${[Icon ? 'pl-10' : 'p-4']} border-x border-y rounded-2xl focus:outline-[#5DC04F]`}
                autoFocus={autoFocus}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onChange={onChange}
            />
        </div>
    )
}