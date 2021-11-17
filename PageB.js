import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    playlist: {
        width: 50,
        height: 50,
    },
    container: {
        paddingTop: 0,
        borderColor: "black",
    },
    tinyLogo: {
        width: 230,
        height: 350,

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
        backgroundColor: "#a9a9a9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#a9a9a9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});


class PageB extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "black", alignItems: 'center' }}>
                        <View style={{ backgroundColor: "black", justifyContent: "center", alignItems: 'center' }}>

                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: ('https://i.pinimg.com/564x/31/9b/4a/319b4a8b1c64a43b7558a0da8d5b4efa.jpg') }} />
                        </View>
                        {/* เพลงที่ 1 */}
                        <TouchableOpacity>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 50, marginVertical: 10 }}
                            >
                                {/* รูปเพลง */}
                                <View>
                                    <Image
                                        style={styles.playlist}
                                        source={require('../data/assets/90.jpg')} />
                                </View>
                                {/* ชื่อเพลง และ ศิลปิน */}
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>MONEY</Text>
                                    <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Lisa</Text>
                                </View>
                                {/* ความยาวของเพลง */}
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: "right" }}>02:48</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* เพลงที่ 2 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/91.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>LALISA</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Lisa</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:20</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 3 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/33.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>THE FEELS</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Twice</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:18</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 4 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/48.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>LIFE GOES ON</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>BTS</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:27</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 5 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/38.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>DUMB DUMB</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Jeon Somi</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>02:29</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 6 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/Nct.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>STICKER</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>NCT 127</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:47</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 7 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/102.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>CELEBRITY</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>IU</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:15</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 8 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/47.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>LOVE SCENARIO</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>iKon</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:29</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 9 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/Ed.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>Overpass Graffiti</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Ed Sheeran</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>03:56</Text>
                            </View>
                        </View>

                        {/* เพลงที่ 10 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex: 1, flexDirection: "row", maxHeight: 100, marginVertical: 10 }}>
                            <View>
                                <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/Faouzia.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20 }}>Puppet</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 14 }}>Faouzia</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 20, textAlign: 'right' }}>02:55</Text>
                            </View>
                        </View>





                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Home')
                            }
                            style={styles.appButtonContainer}
                        >
                            <Text style={styles.appButtonText}>Go Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('PageA')
                            }
                            style={styles.appButtonContainer2}
                        >
                            <Text style={styles.appButtonText}>BACK</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default PageB;

