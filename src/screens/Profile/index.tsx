import { View, Text, Image, ScrollView } from 'react-native'
import { stylesProfile } from '../Profile/styles/styles'

export default () => {



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
                    <View>
                        <Image
                            style={stylesProfile.slideItems}
                            source={require('./assets/img/actividad1.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={stylesProfile.slideItems}
                            source={require('./assets/img/actividad2.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={stylesProfile.slideItems}
                            source={require('./assets/img/actividad3.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={stylesProfile.slideItems}
                            source={require('./assets/img/actividad4.jpg')}
                        />
                    </View>
                    <View>
                        <Image
                            style={stylesProfile.slideItems}
                            source={require('./assets/img/actividad5.jpg')}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}


