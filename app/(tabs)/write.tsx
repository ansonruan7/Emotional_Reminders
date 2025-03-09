import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useCameraPermission, useMicrophonePermission } from "react-native-vision-camera"

const Create = () => {
  const { hasPermission, requestPermission } = useCameraPermission();

  return (
    <SafeAreaView className='bg-primary h-screen'>
      <ScrollView className='items-center justify-center'>
      <TouchableHighlight>
        <View className='bg-buttons p-4'>
          Create
        </View>
      </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create