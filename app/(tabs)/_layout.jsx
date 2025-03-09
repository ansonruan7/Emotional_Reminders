import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import "../../global.css"

// import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
// const home_icon = FontAwesome6.getImageSourceSync('solid', "house-chimney", 20, 'black').then(
//   (source) => this.setState({ image: source })
// );

import home_icon from '../../assets/images/react-logo.png';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const TabIcon = ({ icon, color, name, focused }) => {
  return(
    <View className='items-center justify-center'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={{ width: 30, height: 30}}
      />
      <Text className={`${focused ? 'font-semibold' : 'font-regular'} text-xs text-[#FFFFFF]`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 2,
            borderTopColor: "#232533",
            height: 60
          }
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
        <Tabs.Screen
          name='write'
          options={{
            title: 'Write',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={home_icon}
                color={color}
                name='Write'
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={home_icon}
                color={color}
                name='Profile'
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  )
}

export default TabsLayout;