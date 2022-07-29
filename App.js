import * as React from 'react';
import { StyleSheet, Button, View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import PipHandler, { usePipModeListener } from 'react-native-pip-android';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => PipHandler.enterPipMode(300, 214)}
        style={styles.box}>
        <Text>Enter PIP mode</Text>
      </TouchableOpacity>
      <Card></Card>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  let inPipMode = usePipModeListener();

  if (inPipMode) {
    return (
      <View style={styles.container}>
        <Text>PIP Mode</Text>
        <Card></Card>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: 150,
    height: 40,
    marginVertical: 10,
    color: 'white',
    borderRadius: 30,
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
  },
});

export const Card = () => {
  const screenWidth = Math.round(useWindowDimensions().width);
  const screenHeight = Math.round(useWindowDimensions().height);
  console.log(`Width: ${screenWidth}********************`);
  console.log(`Height: ${screenHeight}********************`);

  return (
    <View>
      <Text>
        W: {screenWidth}
      </Text>
      <Text>
        H: {screenHeight}
      </Text>
    </View>
  );
};

export default App;
