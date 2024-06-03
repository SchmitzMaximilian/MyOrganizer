import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoListe from '../../Layout/ToDoListe';
import Vorratslager from '../../Layout/Vorratslager';
import Blueprint from '../../Layout/Blueprint';
 
const Navbar=()=>{
  const Stack= createStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ToDoListe" screenOptions={{headerShow:true, headerMode:'screen',headerTintColor:'white',headerStyle:{backgroundColor:'rgba(0,15,40,0.95)'}}}/>
    <Stack.Screen name = "ToDoListe"                  component = {ToDoListe} options={{headerShown:true}} />
    <Stack.Screen name = "Vorratslager"                  component = {Vorratslager} options={{headerShown:true}} />
    <Stack.Screen name = "Blueprint"                  component = {Blueprint} options={{headerShown:true}} />
    <Stack.Screen name = "Placeholder"                  component = {Placeholder} options={{headerShown:true}} />
    </NavigationContainer>
  );
}
export default Navbar