/** @format */

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

export default function CartItem({ coffeeItem }) {
  const dispatch = useDispatch()

  const handleDelete = (coffeeItem) => {
    dispatch(removeFromCart(coffeeItem))
  }

  return (
    <View className='flex-row items-center space-x-5 mb-5'>
      <View>
        <Image
          source={coffeeItem.image}
          style={{
            height: 65,
            width: 65,
            shadowColor: themeColors.bgColor,
            shadowRadius: 15,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.8,
            overflow: 'visible'
          }}
        />
      </View>

      <View className='flex-1 space-y-1'>
        <Text
          className='text-base font-bold'
          style={{ color: themeColors.text }}
        >
          {coffeeItem.name}
        </Text>
        <View className='flex-row space-x-1'>
          <Text>{coffeeItem.size}</Text>
          <Text>{(coffeeItem.price * coffeeItem.quantity).toFixed(2)} €</Text>
        </View>
      </View>

      <View className='flex-row items-center space-x-2'>
        <Text className='font-semibold'>Quantity:</Text>
        <Text>{coffeeItem.quantity}</Text>
        <TouchableOpacity onPress={() => handleDelete(coffeeItem)}>
          <XCircleIcon style={{ color: themeColors.bgLight }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
