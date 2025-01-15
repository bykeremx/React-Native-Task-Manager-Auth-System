import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../CustomComponents/CustomInput'
import CustomButton from '../../CustomComponents/CustomButton'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import useAuthCustom from '../../../hooks/useAuthCustom';
import CustomLoading from '../../CustomComponents/CustomLoading';
import MessagesCustom from '../../CustomComponents/MessagesCustom';
const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, loading, error } = useAuthCustom();
    const registerHandler = async () => {
        const status = await register(name, email, password);
        if (status) {
            navigation.navigate('Login');
        }
    }
    return (
        <View style={styles.container}>
            {
                loading && <CustomLoading />
            }
            <View style={styles.header}>
                <Image source={require('../../../assets/images/registericon.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.body}>

                <Text style={styles.title}>
                    <AntDesign name="forward" size={40} color="gray" />
                    <Text style={styles.subtitle}>Register</Text>
                </Text>
                {
                    error && <MessagesCustom status={true} messages={error} />
                }
                <CustomInput
                    icon={<Entypo name="user" size={24} color="#34495e" />}
                    title={'Name'}
                    dataValue={name}
                    setdataValue={setName}
                    placeholder={'Enter your name'}
                ></CustomInput>
                <CustomInput
                    icon={<MaterialIcons name="email" size={20} color="#34495e" />}
                    title={'Email'}
                    dataValue={email}
                    setdataValue={setEmail}
                    placeholder={'Enter your email'}
                ></CustomInput>
                <CustomInput
                    icon={<Fontisto name="key" size={20} color="#34495e" />}
                    title={'Password'}
                    placeholder={'Enter your Password'}
                    dataValue={password}
                    setdataValue={setPassword}
                    customSecureTextEntry={true}
                ></CustomInput>
                <CustomButton title="Register"
                    OnpressFunc={registerHandler}
                ></CustomButton>
                <View style={styles.infoText}>
                    <Text style={styles.notAccaunt}>Do you have an account?</Text>
                    <Text style={styles.sign}
                        onPress={() => navigation.navigate('Login')}
                    > Log in now!</Text>
                </View>
            </View>
        </View>
    )
}
export default Register

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
        marginLeft: -90,
        color: '#2c3e50',
        fontFamily: 'Poppins-Regular',
        flexDirection: 'row',
    },
    subtitle: {
        marginLeft: 30,
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
