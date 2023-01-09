import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function FoodDetail() {
    const Route = useRoute()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', height: height, width: width }}>
                <View style={{ height: 1 / 3 * height, width: width }} >
                    <Image
                        source={require('../assets/Popular_Food/Pizzal.jpg')}
                        style={{ position: 'absolute', height: 1 / 3 * height, width: width }}
                    />
                    <TouchableOpacity onPress={() => navigation.goBack('Details')}>
                        <AntDesign name="leftcircle" size={40} color="#088F8F" style={{ marginLeft: 20, marginTop: 25, opacity: 0.75, borderRadius: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', height: 2.2 / 3 * height, width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30, bottom: 20 }}>
                    <View style={{ margin: 22 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: '800', color: '#088F8F' }}>
                                {Route.params.name}
                            </Text>
                            {
                                <View style={{ alignItems: 'center', justifyContent: 'center',left:15 }}>
                                    <Ionicons name="md-checkmark-circle" size={30} color={Route.params.itemType == "Veg" ? "green" : "red"} />
                                </View>
                            }
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: '800', color: '#088F8F' }}>
                            Price: {Route.params.price}/-
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: '#088F8F' }}>
                            Description: <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </Text>
                    </View>
                    <View style={{ height: 100, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ height: 70, width: 1 / 2.5 * width, backgroundColor: '#088F8F', marginRight: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 70, width: 1 / 2.5 * width, backgroundColor: '#088F8F', marginLeft: 12, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#088F8F',
        // backgroundColor: '#FF4433',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderColor: 'black', borderWidth: 2,

    },
})