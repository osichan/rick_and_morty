import React from 'react';

import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  EpisodeScreen,
  LocationScreen,
  PersonScreen,
} from './src/screens';
import {
  EPISODE_SCREEN_NAME,
  HOME_SCREEN_NAME,
  LOCATION_SCREEN_NAME,
  PERSON_SCREEN_NAME,
} from './src/utils/constants/navigationNames';
import {
  EPISODE_TEXT,
  LOCATION_TEXT,
  PERSON_TEXT,
} from './src/utils/constants/strings/English';

const App = () => {
  const Stack = createStackNavigator();

  const PersonStack = createStackNavigator<PersonScreenParamListBase>();
  const EpisodeStack = createStackNavigator<EpisodeScreenParamListBase>();
  const LocationStack = createStackNavigator<LocationScreenParamListBase>();

  type PersonScreenParamListBase = {
    PersonScreen: {personId: number};
  };
  type EpisodeScreenParamListBase = {
    EpisodeScreen: {episodeId: number};
  };
  type LocationScreenParamListBase = {
    LocationScreen: {locationUrl: string};
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animationEnabled: false,
            headerTitleAlign: 'center',
          }}
          initialRouteName={HOME_SCREEN_NAME}>
          <Stack.Screen
            name={HOME_SCREEN_NAME}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <EpisodeStack.Screen
            name={EPISODE_SCREEN_NAME}
            component={EpisodeScreen}
            options={{title: EPISODE_TEXT}}
          />
          <LocationStack.Screen
            name={LOCATION_SCREEN_NAME}
            component={LocationScreen}
            options={{title: LOCATION_TEXT}}
          />
          <PersonStack.Screen
            name={PERSON_SCREEN_NAME}
            component={PersonScreen}
            options={{title: PERSON_TEXT}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
