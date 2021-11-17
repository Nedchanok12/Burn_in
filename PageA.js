import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';


class PageA extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "black" }}>
                        

                        <View style={{ backgroundColor: "Whitesmke", justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: ('https://s3.envato.com/files/267269652/gorilla%20121.png') }} />
                            <Text style={{ color: '#00008b', fontSize: 45, marginVertical: 20,textShadowColor:'#fff',textShadowOffset:{width: 5, height: 5},textShadowRadius:10 }}>MENU</Text>
                            
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('EarPhone')
                                }
                                style={styles.appButtonContainer}
                            >
                                <Text style={styles.appButtonText}>Earphone</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#ffc0cb', fontSize: 22, textShadowColor:'#9400d3',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - Around-Ears Headphones  </Text>
                            <Text style={{ color: '#ff00ff', fontSize: 22, textShadowColor:'#0000ff',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - Earbuds  </Text>
                            <Text style={{ color: '#00ffff', fontSize: 22, textShadowColor:'#008000',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - In Ear - </Text>
                            <Text style={{ color: '#7fff00', fontSize: 22, textShadowColor:'#daa520',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - Ear Clips - </Text>
                            <Text style={{ color: '#ffff00', fontSize: 22, textShadowColor:'#ff69b4',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - IEM(In-Ear Monitors) - </Text>
                            <Text style={{ color: '#ffa500', fontSize: 22, textShadowColor:'#ff0000',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> - Custom In-Ear Monitors - </Text>

                           

                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('PageB')
                                }
                                style={styles.appButtonContainer2}
                            >
                                <Text style={styles.appButtonText}>Speaker</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}
// https://tse2.mm.bing.net/th?id=OIP._C_O4GoOELlOneOic5HPNQHaNK&pid=15.1
const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        borderColor: "black",
    },
    tinyLogo: {
        width: 250,
        height: 320,

    },
    logo: {
        width: 50,
        height: 58,
    },
    tinyLogo1: {
        width: 150,
        height: 150,
        left: 0,
        top: 320
    },
    scrollView: {
        backgroundColor: 'black',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ffe4e1",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#fff0f5",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    appButtonText: {
        fontSize: 15,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default PageA;