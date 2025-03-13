import React from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Welcome to Onni Mobile!</Text>
        <Button title="Register" onPress={() => {/* navigate to register screen */}} />
      </View>
    </SafeAreaView>
  )
}

export default App
