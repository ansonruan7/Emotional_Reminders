import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal!</Text>
      <Text style={styles.text}>Why is this so far up?</Text>
      {/*Button*/}
      <Link style={styles.link} href='/home' asChild>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(113, 110, 104)',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  },
  link: {
    marginHorizontal: 'auto'
  },
  button: {

  }
})