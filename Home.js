import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';



const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
        backgroundColor: "black",
    },
    tinyLogo: {
        width: 395,
        height: 380,

    },
    //หน้าจอเลื่อนได้
    scrollView: {
        backgroundColor: 'black',
    },
    //สีปุ่ม Page A
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#a9a9a9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    //สีปุ่ม Page B
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#000000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    // ตัวอักษรข้างในปุ่ม
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

});


class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container} >

                        <Image
                            style={styles.tinyLogo}
                            source={require('../data/assets/94.jpg')} />
                        <View style={{ backgroundColor: "black", justifyContent: 'center' }} />

                        <View style={{ backgroundColor: "black", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 40, fontWeight: '400', color: '#00bfff',textShadowColor:'#fff',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> BURN  IN </Text>
                            <Text style={{ fontSize: 40, fontWeight: '400', color: '#0000ff',textShadowColor:'#87ceeb',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> HEADPHONE </Text>
                            <Text style={{ fontSize: 40, fontWeight: '400', color: '#00008b',textShadowColor:'#1e90ff',textShadowOffset:{width: 5, height: 5},textShadowRadius:10, }}> EARPHONE </Text>
                            <Text style={{ backgroundColor: "black", fontSize: 10, fontWeight: '400', color: '#fff' }}> </Text>
                            <Text style={{ backgroundColor: "black", fontSize: 10, fontWeight: '400', color: '#fff' }}> </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('PageA')
                                }
                                style={styles.appButtonContainer}
                            >
                                <Text style={styles.appButtonText}> NEXT </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('PageB')
                                }
                                style={styles.appButtonContainer2}
                            >
                                <Text style={styles.appButtonText}>Go Page B</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default Home;

