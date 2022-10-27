import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { NavBar } from '../components';
import { PropsNavigationStack } from '../Models';

import { Home, Catalog, ProductDetails, Login, Dashboard } from '../Pages';
import { colors, nav } from '../styles';


const Stack = createNativeStackNavigator<PropsNavigationStack>();

const HeaderText = () => (
    <Text style={nav.leftText}>DS Catalog</Text>
)

const Routes = () => {
    return (
        <Stack.Navigator
        screenOptions={
            {
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />
            }
        }
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Login" component={Login} />

            {/* Dashboard Administrativo */}
            <Stack.Screen name="Dashboard" component={Dashboard} />


        </Stack.Navigator>
    );
};


export default Routes;