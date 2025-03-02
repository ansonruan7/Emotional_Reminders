import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Link } from 'expo-router'
import '../global.css'

import CustomButton from '../components/CustomButton'

const app = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className="h-[100%]">
        <View className='h-screen px-4 items-center justify-center border-2 border-solid'>
          <Text className='text-white text-6xl font-extrabold my-12'>insert_name</Text>
          <CustomButton
            title = "Continue With Email"
            handlePress = {() => {}}
            containerStyles={{}}
            textStyles={{}}
            isLoading={false}
          />
          <Link href='/(tabs)/home' className='my-2'>Already have an account?</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default app