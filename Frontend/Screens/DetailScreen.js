import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Api from '../Api/Api';
import Context from '../Context/context';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function DetailScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const { counter, Increase, Decrease } = useContext(Context)
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      async function getAllData() {
        try {
          const Data = await axios.get('http://192.168.105.210:5000/api/inputdataapi')
          setdata(Data.data)
          setloading(false)
        } catch (error) {
          setloading(false)
          console.log(error);
        }
      }
      getAllData()
    }, 500);

  }, [])

  const loaddata = async () => {
    try {
      const Data = await axios.get("http://192.168.105.210:5000/api/inputdata")
      setdata(Data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loaddata()
  }, [])


  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 1 / 3 * height, width: width }} >
          <Image
            source={route.params.img}
            style={{ position: 'absolute', height: 1 / 3 * height, width: width }}
          />
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <AntDesign name="leftcircle" size={40} color="#088F8F" style={{ marginLeft: 20, marginTop: 25, opacity: 0.75, borderRadius: 50 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 2.2 / 3 * height, width: width + 15, backgroundColor: '#E5E4E2', borderRadius: 30, bottom: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 28, fontWeight: '700', margin: 20, color: '#088F8F' }}>
              {route.params.name}
            </Text>
            <View style={{ alignItems: 'center' }}>
              <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Ionicons name="md-checkmark-circle" size={20} color='green' />
                <Text style={{ color: 'green', fontSize: 15, fontWeight: '700' }}>
                  Veg
                </Text>
              </View>
              <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Ionicons name="md-checkmark-circle" size={20} color='red' />
                <Text style={{ color: 'red', fontSize: 15, fontWeight: '700' }}>
                  Non-Veg
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: '700', margin: 20, color: '#088F8F', right: 5 }}>
              {route.params.qty} items available
            </Text>
            <TouchableOpacity style={{ right: 15 }} onPress={() => loaddata()}>
              <FontAwesome name="refresh" size={30} color="#088F8F" />
            </TouchableOpacity>
          </View>
          {
            loading ?
              <View style={{ justifyContent: 'center', alignItems: 'center', height: 1 / 2.5 * height, width: width }}>
                <ActivityIndicator size={70} color="#088F8F" />
              </View>
              :
              <FlatList
                data={data}
                renderItem={({ item }) => {
                  if (item.type == route.params.name) {
                    return (
                      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>
                        {item.type == route.params.name ?
                          <TouchableOpacity style={{ height: 100, width: width - 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} onPress={() => navigation.navigate('FoodDetail', {
                            name: item.name,
                            price: item.price,
                            itemType: item.itemType
                          })}>
                            <View>
                              <Image
                                source={require('../assets/Popular_Food/Pizzal.jpg')}
                                style={{ height: 70, width: 70, borderRadius: 10, margin: 12 }}
                              />
                            </View>
                            <View>
                              <Text style={{ color: '#088F8F', fontSize: 20, fontWeight: '800' }}>
                                {item.type == route.params.name ? item.name : null}
                              </Text>
                              <Text style={{ color: '#088F8F', fontSize: 15, fontWeight: '800' }}>
                                Price: {item.type == route.params.name ? item.price : null}/-
                              </Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                              <Ionicons name="md-checkmark-circle" size={30} color={item.itemType == "Veg" ? "green" : "red"} />
                            </View>
                          </TouchableOpacity>
                          :
                          null
                        }
                      </View>
                    )

                  }
                }}
              />
          }
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