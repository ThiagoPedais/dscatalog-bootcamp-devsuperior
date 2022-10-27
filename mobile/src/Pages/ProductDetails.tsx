import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { api } from '../services';

import leftArrow from "../assets/leftArrow.png";
import { text, theme } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../Models';

const ProductDetails = ({ route: { params: { id } } }) => {

    const navigation = useNavigation<PropsStack>();


    const [product, setProduct] = useState({
        id: null,
        name: null,
        description: null,
        imgUrl: null,
        price: null,
        date: null,
        categories: []
    });

    const [loading, setLoading] = useState(false);

    async function loadProductData() {
        setLoading(true);

        const res = await api.get(`products/${id}`);
        setProduct(res.data);

        setLoading(false);
    }

    useEffect(() => {
        loadProductData();
    }, [])

    return (
        <View style={theme.detailsContainer}>
            {
                loading ? <ActivityIndicator size="large" />
                    : (
                        <View style={theme.detailCard}> 
                            <TouchableOpacity style={theme.goBackContainer} onPress={() => navigation.goBack()}>
                                <Image source={leftArrow} />
                                <Text style={text.goBackText}>Voltar</Text>
                            </TouchableOpacity>
                            <View style={theme.productImageContainer}>
                                <Image source={{ uri: product.imgUrl }} style={theme.productImageDetails}/>
                            </View>
                            <Text style={text.productDetailsTitle}>{product.name}</Text>
                            <View style={theme.priceContainer}>
                                <Text style={text.productCurrency}>R$</Text>
                                <Text style={text.productPrice}>{product.price}</Text>
                            </View>
                            <ScrollView style={theme.scrollTextContainer}>
                                <Text style={text.productDescription}>{product.description}</Text>
                            </ScrollView>
                        </View>
                    )
            }
        </View>
    );
};

export default ProductDetails;