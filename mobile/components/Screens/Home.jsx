import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import useAuthCustom from '../../hooks/useAuthCustom';
import AntDesign from '@expo/vector-icons/AntDesign';

import useTaskCustom from '../../hooks/useTaskCustom';
import ListComponents from '../CustomComponents/ListComponents';
import CustomLoading from '../CustomComponents/CustomLoading';

const Home = ({ navigation }) => {
    const { user ,tikla ,logout} = useAuthCustom();
    const { getTasks, tasks, deleteTask ,loading,completeTask  } = useTaskCustom();


    const handleLogout = async () => {
        await logout();
        if (!user) { // Kullanıcı durumunu kontrol et
            navigation.navigate('Login');
        }
    };
    

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <View style={styles.container}>
            {loading && <CustomLoading />}
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.text}>
                    <Text style={styles.welcomeText}>Welcome</Text>{' '}
                    <Text style={styles.userName}>{user.name}!</Text>
                </Text>
                <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                    <AntDesign name="logout" size={26} color="gray" />
                </TouchableOpacity>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={require('../../assets/images/useLogo.png')} />
                </View>
            </View>

            {/* Task List */}
            <View style={styles.body}>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                        <ListComponents task={item} deleleteFunc={deleteTask} complateFunc={completeTask}/>
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyText}>No tasks available.</Text>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* Footer */}
            <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => navigation.navigate('CreateTask')}
            >
                <AntDesign name="pluscircleo" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10,
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,

    },
    imgContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    body: {
        flex: 1,
        width: '100%',
        marginTop: 10,
    },
    flatListContainer: {
        paddingBottom: 80, // Alt kısımdaki boşluk artırıldı
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 100,
    },
    buttonCreate: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20, // Ekranın altına yerleştirildi
        right: 20,
        elevation: 10,
    },
    emptyText: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    welcomeText: {
        color: 'gray',
        fontWeight: '300',
        fontSize: 20,
    },
    userName: {
        color: 'black',
        fontWeight: '700',
        fontSize: 24,
    },
});
