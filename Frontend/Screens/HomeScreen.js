import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={{
        height: height, width: width, alignItems: 'center'
      }}>
        <View style={{ backgroundColor: 'white' ,width:width-30,alignItems:'center',marginTop:20,height:65,borderRadius:30,justifyContent:'center'}}>
          <Text>
            HomeScreen
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2D2BD',
    // backgroundColor: '#FF4433',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
})