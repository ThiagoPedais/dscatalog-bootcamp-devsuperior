import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, TouchableOpacity } from 'react-native'
import { ProductCard, SearchInpput } from '../../../components';
import { deleteProduct, getProducts } from '../../../services';
import { admin, text } from '../../../styles';
import { Product } from '../../../types';


interface ProductProps {
    setScreen: Function;
    setProductId: Function;
}

export default function Products(props: ProductProps) {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const { setScreen, setProductId } = props;


    async function handleDelete(id: number) {
        setLoading(true);
        const res = await deleteProduct(id);
        fillProducts();
    }

    function handleEdit(id: number) {
        setProductId(id);
        setScreen("editProduct");
    };

    async function fillProducts() {
        try {
            const res = await getProducts();

            setProducts(res.data.content);
            setLoading(false);
            // console.warn(res.data);
        }
        catch (error) {
            console.warn(error)
        }
    };

    const data = search.length > 0 ? products.filter(product => product.name.toLocaleLowerCase().includes(search.toLowerCase())) : products;


    useEffect(() => {
        fillProducts();
    }, [])

    return (
        <ScrollView contentContainerStyle={admin.container} >
            <TouchableOpacity style={admin.addButton} onPress={() => setScreen("newProduct")}>
                <Text style={text.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <SearchInpput
                search={search}
                setSearch={setSearch}
                placeholder="Nome do produto"
            />
            {
                loading ? (<ActivityIndicator size="large" />
                ) : (
                    data?.map((product) => {
                        const { id } = product;
                        return (
                            <ProductCard
                                product={product}
                                key={id}
                                role='admin'
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                    }))
            }
        </ScrollView>
    );
};
