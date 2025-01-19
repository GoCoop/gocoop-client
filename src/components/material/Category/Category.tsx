import Icon from "@/icons/Icon/Icon";
import { JSX } from "react";

type Props = {
    name: string;
    icon: any;
    className?: string;
}

export default function Category(props: Props): JSX.Element {
    return (
        <button className={`w-full p-4 border-x border-y rounded-2xl flex flex-col gap-6 hover:bg-slate-100 ${props.className}`}>
            <Icon icon={props.icon}/>
            <span>{props.name}</span>
        </button>
    )
}