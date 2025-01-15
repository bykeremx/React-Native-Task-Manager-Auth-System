
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer } from 'react'


const AuthContext = createContext();



const initalState = {
    isLoggedIn: false,
    user: null,
    error: null
}

//create reducer for auth system 

const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                user: action.payload,
                error: null
            }
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                user: null,
                error: null
            }
        case 'ERROR': return {
            isLoggedIn: false,
            user: null,
            error: action.payload
        }
        default:
            return initalState;
    }
}
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initalState)

    const kullaniciVarmi = async () => {
        try {
            const data = await AsyncStorage.getItem('user'); 
            if (data) {
                const userData = JSON.parse(data); 
                dispatch({ type: 'LOGIN', payload: userData.user });
            } else {
                console.log('Kullanıcı Bulunamadı');
                dispatch({ type: 'LOGOUT' });
            }
        } catch (error) {
            console.log('Bir hata oluştu:', error);
            dispatch({ type: 'ERROR', payload: error.message });
        }
    };

    useEffect(() => {
        kullaniciVarmi()
    }, [])
    return (
        <AuthContext.Provider
            value={{
                AuthState: state,
                AuthDispatch: dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
