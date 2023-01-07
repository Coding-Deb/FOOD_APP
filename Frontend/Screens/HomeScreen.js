import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Header from '../Components/Header';

import Api from '../Api/Api';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center' }}>
        <Header />
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
                  <TouchableOpacity style={{ height: 220, width: width - 20, justifyContent: 'center', alignItems: 'center', marginBottom: 7, marginTop: 7 }} onPress={()=>{navigation.navigate('Details',{
                    name: item.name,
                    img: item.Image,
                    qty: item.qty
                  })}}>
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
            <TouchableOpacity style={{ height: 120, width: 1 / 2 * width, justifyContent: 'center', alignItems: 'center', marginTop: 7, marginBottom: 7, marginLeft: 5, marginRight: 5 }}>
              <Image
                source={require('../assets/Meal_By_Time/Breakfast_Image.jpg')}
                style={{ height: 120, width: 1 / 2 * width, borderRadius: 30, opacity: 0.82 }}
              />
              <Text style={{ position: 'absolute', fontSize: 30, fontWeight: '700', color: 'white' }}>
                Breakfast
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 120, width: 1 / 2 * width, justifyContent: 'center', alignItems: 'center', marginTop: 7, marginBottom: 7, marginLeft: 5, marginRight: 10 }}>
              <Image
                source={require('../assets/Meal_By_Time/Breakfast_Image.jpg')}
                style={{ height: 120, width: 1 / 2 * width, borderRadius: 30, opacity: 0.82 }}
              />
              <Text style={{ position: 'absolute', fontSize: 30, fontWeight: '700', color: 'white' }}>
                Lunch
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 120, width: 1 / 2 * width, justifyContent: 'center', alignItems: 'center', marginTop: 7, marginBottom: 7, marginLeft: 5, marginRight: 10 }}>
              <Image
                source={require('../assets/Meal_By_Time/Breakfast_Image.jpg')}
                style={{ height: 120, width: 1 / 2 * width, borderRadius: 30, opacity: 0.82 }}
              />
              <Text style={{ position: 'absolute', fontSize: 30, fontWeight: '700', color: 'white' }}>
                Dinner
              </Text>
            </TouchableOpacity>

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