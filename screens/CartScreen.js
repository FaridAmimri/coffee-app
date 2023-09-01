/** @format */

import { View, Dimensions, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const { width, height } = Dimensions.get('window')

export default function CartScreen() {
  const navigation = useNavigation()
  const cart = useSelector((state) => state.cart)

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar />
      <Image
        source={require('../assets/images/beansBackground1.png')}
        style={{ height: height * 0.9 }}
        className='w-full absolute -top-5 opacity-10'
      />

      {/* Go Back Button */}
      <View className='flex-row justify-between items-center p-2'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftCircleIcon
            size={50}
            strokeWidth={1.2}
            color={themeColors.bgLight}
          />
        </TouchableOpacity>
      </View>

      {/* Cart Details */}
      <View className='flex-1 mx-5'>
        <View className='flex-row justify-between py-5'>
          <Text className='text-xl' style={{ color: themeColors.bgColor }}>
            Your <Text className='font-bold'>Cart</Text>
          </Text>
          <Text
            className='text-base underline'
            style={{ color: themeColors.text }}
            onPress={() => navigation.navigate('Home')}
          >
            Continue Shopping
          </Text>
        </View>

        <View>
          {cart.products.map((coffeeItem) => (
            <CartItem coffeeItem={coffeeItem} key={coffeeItem.id} />
          ))}
        </View>
      </View>

      {/* Cart Total */}
      <View className='flex-row justify-end mx-5 py-6'>
        <Text className='text-lg'>
          Total price:{' '}
          <Text className='font-bold'>{cart.total.toFixed(2)} €</Text>
        </Text>
      </View>

      {/* Payment Button */}
      <View className='flex-row justify-center mx-5'>
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgLight,
            shadowColor: themeColors.bgLight,
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 15 },
            shadowOpacity: 0.4
          }}
          className='flex-1 p-3 rounded-xl'
        >
          <Text className='text-xl text-center text-white font-bold '>
            Payment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
