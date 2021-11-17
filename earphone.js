import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';


class EarPhone extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "black" }}>
                        
                        <View style={{ backgroundColor: "Whitesmke", justifyContent: 'center', alignItems: 'center', }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../data/assets/15.jpg')} />


                            {/* เพลงที่ 1 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                {/* รูปเพลง */}
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/artworks/riptide.jpg')} />
                                </View>
                                {/* ชื่อเพลง และ ศิลปิน */}
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>ผ่าน</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>Slot Machine</Text>
                                </View>
                                {/* ความยาวของเพลง */}
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>04:09</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 2 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/artworks/lights.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>ไม่เป็นไร</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>Lipta feat.urboyTJ</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>04:51</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 3 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/artworks/getlucky.png')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>เพื่อนเลว</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>Lipta</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>03:31</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 4 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/toye1.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>เมะ (kiss by kiss)</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>The TOYS</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>04:02</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 5 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/toye.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>พูดไม่ออก</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>The TOYS</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>03:41</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 6 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/artworks/addictedtoyou.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>เธอไหวค่อยไป</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>KLEAR</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>04:12</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 7 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/60.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>เพื่อนสัมพันธ์</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>HYE</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>03:42</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 8 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/num.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>จม</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>NUM KALA</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>03:46</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 9 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/Samblack.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>ไม่ยินดี</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>Samblack</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>03:53</Text>
                                </View>
                            </View>

                            {/* เพลงที่ 10 */}
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#B4B4B4', width: 300, flex:1, flexDirection:"row", maxHeight:100, marginVertical: 10}}>
                                <View>
                                    <Image
                                    style={styles.playlist}
                                    source={require('../data/assets/53.jpg')} />
                                </View>
                                <View style={{flex : 1,marginLeft:10}}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20}}>พูดไม่ได้</Text>
                                    <Text style={{ color: '#B4B4B4',fontSize: 14}}>POTATO</Text>
                                </View>
                                <View>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff',fontSize: 20,textAlign: 'right'}}>04:51</Text>
                                </View>
                            </View>


                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('Home')
                                }
                                style={styles.appButtonContainer}
                            >
                                <Text style={styles.appButtonText}> BACK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

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
        width: 290,
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
        backgroundColor: "#a9a9a9",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
        marginVertical: 10,
    },
    appButtonContainer2: {
        elevation: 8,
        backgroundColor: "#3498DB",
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

export default EarPhone;