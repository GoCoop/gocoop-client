import { JSX } from "react";

type Props = {
    icon?: any;
    autoFocus?: boolean;
}

export default function InputField(props: Props): JSX.Element {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">{props.icon}</span>
            <input
                type="text"
                className={`w-full p-4 ${[props.icon ? 'pl-10' : 'p-4']} border-2 rounded-2xl focus:outline-[#5DC04F]`}
                autoFocus={props.autoFocus}
                placeholder="Busque por uma cooperativa..."
            />
        </div>
    )
}