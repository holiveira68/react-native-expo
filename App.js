import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo} 
        source={'https://static.vecteezy.com/system/resources/previews/010/071/559/non_2x/barbershop-logo-barber-shop-logo-template-vector.jpg'}/>
        <Text> Meu App </Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.card}>
          <Image style={styles.foto} source={'https://i.pinimg.com/236x/83/6b/49/836b4947e51fc7fbdf0d9568112a496a.jpg'}/>
          <View>
                <Text style={styles.textocard} > Kiko Loureiro</Text>
                <Text style={styles.textocard} > kiko@gmail.com</Text>
              </View>
        </View>
        
        <View style={styles.card}>
            <Image style={styles.foto} source={'https://i.pinimg.com/236x/61/84/f8/6184f814c0e45527e449f9a5ba8ad6d4.jpg'}/>  
             <View>
                <Text style={styles.textocard} > Marcinho Eiras</Text>
                <Text style={styles.textocard} > eiras@gmail.com</Text>
              </View>
        </View>

        <View style={styles.card}>
             <Image style={styles.foto} source={'https://i.pinimg.com/originals/c8/49/e5/c849e5728aa9f4df9f3994bd69001788.jpg'}/>
              <View>
                <Text style={styles.textocard} > James Hetfield</Text>
                <Text style={styles.textocard} > hetfield@gmail.com</Text>
              </View>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Ocupa toda a tela da view 
      backgroundColor: '#6670f5',
  },
  box:{
      flex: 1,
      backgroundColor: '#cabf87ff',
      padding: 20,
      flexDirection: 'row',
      alignItems:'center',
      gap: 20
  },
  box2:{
    flex: 5,
    backgroundColor: 'rgba(102, 138, 99, 1)',
    alignItems:'center',
    
  },

  logo:{
       width: 100,
       height: 100,
       borderRadius: 25,
   },
   card:{
        flexDirection:'row',
        padding:20,
        borderColor:'rgba(116, 161, 206, 1)',
        borderWidth:5,
        margin:5,
        borderRadius:10,
        width: 600,
        marginTop:20
        
        
   },
   foto:{
    height:150,
    width: 150,
    borderRadius:15,


   }
});
