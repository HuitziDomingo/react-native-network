import { View, Text, Image, ScrollView } from 'react-native'
import { stylesProfile } from '../Profile/styles/styles'


export default () => {
    const imgs = [1, 2, 3, 4, 5]
    const images: any = {
        actividad1: require('./assets/img/actividad1.jpg'),
        actividad2: require('./assets/img/actividad2.jpg'),
        actividad3: require('./assets/img/actividad3.jpg'),
        actividad4: require('./assets/img/actividad4.jpg'),
        actividad5: require('./assets/img/actividad5.jpg'),
    };

    return (
        <>
            <View style={stylesProfile.coverCont}>
                <Image
                    style={stylesProfile.cover}
                    source={require('./assets/img/bg.jpg')}
                />
            </View>
            <View style={stylesProfile.contTitle} >
                <Text style={stylesProfile.title}>Lorem ipsum dolor, sit amet.</Text>
                <ScrollView horizontal>
                    {
                        imgs.map((number, index) => (
                            <View key={index}>
                                <Image
                                    key={index}
                                    source={images[`actividad${number}`]}
                                    style={stylesProfile.slideItems}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
}


