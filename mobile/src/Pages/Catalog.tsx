import { ActivityIndicator, FlatList, View } from "react-native";
import { ProductCard, SearchInpput } from "../components";

import { theme } from "../styles";
import { useEffect, useState } from "react";
import { api } from "../services";
import { Product } from "../types";


type FooterListProps = {
    load: boolean;
};

function FooterList({ load }: FooterListProps) {
    if (!load) return null;

    return (
        <View style={theme.loading}>
            <ActivityIndicator size="large" color="#121212" />
        </View>
    );
};

const Catalog = () => {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const perPage = 5;


    const data = search.length > 0 ? products.filter(product => product.name.toLocaleLowerCase().includes(search.toLowerCase())) : products;



    async function fillProducts() {
        if (loading) return;

        setLoading(true);

        api
            .get(`/products?page=${page}&linesPerPage=${perPage}&direction=ASC&orderBy=name`)
            .then(res => {
                setProducts([...products, ...res.data.content]);
                setPage(page + 1);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fillProducts();
    }, []);


    return (

        <View style={theme.catalogContainer}>
            <SearchInpput                
                placeholder="Nome do produto"
                search={search}
                setSearch={setSearch}
            />
            <FlatList
                contentContainerStyle={theme.scrollContainer}
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ProductCard product={item} key={item.id} />}
                onEndReached={fillProducts}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading && search.length <= 0} />}
            />
        </View>
    );
};

export default Catalog;

