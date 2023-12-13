import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Homescreen'; 
import SavingsGoals from './SavingsGoals'; 
import StockRecommendations from './StockRecommendations'; 
import { StyleSheet, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SavingsGoals" component={SavingsGoals} />
          <Stack.Screen name="StockRecommendations" component={StockRecommendations} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#e9ecef', 
  },
  header: {
    backgroundColor: '#007bff', 
  },
  headerTitle: {
    fontWeight: 'bold',
  },
  
});
