import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Form from './src/components/Form.js';
import FormWithFormik from './src/components/FormWithFormik';
import { NativeBaseProvider } from "native-base";



export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Form /> */}
        <FormWithFormik />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
