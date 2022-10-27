import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const colors = {
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    mediumGray: "#9E9E9E",
    borderGray: "#E1E1E1",
    darkGray: "#263238",
    black: "#000000",
    primary: "#407BEE",
    secondary: "#33569B",
    bluePill: "#407BFF61",
    red: "#DF5753",
}

const text = {
    regular: {
        fontSize: 16,
        fontWeight: "400" as "400",
        textAlign: "center" as "center",
        color: colors.mediumGray
    },

    bold: {
        fontSize: 26,
        fontWeight: "bold" as "bold",
        textAlign: "center" as "center",
        marginBottom: 15,
        color: colors.darkGray
    },

    primaryText: {
        fontSize: 16,
        fontWeight: "bold" as "bold",
        textTransform: "uppercase" as "uppercase",
        color: colors.white,
        marginLeft: 20
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold" as "bold",
    },

    productCurrency: {
        fontSize: 16,
        fontWeight: "400" as "400",
        color: colors.mediumGray
    },

    productPrice: {
        fontSize: 30,
        fontWeight: "bold" as "bold",
        color: colors.primary
    },

    goBackText: {
        fontSize: 18,
        fontWeight: "bold" as "bold",
        textTransform: "uppercase" as "uppercase",
        color: colors.darkGray,
        marginLeft: 16
    },

    productDetailsTitle: {
        fontSize: 30,
        fontWeight: "bold" as "bold",
        marginTop: 10,
        color: colors.darkGray

    },

    productDescription: {
        fontSize: 16,
        fontWeight: "400" as "400",
        color: colors.mediumGray
    },

    loginTitle: {
        fontSize: 30,
        fontWeight: "400" as "400",
        textTransform: "uppercase" as "uppercase",
        marginBottom: 50
    },

    logoutText: {
        color: colors.white
    },

    addButtonText: {
        color: colors.white,
        textTransform: "uppercase" as "uppercase",
        fontWeight: "bold" as "bold",
    },

    deleteTxt: {
        textTransform: "uppercase" as "uppercase",
        fontWeight: "bold" as "bold",
        color: colors.red
    },

    saveText: {
        textTransform: "uppercase" as "uppercase",
        fontWeight: "bold" as "bold",
        color: colors.white
    },

    editText: {
        textTransform: "uppercase" as "uppercase",
        fontWeight: "bold" as "bold",
        color: colors.mediumGray
    },
    uploadText: {
        color: colors.white,
        textTransform: "uppercase" as "uppercase",
        fontWeight: "bold" as "bold",
    },

    fileSize: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: "300" as "300",
        marginVertical: 5,
        padding: 2
    },

    

};

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    card: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around"

    },

    draw: {
        width: 313,
        height: 225
    },

    textContainer: {
        paddingHorizontal: 20,
    },

    primaryButton: {
        width: 290,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    arrowContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    //Product Card
    scrollContainer: {        
        
    },

    catalogContainer:{
        flex: 1,
        padding: 15,
    },

    productCard: {
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },

    productDescription: {
        width: "100%",
        padding: 20,
        borderTopColor: colors.lightGray,
        borderTopWidth: 1
    },

    priceContainer: {
        flexDirection: "row",
        marginTop: 10

    },

    productImage: {
        width: 140,
        height: 140,
        margin: 16
    },

    //Search Input

    inputContainer: {
        width: "100%",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        marginVertical: 12.5,
        paddingVertical: 10
    },

    searchInput: {
        width: "90%",
        borderBottomColor: colors.borderGray,
        borderBottomWidth: 0.5,
        padding: 10
    },

    //Product Details

    detailsContainer: {
        backgroundColor: colors.white,
        padding: 20
    },

    detailCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        justifyContent: "space-around",
        padding: 20

    },

    productImageContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.lightGray,
        alignItems: "center",
        borderRadius: 20
    },
    goBackContainer: {
        width: 290,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 10
    },

    productImageDetails: {
        width: 220,
        height: 220
    },

    scrollTextContainer: {
        marginVertical: 15,
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.lightGray
    },

    //Login Page

    LoginCard: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center"
    },

    form: {
        marginVertical: 10
    },

    textInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10
    },

    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25
    },

    toggle: {
        marginLeft: -30
    },

    eyes: {},

    buttonTextContainer: {},

    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    deleteBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.red,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10

    },

    editBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    // Admin Form Products

    formContainer: {
        width: deviceWidth,
        padding: 20
    },

    formCard: {
        width: "100%",
        height: "90%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around"
    },

    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center",


    },

    modalContent: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    modalItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },

    formInput: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15
    },

    formArea: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.mediumGray,
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
    },

    selectInput: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
    },

    uploadBtn: {
        width: "100%",
        height: 40,
        backgroundColor: colors.mediumGray,
        borderRadius: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center"
    },

    saveButton: {
        width: "48%",
        height: 40,
        backgroundColor: colors.primary,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    loading: {
        padding: 10
    }

});

const nav = StyleSheet.create({
    leftText: {
        color: colors.white,
        fontWeight: "bold" as "bold",
        marginLeft: 10,
        fontSize: 20
    },

    drawer: {
        marginRight: 10
    },

    options: {
        width: deviceWidth,
        height: 120,
        backgroundColor: colors.primary,
        marginTop: 125,
        marginRight: -30,
        padding: 20,
        justifyContent: "space-between"
    },

    option: {
        paddingVertical: 5
    },

    textOption: {
        color: colors.white,
        textTransform: "uppercase"
    },

    textActive: {
        fontWeight: "bold"
    },

    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

})

const tabbar = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 80,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    pill: {
        padding: 15,
        backgroundColor: colors.lightGray,
        borderRadius: 30
    },

    pillActive: {
        backgroundColor: colors.bluePill
    },

    pillText: {
        fontWeight: "bold",
        color: colors.mediumGray
    },

    pillTextActive: {
        color: colors.primary

    }
})

const admin = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
    },

    addButton: {
        width: "100%",
        height: 50,
        backgroundColor: colors.primary,
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"

    }
})

export { colors, theme, text, nav, tabbar, admin };