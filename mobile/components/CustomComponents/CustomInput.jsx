import { TextInput, View, Text, StyleSheet } from 'react-native'

const CustomInput = ({ title, placeholder, customSecureTextEntry, icon ,dataValue ,setdataValue }) => {
    return (
        <View style={styles.container}>
            <View style={styles.TextHeader}>
                {icon || null}
                <Text style={styles.bodyText}>

                    {title}</Text>
            </View>

            <TextInput style={styles.textInputCustom}
                placeholder={placeholder || ''}
                secureTextEntry={customSecureTextEntry}
                value={dataValue}
                onChangeText={dataValue => setdataValue(dataValue)}
            ></TextInput>
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {

    },
    textInputCustom: {
        height: 50,
        width: 300,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 20,
    }, bodyText: {
        fontSize: 15,
        color: '#333',
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },TextHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
        paddingHorizontal: 10

    }
})