import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import '../../global.css'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Home = () => {
  return (
    <SafeAreaView className='bg-primary h-screen'>
      <ScrollView>
        <Text className=''>Welcome back insert_name</Text>
        <View className='justify-center items-center h-screen'> {/* Holds the cards */}
          <Calendar onDayPress={day => {console.log('selected day', day);}}
            style={styles.calendar}
            theme={{
              calendarBackground: '#5d7f5bcc',
              monthTextColor: '#FFF',
            }}
          />
          <View className='bg-secondary p-4 rounded-xl w-[80%] m-4'>
            <Text>This is a thingy</Text>
          </View>
          <View className='bg-secondary p-4 rounded-xl w-[80%] m-4'>
            <Text>This is a second thingy</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  calendar: {
    height: 400,
    width: 500,
    justifyContent: 'center',
    margin: 'auto',
    paddingRight: 100,
    paddingLeft: 100,
    backgroundColor: "#466044e0"
  }
})

export default Home