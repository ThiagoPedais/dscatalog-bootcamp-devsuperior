import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { tabbar } from '../styles';

type TabBarProps = {
    screen: string;
    setScreen: Function;
}

export default function TabBar(props: TabBarProps) {

    const { screen, setScreen } = props;

    function changeScreen(page: string) {
        setScreen(page)
    }

    return (
        <View style={tabbar.container}>
            <TouchableOpacity
                style={[tabbar.pill, screen === "products" && tabbar.pillActive]}
                activeOpacity={0.6}
                onPress={() => changeScreen("products")}
            >
                <Text style={[tabbar.pillText, screen === "products" && tabbar.pillTextActive]}>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[tabbar.pill, screen === "categories" && tabbar.pillActive]}
                activeOpacity={0.6}
                onPress={() => changeScreen("categories")}
            >
                <Text style={[tabbar.pillText, screen === "categories" && tabbar.pillTextActive]}>Categorias</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[tabbar.pill, screen === "users" && tabbar.pillActive]}
                activeOpacity={0.6}
                onPress={() => changeScreen("users")}
            >
                <Text style={[tabbar.pillText, screen === "users" && tabbar.pillTextActive]}>Usuários</Text>
            </TouchableOpacity>
        </View>
    );
};
