import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Api from '../Api/Api';
import Context from '../Context/context';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function DetailScreen() {
  const route = useRoute()
  const navigation = useNavigation()
  const { counter, Increase, Decrease } = useContext(Context)
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 1 / 3 * height, width: width }} >
          <Image
            source={route.params.img}
            style={{ position: 'absolute', height: 1 / 3 * height, width: width }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <AntDesign name="leftcircle" size={40} color="#088F8F" style={{ marginLeft: 20, marginTop: 25, opacity: 0.65, borderRadius: 50 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 2.2 / 3 * height, width: width + 15, backgroundColor: '#E5E4E2', borderRadius: 30, bottom: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ fontSize: 28, fontWeight: '700', margin: 20, color: '#088F8F' }}>
              {route.params.name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '700', margin: 20, color: '#088F8F' }}>
              {route.params.qty} items available
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
            {
              Api.map((item) => {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity style={{ height: 100, width: width - 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', }}>
                      <View>
                        <Image
                          source={item.Image}
                          style={{ height: 60, width: 60, borderRadius: 20, margin: 12 }}
                        />
                      </View>
                      <View>
                        <Text style={{color:'#088F8F',fontSize:20,fontWeight:'800'}}>
                          {item.name}
                        </Text>
                        <Text style={{color:'#088F8F',fontSize:15,fontWeight:'800'}}>
                          Price: {item.price}/-
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </ScrollView>
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