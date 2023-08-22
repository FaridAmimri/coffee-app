/** @format */

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'
import { themeColors } from '../theme'
import { categories, coffeeItems } from '../constants'
import Carousel from 'react-native-snap-carousel'
import CoffeeCard from '../components/CoffeeCard'

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(2)

  return (
    <View className='flex-1 relative bg-white'>
      <StatusBar />
      {/* <Image
        source={require('../assets/images/beansBackground1.png')}
        style={{ height: 220 }}
      /> */}

      <SafeAreaView className='flex-1'>
        {/* Avatar and Bell icon */}
        <View className='px-4 flex-row justify-between items-center'>
          <Image
            source={require('../assets/images/avatar.png')}
            className='h-9 w-9 rounded-full'
          />
          <View className='flex-row items-center space-x-2'>
            <MapPinIcon size={25} color={themeColors.bgLight} />
            <Text className='text-base font-semibold'>Paris</Text>
          </View>
          <BellIcon size={27} color='black' />
        </View>

        {/* Search Bar */}
        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]'>
            <TextInput
              placeholder='Search'
              className='flex-1 p-4 font-semibold text-gray-700 '
            />
            <TouchableOpacity
              className='rounded-full p-2'
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color='white' />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View className='px-5 mt-6'>
          <FlatList
            className='overflow-visible'
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700'

              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : 'rgba(0,0,0,0.07)'
                  }}
                  className='p-4 px-5 rounded-full mr-2 shadow'
                >
                  <Text className={'font-semibold ' + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

        {/* Carousel Coffee cards */}
        <View className='mt-16 py-2'>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            loop={true}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.7} // inactive slides opacity
            inactiveSlideScale={0.77} // inactive slides size
            sliderWidth={400} // actual slide width
            itemWidth={260} // card width
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
