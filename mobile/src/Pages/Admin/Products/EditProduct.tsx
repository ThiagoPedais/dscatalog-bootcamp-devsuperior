import React, { useEffect, useState } from 'react';

import Toast from 'react-native-root-toast';
import {
    ActivityIndicator,
    Alert,
    Image,
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import * as ImagePicker from "expo-image-picker";

import arrow from "../../../assets/leftArrow.png";
import { createProduct, getCategories, updateProduct, uploadImage, getProduct } from '../../../services';
import { text, theme } from '../../../styles';
import { Categories } from '../../../types';
import { TextInputMask } from 'react-native-masked-text';

interface FormProps {
    setScreen: Function;
    productId: number;
}

export default function EditProducts(props: FormProps) {

    const { setScreen, productId } = props;

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<Categories[]>([]);
    const [showCategories, setShowCategories] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        imgUrl: " ",
        price: "",
        categories: []
    });

    const [image, setImage] = useState("");

    useEffect(() => {
        async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();

            if (status != 'granted') {
                Alert.alert("Precisamos de acesso a biblioteca de imagens!")
            }
        }
    }, [])

    async function selectImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        !result.cancelled && setImage(result.uri);
    };

    async function handleUpload() {
        uploadImage(image).then(res => {
            const { uri } = res?.data;
            setProduct({ ...product, imgUrl: uri })
        })
    };

    useEffect(() => {
        image ? handleUpload() : null;
    }, [image]);

    async function handleSave() {
        setLoading(true);

        const data = {
            ...product,
        };

        try {
            await updateProduct(data);
            setScreen("products");
            Toast.show("Produto atualizado :)", {
                duration: 2000,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            })
            // Toast.showSuccess("Produto cadastrado com sucesso :)")

        }
        catch (e) {
            // Toast.show("Erro ao salvar")           
            Toast.show("Erro ao atualizar o produto :(", {
                duration: 2000,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            })
            console.warn("Erro ao salvar " + e);
        }

        setLoading(false);

    };

    function getRaw(e) {
        const str = e;
        const res = str.slice(2).replace(/\./g, "").replace(/,/g, ".");

        return res;
    }


    async function loadCategories() {
        setLoading(true);

        const res = await getCategories();
        setCategories(res.data.content);
        setLoading(false)
    };

    async function loadProduct() {
        setLoading(true);
        const res = await getProduct(productId);
        setProduct(res.data);
        setLoading(false);
    }

    useEffect(() => {
        loadCategories();
        loadProduct();
    }, []);

    return (
        <View style={theme.formContainer}>
            {
                loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <View style={theme.formCard}>
                        <ScrollView>
                            <Modal
                                visible={showCategories}
                                animationType="fade"
                                transparent={true}
                                presentationStyle="overFullScreen"
                            >
                                <View style={theme.modalContainer}>
                                    <ScrollView contentContainerStyle={theme.modalContent}>
                                        {
                                            categories.map(cat => {
                                                const { id, name } = cat;

                                                return (
                                                    <TouchableOpacity
                                                        style={theme.modalItem}
                                                        key={id}
                                                        onPress={() => {
                                                            setProduct({ ...product, categories: [{ id, name }] });
                                                            setShowCategories(!showCategories);
                                                        }}>
                                                        <Text>{name}</Text>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                            </Modal>

                            <TouchableOpacity onPress={() => setScreen("products")} style={theme.goBackContainer}>
                                <Image source={arrow} />
                                <Text style={text.goBackText}>Voltar</Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholder="Nome do produto"
                                style={theme.formInput}
                                value={product.name}
                                onChangeText={e => setProduct({ ...product, name: e })}
                            />

                            <TouchableOpacity
                                onPress={() => setShowCategories(!showCategories)}
                                style={theme.selectInput}
                            >
                                <Text>
                                    {
                                        product.categories.length > 0 && product.categories[0].name
                                    }
                                </Text>
                            </TouchableOpacity>

                            <TextInputMask
                                type={"money"}
                                placeholder="Preço"
                                value={product.price}
                                style={theme.formInput}
                                onChangeText={e => setProduct({ ...product, price: getRaw(e) })}
                            />

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={theme.uploadBtn}
                                onPress={selectImage}
                            >
                                <Text style={text.uploadText}>Carregar imagem</Text>
                            </TouchableOpacity>
                            <Text style={text.fileSize}>
                                As imagens devem ser JPG ou PNG e não devem ultrapassar 5 mb.
                            </Text>

                            <TouchableOpacity
                                onPress={selectImage}
                                activeOpacity={0.9}
                                style={{ width: "100%", height: 150, borderRadius: 10, marginVertical: 10 }}
                            >
                                <Image
                                    source={image === "" ? { uri: product.imgUrl } : { uri: image }}
                                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                                />

                            </TouchableOpacity>

                            <TextInput
                                multiline
                                placeholder="Descrição"
                                style={theme.formArea}
                                value={product.description}
                                onChangeText={e => setProduct({ ...product, description: e })}
                            />

                            <View style={theme.buttonContainer}>

                                <TouchableOpacity style={theme.deleteBtn} onPress={() => {
                                    Alert.alert(
                                        "Deseja cancelar?",
                                        "OS dados inseridos não serão salvos",
                                        [
                                            {
                                                text: "Voltar",
                                                style: "cancel"
                                            },
                                            {
                                                text: "Confirmar",
                                                onPress: () => setScreen("products"),
                                                style: "default"
                                            }
                                        ]
                                    )
                                }}>
                                    <Text style={text.deleteTxt}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={theme.saveButton} onPress={() => handleSave()}>
                                    <Text style={text.saveText}>Salvar</Text>
                                </TouchableOpacity>

                            </View>


                        </ScrollView>
                    </View>
                )
            }

        </View>
    )
}
