import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    // <View style={{ paddingTop: insets.top }}>
    <View>
      {/* <SafeAreaView> */}
      <Text>AppNavigator</Text>
      <StatusBar style="auto" />
      {/* </SafeAreaView> */}
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
