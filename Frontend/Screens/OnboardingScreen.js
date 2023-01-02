import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingScreen() {
    const navigation = useNavigation()

    const Next = ({ ...props }) => (
        <TouchableOpacity
            {...props}
            style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:130,}}
        >
            <Text style={{fontSize:18,fontWeight:'800',color:'white'}}>
                Next
            </Text>
            <AntDesign name="doubleright" size={24} color="white" style={{ right: 20 }} />
        </TouchableOpacity>
    )

    const Done = ({ ...props }) => (
        <TouchableOpacity
            {...props}
        >
            
            <Ionicons name="checkmark-done-sharp" size={30} color="white" style={{ right:25}} />
        </TouchableOpacity>
    )

    const Skip = ({ ...props }) => (
        <TouchableOpacity
            {...props}
            style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:110,left:8}}
        >
            <Text style={{fontSize:18,fontWeight:'800',color:'white'}}>
                Skip
            </Text>
            <Ionicons name="play-skip-forward" size={24} color="white"  style={{ right:8 }}/>
        </TouchableOpacity>
    )



    return (
        <View style={styles.container}>
            <Onboarding
                onSkip={() => { navigation.navigate('Splash') }}
                onDone={() => { navigation.navigate('Splash') }}
                DoneButtonComponent={Done}
                NextButtonComponent={Next}
                SkipButtonComponent={Skip}
                pages={[
                    {
                        backgroundColor: '#027031',
                        image: <Image source={require('../assets/Pizzal.jpg')} style={{ height: 1 / 2 * height - 20, width: width - 50, borderRadius: 100 }} resizeMode='stretch' />,
                        title: 'Get Foods On Time',
                        subtitle: '',

                    },
                    {
                        backgroundColor: '#027031',
                        image: <Image source={require('../assets/ConnectScreen/FoodDeliver.jpg')} resizeMode='contain' style={{ height: 1 / 2 * height - 20, width: width - 50, borderRadius: 100 }} />,
                        title: 'Fast delivery',
                        subtitle: '',
                    },
                    {
                        backgroundColor: '#027031',
                        image: <Image source={require('../assets/moneyback.jpg')} resizeMode='contain' style={{ height: 1 / 2.2 * height - 20, width: width - 50, borderRadius: 100 }} />,
                        title: 'Full Money Back in 24 Hours (Gurrantee)',
                        subtitle: '',
                    },

                ]}
            />
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