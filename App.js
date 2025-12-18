import React from 'react';
import { ScrollView, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screen1 = ({ navigation: { navigate } }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={{ flexGrow: 1, padding: 8, backgroundColor: 'white' }}
  >
    <Text style={{ fontSize: 26, textAlign: 'center' }}>With headerShown true</Text>
    <Pressable
      onPress={() => navigate('Screen2')}
      style={{ marginTop: 20, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, backgroundColor: 'green' }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>Go Screen2</Text>
    </Pressable>

    <Text style={{ position: 'absolute', bottom: 20, fontSize: 40, alignSelf: 'center' }}>↓</Text>
  </ScrollView>
)

const Screen2 = ({ navigation: { navigate } }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={{ flexGrow: 1, padding: 8, backgroundColor: 'green' }}
  >
    <Text style={{ fontSize: 26, textAlign: 'center', color: 'white' }}>With headerShown false</Text>
    <Pressable
      onPress={() => navigate('Screen3')}
      style={{ marginTop: 20, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, backgroundColor: 'red' }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>Go Screen3</Text>
    </Pressable>
    <Text style={{ position: 'absolute', bottom: 20, fontSize: 40, alignSelf: 'center', color: 'white' }}>↓</Text>
  </ScrollView>
)

const Screen3 = () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={{ flexGrow: 1, padding: 8, backgroundColor: 'red' }}
  >
    <Text style={{ fontSize: 26, textAlign: 'center', color: 'white' }}>With headerShown true</Text>
    <Text style={{ position: 'absolute', bottom: 20, fontSize: 40, alignSelf: 'center', color: 'white' }}>↓</Text>
  </ScrollView>
)

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      animation: 'slide_from_right',
      headerTitleStyle: { fontSize: 18 }
    }}
  >
    <Stack.Screen
      name='Screen1'
      component={Screen1}
      options={{ title: 'Screen1' }}
    />
    <Stack.Screen
      name='Screen2'
      component={Screen2}
      options={{
        title: 'Screen2',
        headerShown: false
      }}
    />
    <Stack.Screen
      name='Screen3'
      component={Screen3}
      options={{ title: 'Screen3' }}
    />
  </Stack.Navigator>
)

export default () => {

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}