import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardFlix({avatar, name, canal}){
    return (  <View style={styles.card}>
              <Image style={styles.foto} 
              source={avatar}/>
               <Text style={styles.name} >{name}</Text>
               <Text style={styles.textocard} >{canal}</Text>
              
            </View> 
        
           )
}
    

const styles = StyleSheet.create({
   card:{
        padding:10,
        margin:5,
        borderRadius:10,
        width: '35%',
        marginTop:20,
        alignItems:'center',
        gap:10
   },
   foto:{
    height:350,
    width: '100%',
    maxWidth: 400,
    borderRadius:20,
    borderColor:'rgba(116, 161, 206, 1)',
    borderWidth:5,
   },
   textocard:{
    fontSize: 18,
    color: '#662c2cff',
   },
   
   name:{
    fontSize:20,
    fontWeight:"bold",
    color:'#662c2cff',
    
   
   }
});