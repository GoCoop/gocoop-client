import LogoIcon from "../Logo";
import IndustryIcon from "../IndustryIcon";
import BankingIcon from "../BankingIcon";
import CoffeeIcon from "../CoffeeIcon";
import FoodIcon from "../FoodIcon";
import BeerIcon from "../BeerIcon";
import ServicesIcon from "../ServicesIcon";

const icons = { 
    LogoIcon,
    IndustryIcon,
    BankingIcon,
    CoffeeIcon,
    FoodIcon,
    BeerIcon,
    ServicesIcon
};

const labels = {
    "logo": "LogoIcon",
    "industry": "IndustryIcon",
    "banking": "BankingIcon",
    "coffee": "CoffeeIcon",
    "food": "FoodIcon",
    "beer": "BeerIcon",
    "services": "ServicesIcon"
} as const;

export type CategoriesT = keyof typeof labels;

type Props = {
    icon: CategoriesT;
};

export default function Icon({ icon }: Props) {
    const nameIcon = labels[icon] || 'LogoIcon';
    const SelectedIcon = icons[nameIcon];

    return (
        <>
            <SelectedIcon />            
        </>
    )
}