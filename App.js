import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [cont, setCont] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // setTimeout(() => {
      setLoading(!loading);
    // }, 1000);

  }, [cont]);

  return (
    <View style={styles.container}>
      <Text onPress={()=> setCont(cont+1)} >{loading ? "Cargando" : cont + "!"}</Text>
    </View>
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
