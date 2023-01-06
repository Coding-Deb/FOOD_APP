import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', height: 80, width: width - 10, marginTop: 8, marginLeft: 8, marginRight: 8, backgroundColor: '#353935', borderRadius: 30, }}>
          <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
            FOOD PLAZA
          </Text>
          <Image
            source={require('../assets/Food2.jpg')}
            style={{ height: 60, width: 60, borderRadius: 30, margin: 15, left: 40 }}
          />
        </View>
        <View style={{ height: 60, width: width - 20, marginTop:15,justifyContent:'center',padding:6 }}>
          <Text style={{fontSize:20,fontWeight:'800'}}>
            POPULAR CATEGORY
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    // backgroundColor: '#FF4433',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderColor: 'black', borderWidth: 2,

  },
})