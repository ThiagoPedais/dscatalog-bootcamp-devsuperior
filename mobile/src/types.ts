import { ImageSourcePropType } from "react-native";

export type Product = {
    id: number;
    name: string;
    imgUrl?: string;
    price: string;
}

export type Categories = {
    id: number | null;
    name: string | null;    
}

