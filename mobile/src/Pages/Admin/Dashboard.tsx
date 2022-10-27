import { useState } from "react";
import { Text, View } from "react-native";
import { TabBar } from "../../components";
import { theme } from "../../styles";
import Categories from "./Categories";
import FormProducts from "./Products/FormProducts";

//Products
import Products from "./Products/ListProducts";
import EditProducts from "./Products/EditProduct";
import Users from "./Users";



const Dashboard = () => {

    const [screen, setScreen] = useState("products");
    const [productId, setProductId] = useState(0);

    return(
        <View>
            <TabBar screen={screen} setScreen={setScreen} />
             
            
                {screen === "products" && <Products setScreen={setScreen} setProductId={setProductId} />}
                {screen === "newProduct" && <FormProducts setScreen={setScreen}  />}
                {screen === "editProduct" && <EditProducts setScreen={setScreen} productId={productId} />}

                {screen === "categories" && <Categories />}
                {screen === "users" && <Users />}
            
        </View>
    );
};

export default Dashboard;