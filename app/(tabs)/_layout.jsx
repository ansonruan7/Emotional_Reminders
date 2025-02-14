import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

// import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
// const home_icon = FontAwesome6.getImageSourceSync('solid', "house-chimney", 20, 'black').then(
//   (source) => this.setState({ image: source })
// );

import home_icon from '../../assets/images/react-logo.png';

const TabIcon = ({ icon, color, name, focused }) => {
  return(
    <View>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs text-white`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          //tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={home_icon}
                color={color}
                name='Home'
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;