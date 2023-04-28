import { View, Text, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../store/slice/Auth/authReducer'
import { Button } from 'react-native-paper'


export default () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)

    console.log(user, 'esta pasando')

    const handleLog = () => {
        dispatch(setUser({
            name: 'Huitzitzili',
            username: 'Leon',
            email: 'leon@hotmail.com'
        }))
        Alert.alert('Usario loggeado con satisfaccion')
    }

    const handleLogout = () => {
        dispatch(setUser(false))
        Alert.alert('Usario Cerro Session')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {user ? <Text>Cerrar Sesion</Text> : <Text>Entrar</Text>}

            {
                !user && <Button
                    onPress={() => handleLog()}
                >
                    Log in
                </Button>
            }
            {
                user && <Button

                    onPress={() => handleLogout()}
                >
                    Log Out
                </Button>
            }
        </View>
    )
}


