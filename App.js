import * as React from 'react';
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity, NativeModules } from 'react-native';
//import PipHandler, { usePipModeListener } from 'react-native-pip-android';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateCard from './components/Card';
import Dim from './components/Dim';

const HomeScreen = ({ navigation }) => {
  let secondActivity = NativeModules.SecondActivity;
  const screenWidth = Math.round(useWindowDimensions().width);

  const openNewActivity = () => {
    secondActivity.open();
  }

  return (
    <View style={ styles.container }>
      <CreateCard />
      <CreateCard />
      <TouchableOpacity
        //onPress={() => PipHandler.enterPipMode(300, 300)}
        onPress={() => {
          openNewActivity();
        }}
        style={{ ...styles.box, width: screenWidth }}>
        <Text>Enter PIP mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  // let inPipMode = usePipModeListener();

  // if (inPipMode) {
  //   return (
  //     <View style={styles.pip}>
  //       <Text style={{fontWeight: 'bold'}}>PIP Mode</Text>
  //       <Dim></Dim>
  //     </View>
  //   );
  // }

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
    paddingTop: 5,
    //padding: 10
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    height: 35,
    marginVertical: 1,
    borderRadius: 20,
  },
  pip:
  {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'lightyellow',
  }
});

export default App;
