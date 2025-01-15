
//custom hook 
import AuthContext from '../components/Context/AuthProvider'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAuthCustom = () => {
    const [loading, setloading] = useState(false);
    const { AuthState, AuthDispatch } = useContext(AuthContext)
    const { isLoggedIn, user, error } = AuthState
    const login = async (email, password) => {
        setloading(true);
        try {
            const response = await fetch("http://192.168.1.7:3005/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) { // Giriş başarılıysa
                AuthDispatch({
                    type: "LOGIN",
                    payload: data.user
                });
                await AsyncStorage.setItem('user', JSON.stringify(data));
                setloading(false)
                return true;
            } else {
                AuthDispatch({
                    type: "ERROR",
                    payload: data.message
                });
                setloading(false);
                throw new Error(data.message || "Login failed");
            }
        } catch (error) {
            AuthDispatch({
                type: "ERROR",
                payload: error.message
            });
            setloading(false);
            return false; // Başarısız giriş
        }
    };
    //register 
    const register = async (name, email, password) => {
        setloading(true);
        try {
            const response = await fetch("http://192.168.1.7:3005/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await response.json();
            console.log(data);

            if (response.ok) { // Kayıt başarılıysa
                AuthDispatch({
                    type: "LOGIN",
                    payload: data.user
                });
                await AsyncStorage.setItem('user', JSON.stringify(data));
                setloading(false)
                return true;
            } else {
                AuthDispatch({
                    type: "ERROR",
                    payload: data.message
                });
                setloading(false);
                throw new Error(data.message || "Registration failed");
            }
        } catch (error) {
            AuthDispatch({
                type: "ERROR",
                payload: error.message
            });
            setloading(false);
            return false; // Başarısız giriş
        }
    }
    //logout
    const logout = async () => {
        console.log("içine girdi ! ");
        
        setloading(true);
        try {
            await AsyncStorage.removeItem('user');
            AuthDispatch({
                type: "LOGOUT"
            });
        } catch (error) {
            console.log("Logout failed:", error);
        } finally {
            setloading(false);
        }
    };


    const tikla = () => {
        console.log("tıklandi");
    }




    return {
        isLoggedIn,
        user,
        login,
        error,
        loading,
        register,
        logout,
        tikla
    }
}

export default useAuthCustom