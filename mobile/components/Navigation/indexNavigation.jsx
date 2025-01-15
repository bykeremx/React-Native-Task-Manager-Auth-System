import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigate from './CustomNavigate';

//import Screens 
import LoginScreen from '../Screens/Auth/Login';
import RegisterPage from '../Screens/Auth/Register';
import Home from '../Screens/Home';
import useAuthCustom from '../../hooks/useAuthCustom';
import CreateTask from '../Screens/CreateTask';
const Stack = createNativeStackNavigator();
const indexNavigation = () => {
    const { isLoggedIn } = useAuthCustom();

    return (
        <CustomNavigate>
            <Stack.Navigator
                initialRouteName={isLoggedIn ? 'Home' : 'Login'} // Başlangıç ekranı isLoggedIn durumuna göre belirlenir.
            >
                {/* Eğer kullanıcı giriş yapmamışsa Login ve Register ekranlarını göster */}
                {!isLoggedIn && (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterPage}
                            options={{ headerShown: false }}
                        />
                    </>
                )}

                {/* Kullanıcı giriş yapmışsa Home ekranını göster */}
                {isLoggedIn && (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }} // Home ekranının header'ı varsa göster
                        />
                        <Stack.Screen
                            name="CreateTask"
                            component={CreateTask}
                            options={{ headerShown: false }} // Home ekranının header'ı varsa göster
                        />
                    </>
                )}
            </Stack.Navigator>
        </CustomNavigate>
    );
};

export default indexNavigation;
