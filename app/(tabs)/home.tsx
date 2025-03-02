import { View, Text } from 'react-native'
import React from 'react'
import '../../global.css'

const Home = () => {
  return (
    <View className='bg-primary h-screen'>
      <Text className=''>Welcome back insert_name</Text>
      <View className='justify-center items-center h-screen'> {/* Holds the cards */}
        <View className='bg-secondary p-4 rounded-xl w-[80%] m-4'>
          <Text>This is a thingy</Text>
        </View>
        <View className='bg-secondary p-4 rounded-xl w-[80%] m-4'>
          <Text>This is a second thingy</Text>
        </View>
      </View>
    </View>
  )
}

export default Home