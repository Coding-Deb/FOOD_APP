import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Api from '../Api/Api';

export default function DetailScreen() {
  const route = useRoute()
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={route.params.img}
          style={{ height: 1 / 3 * height, width: width, }}
        />
        <View style={{ height: 2.2 / 3 * height, width: width + 15, backgroundColor: '#E5E4E2', borderRadius: 30, bottom: 8 }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Text style={{ fontSize: 28, fontWeight: '700', margin: 20,color:'#088F8F' }}>
              {route.params.name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '700', margin: 20,color:'#088F8F' }}>
              {route.params.qty} items available
            </Text>
            
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
            {
              Api.map((item) => {
                return (
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity style={{ height: 100, width: width - 20, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', }}>
                      <Image
                        source={item.Image}
                        style={{ height: 80, width: 80, borderRadius: 30, margin: 15 }}
                      />
                      <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        {item.name}
                      </Text>
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