import { NavigationContainer } from '@react-navigation/native';
const CustomNavigate = ({children}) => {
    return (

        <NavigationContainer>
           {children}
        </NavigationContainer>
    )
}

export default CustomNavigate