import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity className={`bg-buttons w-[75%] p-4 rounded-2xl border-[1px] border-solid border-black`}
        onPress={handlePress}
    >
      <Text className='text-white text-lg font-bold text-center justify-center'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton