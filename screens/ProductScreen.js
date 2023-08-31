/** @format */

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ArrowLeftCircleIcon,
  ShoppingBagIcon
} from 'react-native-heroicons/outline'
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  StarIcon
} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductScreen(props) {
  let item = props.route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(item)
  const [size, setSize] = useState('small')
  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: quantity
      })
    )
    navigation.navigate('Cart')
  }

  return (
    <View className='flex-1'>
      <StatusBar style='light' />
      <Image
        source={require('../assets/images/beansBackground2.png')}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50
        }}
        className='w-full absolute'
      />

      <SafeAreaView className='space-y-3 flex-1'>
        {/* NavBar */}
        <View className='flex-row mx-4 justify-between items-center'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color='white' />
          </TouchableOpacity>

          <TouchableOpacity className='rounded-full border-2 border-white p-2'>
            <HeartIcon size={24} color='white' />
          </TouchableOpacity>
        </View>

        {/* Coffee Image */}
        <View
          className='flex-row justify-center'
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9
          }}
        >
          <Image source={item.image} className='h-60 w-60' />
        </View>

        {/* Stars */}
        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className='flex-row items-center rounded-3xl p-1 px-2 mx-4 space-x-1 w-16 opacity-90'
        >
          <StarIcon size={15} color='white' />
          <Text className='text-base font-semibold text-white'>
            {item.stars}
          </Text>
        </View>

        {/* Price */}
        <View className='flex-row mx-4 justify-between items-center'>
          <Text
            style={{ color: themeColors.text }}
            className='text-3xl font-semibold'
          >
            {item.name}
          </Text>
          <Text
            style={{ color: themeColors.text }}
            className='text-lg font-semibold'
          >
            {item.price} €
          </Text>
        </View>

        {/* Size */}
        <View className='mx-4 space-y-2'>
          <Text
            style={{ color: themeColors.text }}
            className='text-lg font-bold'
          >
            Coffee Size
          </Text>
          <View className='flex-row justify-between'>
            <TouchableOpacity
              onPress={() => setSize('small')}
              className='p-3 px-8 rounded-full'
              style={{
                backgroundColor:
                  size == 'small' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'
              }}
            >
              <Text
                className={size == 'small' ? 'text-white' : 'text-gray-700'}
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize('medium')}
              className='p-3 px-8 rounded-full'
              style={{
                backgroundColor:
                  size == 'medium' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'
              }}
            >
              <Text
                className={size == 'medium' ? 'text-white' : 'text-gray-700'}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize('large')}
              className='p-3 px-8 rounded-full'
              style={{
                backgroundColor:
                  size == 'large' ? themeColors.bgLight : 'rgba(0,0,0,0.07)'
              }}
            >
              <Text
                className={size == 'large' ? 'text-white' : 'text-gray-700'}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Description */}
        <View className='mx-4 space-y-2 h-28'>
          <Text
            style={{ color: themeColors.text }}
            className='text-lg font-bold'
          >
            About
          </Text>
          <Text className='text-gray-600'>{item.desc}</Text>
        </View>

        {/* Volume */}
        <View className='flex-row justify-between items-center mx-4 mb-2'>
          <View className='flex-row items-center space-x-1'>
            <Text className='text-base text-gray-700 font-semibold opacity-60'>
              Volume
            </Text>
            <Text className='text-base text-black font-semibold'>
              {item.volume}
            </Text>
          </View>
          <View className='flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4'>
            <TouchableOpacity onPress={() => handleQuantity('dec')}>
              <MinusIcon size={20} strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text
              style={{ color: themeColors.text }}
              className='font-extrabold text-lg'
            >
              {quantity}
            </Text>
            <TouchableOpacity onPress={() => handleQuantity('inc')}>
              <PlusIcon size={20} strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Buy Button */}
        <View className='flex-row justify-between items-center mx-4'>
          <TouchableOpacity className='p-4 rounded-full border border-gray-400'>
            <ShoppingBagIcon size={30} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className='flex-1 p-5 rounded-full ml-3'
            onPress={() => handleCart()}
          >
            <Text className='text-center text-base font-semibold text-white'>
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
