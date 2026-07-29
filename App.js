import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de App com Expo na Web!</Text>
      <Text>Novo texto</Text>
      <StatusBar style="auto" />
      <View style={styles.caixa}>
        <Text>Outra View</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa:{
    backgroundColor: 'Yellow',
    alignItems:'center',
    justifyContent:'bottom',
  },
});
