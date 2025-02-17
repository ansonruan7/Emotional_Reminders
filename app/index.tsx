import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Link } from 'expo-router'

import CustomButton from '../components/CustomButton'

const app = () => {
  return (
    <SafeAreaView className='bg-primary'>
      <ScrollView className="h-[100%]">
        <View className='h-full px-4 items-center justify-center'>
          <Text className='text-white text-6xl'>Hello</Text>
          <CustomButton
            title = "Continue With Email"
            handlePress = {() => {}}
            containerStyles={{}}
            textStyles={{}}
            isLoading={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default app