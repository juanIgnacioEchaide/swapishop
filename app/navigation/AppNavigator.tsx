import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CharactersCatalogueScreen, PlaceholderScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CustomHeader} from '../components';

const Stack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Placeholder: undefined;
  CharacterCatalogue: undefined;
};

export type CharacterCatalogueProps = NativeStackScreenProps<
  RootStackParamList,
  'CharacterCatalogue'
>;

const AppNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  if (!isReady) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Placeholder">
          <Stack.Screen
            name="Placeholder"
            component={PlaceholderScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: CustomHeader,
          headerTintColor: '#333333',
          headerStyle: {
            height: 80,
          },
        }}
        initialRouteName="CharacterCatalogue">
        <Stack.Screen
          name="CharacterCatalogue"
          component={CharactersCatalogueScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
