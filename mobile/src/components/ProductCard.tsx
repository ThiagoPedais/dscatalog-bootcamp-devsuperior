import { useNavigation } from "@react-navigation/native";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";

import { PropsStack } from "../Models";
import { admin, text, theme } from "../styles";
import { Product } from "../types";


type ProductProps = {
    product: Product;
    role?: string;
    handleDelete?: Function;
    handleEdit?: Function;
};

const ProductCard = ({ product, role, handleDelete, handleEdit }: ProductProps) => {

    const navigation = useNavigation<PropsStack>();


    return (
        <TouchableOpacity
            style={theme.productCard}
            onPress={() =>
                role ? "" :
                    navigation.navigate("ProductDetails", { id: product.id })}
        >
            <Image source={{ uri: product.imgUrl }} style={theme.productImage} />

            <View style={theme.productDescription}>
                <Text style={text.productName}>{product.name}</Text>
                <View style={theme.priceContainer}>
                    <Text style={text.productCurrency}>R$</Text>
                    <TextInputMask
                        type={"money"}
                        options={{
                            precision: 2,
                            separator: ",",
                            delimiter: ".",
                            unit: " ",
                            suffixUnit: ""
                        }}
                        value={product.price}
                        editable={false}
                        style={text.productPrice}
                    />
                </View>

                {
                    role === 'admin' && (
                        <View style={theme.buttonContainer}>
                            <TouchableOpacity style={theme.deleteBtn} onPress={() => handleDelete(product.id)}>
                                <Text style={text.deleteTxt}>Excluir</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={theme.editBtn} onPress={() =>  handleEdit(product.id)}>
                                <Text style={text.editText}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>

        </TouchableOpacity>
    );
};


export default ProductCard;