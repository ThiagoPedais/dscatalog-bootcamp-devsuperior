import { useEffect, useState } from "react";

import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { text, theme } from "../styles";

import eyesOpened from "../assets/eyes-opened.png";
import eyesClosed from "../assets/eyes-closed.png";
import arrow from "../assets/arrow.png";
import { isAuthenticated, login } from "../services/auth";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../Models";




const Login = () => {
    const navigation = useNavigation<PropsStack>();


    const [hidePassword, setHidePassword] = useState(false);
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })   

    
    const handleLogin = async () => {
        const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("Dashboard");
        // console.warn(data)
    };


    return (
        <View style={theme.container}>
            <View style={theme.LoginCard}>
                <Text style={text.loginTitle}>Login</Text>
                <View style={theme.form}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.username = e;
                            // console.warn(newUserInfo)
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <View style={theme.passwordContainer}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            style={theme.textInput}
                            value={userInfo.password}
                            secureTextEntry={!hidePassword}
                            onChangeText={(e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                // console.warn(newUserInfo)
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <TouchableOpacity
                            style={theme.toggle}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Image source={hidePassword ? eyesOpened : eyesClosed} style={theme.eyes} />
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                >
                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer Login</Text>
                    </View>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Login;