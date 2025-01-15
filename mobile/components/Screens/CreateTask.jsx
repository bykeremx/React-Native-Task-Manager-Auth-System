import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomInput from '../CustomComponents/CustomInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomButton from '../CustomComponents/CustomButton';
import useTaskCustom from '../../hooks/useTaskCustom';
import CustomLoading from '../CustomComponents/CustomLoading';
import CustomMessages from '../../components/CustomComponents/MessagesCustom'

const CreateTask = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask, loading, tasks, error } = useTaskCustom();
    const createTaskHandler = async () => {
        const status = await createTask(title, description);
        if (status) {
            navigation.navigate('Home');
            setTitle('');
            setDescription('');
        }
    }

    return (
        <View style={styles.container}>
            {
                loading && <CustomLoading/>
            }
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonLogout}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Ionicons name="return-up-back" size={24} color="black" />
                </TouchableOpacity>

                <Image
                    style={styles.logo}
                    source={require('../../assets/images/useLogo.png')}
                />
            </View>

            {/* Body Section */}
            <View style={styles.body}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/images/createTask.png')}
                    />
                </View>
                <Text style={styles.bodyTitle}>Create Task Now!</Text>
                {
                    error && <CustomMessages status={true} messages={error}></CustomMessages>
                }
                <View style={styles.inputContainer}>
                    <CustomInput title={"Title"}
                        icon={<Ionicons name="create" size={24} color="black" />}
                        placeholder={"Enter task name"}
                        dataValue={title}
                        setdataValue={setTitle}

                    />
                    <CustomInput
                        title={"Content"}
                        icon={<MaterialCommunityIcons name="details" size={24} color="black" />}
                        placeholder={"Enter content"}
                        dataValue={description}
                        setdataValue={setDescription}
                    />
                    <CustomButton
                        title={loading ? "Loading..." : "Create Task"}
                        OnpressFunc={!loading ? createTaskHandler : null} // Sadece yükleme durumu bitince çalıştır
                    />

                </View>
            </View>

            {/* Footer Section */}
        </View>
    );
};

export default CreateTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    body: {
        justifyContent: 'center',
        paddingTop: 100,
        // alignItems: 'center',
    },
    bodyTitle: {
        fontSize: 35,
        fontWeight: '600',
        color: '#333',
        marginLeft: 30,
    },
    buttonLogout: {
        padding: 8,
    },
    buttonCreate: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        justifyContent: "center",
        alignItems: "center",
    }, imgContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250,
        borderRadius: 40,
        marginBottom: 100,
        resizeMode: 'contain',
        marginLeft: 150
    }
});