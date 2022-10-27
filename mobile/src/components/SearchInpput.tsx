import { TextInput, View } from "react-native";
import { theme } from "../styles";


type SearchProps = {
    placeholder: string;
    search: string;
    setSearch: Function;
}

const SearchInpput = ({ placeholder, search, setSearch }: SearchProps) => {
    return (
        <View style={theme.inputContainer}>
            <TextInput
                style={theme.searchInput}
                placeholder={placeholder}
                value={search}
                onChangeText={text => setSearch(text)}
            />
        </View>
    );
};


export default SearchInpput;