import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardUser from './components/CardUser';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo} 
        source={'https://static.vecteezy.com/system/resources/previews/010/071/559/non_2x/barbershop-logo-barber-shop-logo-template-vector.jpg'}/>
        <Text style={styles.textologo}> Oliver Barber </Text>
      </View>

      <View style={styles.box2}>
        <CardUser 
          avatar={'https://i.pinimg.com/236x/83/6b/49/836b4947e51fc7fbdf0d9568112a496a.jpg'}
          name={'Kiko Loureiro'}
          email={'kiko@gmail.com'}
        />
                 
        <CardUser
         avatar={'https://i.pinimg.com/236x/61/84/f8/6184f814c0e45527e449f9a5ba8ad6d4.jpg'}  
         name={'Marcinho Eiras'}
         email={'eiras@gmail.com'}  
         />
         
        <CardUser
            avatar={'https://i.pinimg.com/originals/c8/49/e5/c849e5728aa9f4df9f3994bd69001788.jpg'}
            name={'James Hetfield'}
            email={'hetfield@gmail.com'} 
            />
            
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
       width: 150,
       height: 150,
       borderRadius: 25,
       fontSize:50
   },
   
   textologo:{
    fontSize: 50,
    color: '#5a1717ff',
   },
   
});
