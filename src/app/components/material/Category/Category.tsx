import { JSX } from "react";

type Props = {
    name: string;
    icon: any;
}

export default function Category(props: Props): JSX.Element {
    return (
        <button className="w-full p-4 border-2 rounded-2xl flex flex-col gap-6 hover:bg-slate-100">
            {props.icon}
            <span>{props.name}</span>
        </button>
    )
}