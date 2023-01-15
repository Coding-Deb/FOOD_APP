import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


import Api from '../Api/Api';
import Context from '../Context/context';
import MealApi from '../Api/MealApi';

export default function HomeScreen() {
  const Route = useRoute()
  const navigation = useNavigation()
  const { counter } = useContext(Context)
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', flexDirection: 'row', height: 80, width: width - 10, marginTop: 8, marginLeft: 8, marginRight: 8, backgroundColor: '#353935', borderRadius: 30, }}>
          <Image
            source={require('../assets/Food2.jpg')}
            style={{ height: 60, width: 60, borderRadius: 30, margin: 15, }}
          />
          <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
            FOOD PLAZA
          </Text>
          <TouchableOpacity style={{ left: 110, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={()=>{
            navigation.navigate('Cart')
          }}>
            <Ionicons name="cart-outline" size={35} color="white" />
            <View style={{ backgroundColor: 'yellow', borderRadius: 30, height: 28, width: 28, justifyContent: 'center', alignItems: 'center', bottom: 20, right: 7 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', }}>
                {counter}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={{ height: 60, width: width - 20, marginTop: 15, justifyContent: 'center', padding: 6, left: 8 }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>
              POPULAR CATEGORY
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
              Api.map((item) => {
                return (
                  <TouchableOpacity style={{ height: 220, width: width - 20, justifyContent: 'center', alignItems: 'center', marginBottom: 7, marginTop: 7 }} onPress={() => {
                    navigation.navigate('Details', {
                      id: item.id,
                      name: item.name,
                      img: item.Image,
                      qty: item.qty
                    })
                  }}>
                    <Image
                      source={item.Image}
                      style={{ height: 220, width: width - 20, borderRadius: 30, opacity: 0.82 }}
                    />
                    <Text style={{ position: 'absolute', fontSize: 30, fontWeight: '700', color: 'white' }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <View style={{ height: 60, width: width - 20, marginTop: 15, justifyContent: 'center', padding: 6, }}>
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white', left: 8 }}>
              OUR MEAL ACCORDING TO TIME
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              MealApi.map((item) => {
                return (
                  <TouchableOpacity style={{ height: 120, width: 1 / 2 * width, justifyContent: 'center', alignItems: 'center', marginTop: 7, marginBottom: 7, marginLeft: 5, marginRight: 5 }} onPress={() => {
                    navigation.navigate('Details', {
                      id: item.id,
                      name: item.name,
                      img: item.Image,
                      qty: item.qty
                    })
                  }}>
                    <Image
                      source={item.Image}
                      style={{ height: 120, width: 1 / 2 * width, borderRadius: 30, opacity: 0.82 }}
                    />
                    <Text style={{ position: 'absolute', fontSize: 30, fontWeight: '700', color: 'white' }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </ScrollView>
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