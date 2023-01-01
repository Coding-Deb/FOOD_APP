import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/LoginScreen/Food1.jpg')}
          resizeMode='cover'
          style={{ height: height + 20, width: width - 10, top: 5 }}
        />
      </View>
      <View style={{ backgroundColor: '#EC5800', height: 1 / 2.2 * height, width: width, position: 'absolute', borderTopLeftRadius: 20, borderTopRightRadius: 20, bottom: 0, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 25,marginTop:25 }}>
          <Image
            source={require('../assets/Food2.jpg')}
            style={{ height: 80, width: 80, borderRadius: 30, marginRight: 10 }}
          />
          <Text style={{ fontSize: 40, fontWeight: '800', color: 'white', marginLeft: 10 }}>
            Food Plaza
          </Text>
        </View>
        <View style={{ height: 150, width: width - 20, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 1 / 3 * width, height: 65 }} onPress={() => { navigation.navigate('Login') }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#EC5800' }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 1 / 3 * width, height: 65 }} onPress={() => { navigation.navigate('SignIn') }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: '#EC5800' }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: '#FF4433',
    alignItems: 'center',
    justifyContent: 'center',

  },
})