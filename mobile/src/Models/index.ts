import { NativeStackNavigationProp } from '@react-navigation/native-stack';



export type PropsNavigationStack = {
    Home: undefined;
    Catalog: undefined;
    ProductDetails: {
        id: number;
    };
    Login: undefined;
    Dashboard: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;
