import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function BuyScreen() {
    const Route = useRoute()
  return (
    <View>
      <Text>{Route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})