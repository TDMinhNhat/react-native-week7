import GettingStartedScreen from "./GettingStarted";
import ToDoScreen from "./ToDoScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "GettingStarted" component={GettingStartedScreen} options={{headerShown: false}}/>
      <Stack.Screen name = "ToDo" component={ToDoScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;