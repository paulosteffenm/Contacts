import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from '../views/Contacts/Contacts';
import ManageContact from '../views/ManageContacts/ManageContact';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManageContact"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="ManageContact" component={ManageContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;