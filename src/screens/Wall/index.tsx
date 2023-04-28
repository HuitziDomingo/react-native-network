import { View, Text } from 'react-native'
import { styles } from './styles/styles';


export default () => {

    return (
        <View style={ styles.center }>
            <Text style={styles.red}>El muro</Text>
        </View>
    )
}