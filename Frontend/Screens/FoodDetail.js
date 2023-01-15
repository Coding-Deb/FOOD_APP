import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Context from '../Context/context';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function FoodDetail() {
    const Route = useRoute()
    const navigation = useNavigation()

    const [loading, setloading] = useState(true)
    const { counter, Increase, Decrease } = useContext(Context)

    setTimeout(() => {
        setloading(false)
    }, 2000);

    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, opacity: 0.90 }}>
                        <ActivityIndicator size={70} color="white" />
                    </View>
                    :
                    <View style={{ alignItems: 'center', height: height, width: width }}>
                        <View style={{ height: 1 / 3 * height, width: width }} >
                            <Image
                                source={Route.params.img}
                                style={{ position: 'absolute', height: 1 / 3 * height, width: width }}
                                resizeMode="stretch"
                            />
                            <TouchableOpacity onPress={() => navigation.goBack('Details')}>
                                <AntDesign name="leftcircle" size={40} color="#088F8F" style={{ marginLeft: 20, marginTop: 25, opacity: 0.75, borderRadius: 50 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 2.2 / 3 * height, width: width, borderTopLeftRadius: 30, borderTopRightRadius: 30, bottom: 20, justifyContent: 'space-between' }}>
                            <View style={{ margin: 22 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, fontWeight: '800', color: '#088F8F' }}>
                                        {Route.params.name}
                                    </Text>
                                    {
                                        <View style={{ alignItems: 'center', justifyContent: 'center', left: 15 }}>
                                            <Ionicons name="md-checkmark-circle" size={30} color={Route.params.itemType == "Veg" ? "green" : "red"} />
                                        </View>
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 22, fontWeight: '800', color: '#088F8F', marginRight: 5 }}>
                                        Price: {Route.params.price}/-
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                                        <AntDesign name="star" size={24} color="#088F8F" />
                                        <AntDesign name="star" size={24} color="#088F8F" />
                                        <AntDesign name="star" size={24} color="#088F8F" />
                                        <AntDesign name="star" size={24} color="#088F8F" />
                                        <AntDesign name="star" size={24} color="#088F8F" />
                                        <View style={{marginLeft:8,alignItems:'center',justifyContent:'center'}}>
                                            <Text style={{ fontSize: 18, fontWeight: '700', color: '#088F8F', marginRight: 5 }}>
                                                (5/5)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: '800', color: '#088F8F' }}>
                                    Description: <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: '800', color: '#088F8F' }}>
                                    Ingridiants: <Text style={{ fontSize: 18, fontWeight: '600', color: '#000' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Text>
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {
                                    counter === 0 ?
                                        <View style={{ alignItems: 'center', width: width - 20, height: 80, bottom: 70 }}>
                                            <View style={{ width: width, alignItems: 'center' }}>
                                                <Text style={{ fontSize: 25, fontWeight: '600', color: '#088F8F' }}>
                                                    Add Items To Cart
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity style={{ margin: 20 }} onPress={() => { Increase() }}>
                                                    <FontAwesome name="plus-square" size={35} color="#088F8F" />
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 30, fontWeight: '600', color: '#088F8F', margin: 20 }}>
                                                    {counter}
                                                </Text>
                                                <TouchableOpacity style={{ margin: 20 }} onPress={() => { Decrease() }}>
                                                    <FontAwesome name="minus-square" size={35} color="#088F8F" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        :
                                        null
                                }
                            </View>
                            <View style={{ position: 'absolute', bottom: 70, width: width, justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    counter > 0 ?
                                        <TouchableOpacity style={{ height: 120, width: width - 20, backgroundColor: '#088F8F', opacity: 0.89, justifyContent: 'space-between', borderRadius: 20, }}
                                            onPress={() => { navigation.navigate('Cart', { name: Route.params.name }) }}
                                        >
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                                {
                                                    counter === 10 ?
                                                        <Text style={{ fontSize: 27, fontWeight: '700', color: 'white', margin: 20, marginLeft: 30 }}>
                                                            Cart Item : Max
                                                        </Text>
                                                        :
                                                        <Text style={{ fontSize: 27, fontWeight: '700', color: 'white', margin: 20, marginLeft: 30 }}>
                                                            Cart Item : {counter}
                                                        </Text>
                                                }
                                                <Text style={{ fontSize: 27, fontWeight: '700', color: 'white', margin: 20, marginRight: 30 }}>
                                                    {counter * Route.params.price}/-
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', width: width - 20, height: 80, justifyContent: 'center', alignItems: 'center', bottom: 22 }}>
                                                <TouchableOpacity style={{ margin: 20 }} onPress={() => { Increase() }}>
                                                    <FontAwesome name="plus-square" size={35} color="white" />
                                                </TouchableOpacity>
                                                <Text style={{ fontSize: 30, fontWeight: '600', color: 'white', margin: 20 }}>
                                                    {counter}
                                                </Text>
                                                <TouchableOpacity style={{ margin: 20 }} onPress={() => { Decrease() }}>
                                                    <FontAwesome name="minus-square" size={35} color="white" />
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        null
                                }
                            </View>
                        </View>
                    </View>
            }
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