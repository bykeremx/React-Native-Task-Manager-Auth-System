import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../CustomComponents/CustomInput'
import CustomButton from '../../CustomComponents/CustomButton'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import useAuthCustom from '../../../hooks/useAuthCustom';
import MessagesCustom from '../../CustomComponents/MessagesCustom';
import CustomLoding from '../../CustomComponents/CustomLoading';
const Login = ({ navigation }) => {
    const { login, error, isLoggedIn, loading } = useAuthCustom();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = async () => {
        const status = await login(email, password);

        if (status) {
            console.log("Yönlendirme Yapılıyor .... ");
            navigation.navigate('Home')
        }
        else {
            console.log("Hatalı Giriş");
            setPassword('');

        }
    }
    return (
        <View style={styles.container}>
            {
                loading && <CustomLoding />
            }
            <View style={styles.header}>
                <Image source={require('../../../assets/images/loginicon.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Login</Text>
                {
                    error && <MessagesCustom status={true} messages={error}></MessagesCustom>
                }
                <CustomInput
                    icon={<MaterialIcons name="email" size={20} color="#34495e" />}
                    title={'Email'}
                    placeholder={'Enter your email'}
                    dataValue={email}
                    setdataValue={setEmail}
                ></CustomInput>
                <CustomInput
                    icon={<Fontisto name="key" size={20} color="#34495e" />}
                    title={'Password'}
                    placeholder={'Enter your Password'}
                    customSecureTextEntry={true}
                    dataValue={password}
                    setdataValue={setPassword}
                ></CustomInput>
                <CustomButton title="login" OnpressFunc={loginHandler}></CustomButton>
                <View style={styles.infoText}>
                    <Text style={styles.notAccaunt}>Don't have an account?</Text>
                    <Text style={styles.sign}
                        onPress={() => navigation.navigate('Register')}
                    > Sign up now</Text>
                </View>


            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Container tüm alanı alacak
        flexDirection: 'column',  // Dikey sıralama
        justifyContent: 'space-between',  // Her bölüm arasında eşit boşluk bırakır
        paddingTop: 30,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: -140,
        color: '#2c3e50',
        fontFamily: 'Poppins-Regular',
    },
    header: {
        flex: 2,  // Ekranın 1/3'ü kadar yer kaplar
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    }, logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: 60,
    },
    body: {
        flex: 5,  // Ekranın 1/3'ü kadar yer kaplar
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,  // Ekranın 1/3'ü kadar yer kaplar
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
    }, infoText: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    }, notAccaunt: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingRight: 5,
        color: '#424949',
    }, sign: {
        color: '#007bff',
        fontWeight: 'bold',
        fontSize: 12,
        textDecorationLine: 'underline',

    }
})
