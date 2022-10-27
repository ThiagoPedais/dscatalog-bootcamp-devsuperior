import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import menu from "../assets/menu.png";
import { PropsStack } from "../Models";
import { doLogout, isAuthenticated } from "../services/auth";
import { nav, text } from "../styles";



const NavBar = () => {
    const navigation = useNavigation<PropsStack>();
    const route = useRoute();
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);



    const navigate = (path: any) => {
        if (path) {
            setShow(false);
            navigation.navigate(path)
        }
        setShow(false);
    };

    const logged = async () => {
        const result = isAuthenticated();

        await result ? setAuthenticated(true) : setAuthenticated(false);
    }

    const logout = async () => {
        doLogout();
        navigation.navigate("Login");
    }
    

    useEffect(() => {
        logged();
    }, [])

    return (
        <>
            {
                authenticated ? (
                    <TouchableOpacity style={nav.logoutBtn}onPress={() => logout()}>
                        <Text style={text.logoutText}>Sair</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={nav.drawer}
                        onPress={() => setShow(!show)}
                    >
                        <Image source={menu} />
                        {
                            show ?
                                (<View style={nav.options}>
                                    <TouchableOpacity style={nav.option} onPress={() => navigate("Home")}>
                                        <Text style={[nav.textOption, route.name === "Home" ? nav.textActive : null]}>Home</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={nav.option} onPress={() => navigate("Catalog")}>
                                        <Text style={[nav.textOption, route.name === "Catalog" ? nav.textActive : null]}>Catálogo</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={nav.option} onPress={() => navigate("Login")}>
                                        <Text style={[nav.textOption, route.name === "ADM" ? nav.textActive : null]}>Administrador</Text>
                                    </TouchableOpacity>
                                </View>)
                                :
                                null

                        }
                    </TouchableOpacity>
                )
            }
        </>

    );
};

export default NavBar;