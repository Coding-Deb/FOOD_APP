import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Header() {
    const Route = useRoute()
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', height: 80, width: width - 10, marginTop: 8, marginLeft: 8, marginRight: 8, backgroundColor: '#353935', borderRadius: 30, }}>
          <Image
            source={require('../assets/Food2.jpg')}
            style={{ height: 60, width: 60, borderRadius: 30, margin: 15, }}
          />
          <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
            {Route.params.Name}
          </Text>
          <TouchableOpacity style={{ left: 160, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Ionicons name="cart-outline" size={35} color="white" />
            <View style={{ backgroundColor: 'yellow', borderRadius: 30, height: 28, width: 28, justifyContent: 'center', alignItems: 'center', bottom: 20, right: 7 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', }}>
                0
              </Text>
            </View>
          </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({})