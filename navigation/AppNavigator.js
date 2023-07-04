import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  //   console.log(insets);
  return (
    // <View style={{ paddingTop: insets.top }}>
    <SafeAreaView>
      <Text style={styles.text}>App Navigator Навигатор</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // fontFamily: 'IBMPlexMono_400Regular',
    fontFamily: 'Regular',
  },
});
