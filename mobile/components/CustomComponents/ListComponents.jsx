import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const ListComponents = ({ task, deleleteFunc, complateFunc }) => {
    const dateString = (date) => {
        return new Date(date).toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'UTC',
        })
    }
    return (
        <>
            <View style={styles.taskButtonContainer}>

                {
                    task.status === "active" ?  <>
                        <TouchableOpacity style={styles.completeButton}
                            onPress={() => complateFunc(task._id)}
                        >
                            <Entypo name="check" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton}
                            onPress={() => deleleteFunc(task._id)}
                        >
                            <Entypo name="trash" size={24} color="white" />
                        </TouchableOpacity>

                    </> :
                    <>
                    <TouchableOpacity style={styles.deleteButton}
                            onPress={() => deleleteFunc(task._id)}
                        >
                            <Entypo name="trash" size={24} color="white" />
                        </TouchableOpacity>
                    </>

                } 
            </View>
            <View style={
                task.status === 'active' ? styles.TaskContainer : styles.complateContainer
            } key={task.id}>
                <View style={styles.taskImg}>
                    <Image style={styles.imgs} source={require('../../assets/images/Tasks.png')} />
                </View>
                <View style={styles.taskContent}>
                    <View style={styles.taskTitleContainer}>
                        <Entypo name="text" size={18} color="gray" />
                        <Text style={task.status == "active" ? styles.taskText : styles.textUstuCizili}>{task.title}</Text>
                    </View>
                    <View style={styles.taskQuoteContainer}>
                        <FontAwesome name="quote-left" size={15} color="gray" />
                        <Text style={task.status == "active" ? styles.taskCount : styles.tasCountUnderline}>{task.content}</Text>
                    </View>
                    <View style={styles.taskDateContainer}>
                        <FontAwesome5 name="clock" size={14} color="gray" />
                        <Text style={styles.taskDate}>

                            {
                                task.status === "active" ?
                                    dateString(task.createdAt)
                                    :
                                    <Text style={{ color: 'red', }}>Görev Tamamlandı ! </Text>
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default ListComponents;

const styles = StyleSheet.create({
    taskImg: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginBottom: 10,
        marginLeft: 10,
    },
    imgs: {
        width: 80,
        height: 80,
        borderRadius: 25,
        marginLeft: 20,
        marginBottom: 10,
    },
    taskContent: {
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 30,
    },
    taskTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap', // Allows title text to wrap when necessary
    },
    taskText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
        flexShrink: 1, // Allows title to shrink when necessary
    },
    taskQuoteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 5,
    },
    taskCount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
    },
    taskDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 5,
    },
    taskDate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
    },
    TaskContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
    },
    taskButtonContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 120,
        height: 40,
        zIndex: 100,
        paddingHorizontal: 10,
        gap: 10,
    },
    completeButton: {
        padding: 8,
        backgroundColor: '#2ecc71', // Green for "Complete" button
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    deleteButton: {
        padding: 8,
        backgroundColor: '#e74c3c', // Red for "Delete" button
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    textUstuCizili: {
        fontSize: 24,
        fontWeight: '',
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,
        textDecorationLine: 'line-through',
    },
    tasCountUnderline: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 5,
        textDecorationLine: 'line-through',
        fontStyle: 'italic'
    }
    , complateContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        borderWidth: 1,
        borderColor: 'red',
        elevation: 2,
    }
});
