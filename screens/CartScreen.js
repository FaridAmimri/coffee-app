/** @format */

import { View, Dimensions, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('window')

export default function CartScreen() {
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cart)

  return (
    <View className='flex-1'>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        style={{ height: height * 0.8 }}
        className='w-full absolute -top-5 opacity-10'
      />

      <SafeAreaView className='flex-1 space-y-3'>
        <View className='flex-row justify-between items-center p-2'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon
              size={50}
              strokeWidth={1.2}
              color={themeColors.bgLight}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              className='text-base underline'
              style={{ color: themeColors.text }}
            >
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
