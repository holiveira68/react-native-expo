import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardUser({avatar, name, email}){
    return (  <View style={styles.card}>
              <Image style={styles.foto} 
              source={avatar}/>
              <View>
                    <Text style={styles.name} >{name}</Text>
                    <Text style={styles.textocard} >{email}</Text>
                  </View>
            </View> 
        
           )
}
    

const styles = StyleSheet.create({
   card:{
        flexDirection:'row',
        padding:20,
        borderColor:'rgba(116, 161, 206, 1)',
        borderWidth:5,
        margin:5,
        borderRadius:10,
        width: 600,
        marginTop:20,
        alignItems:'center',
        gap:15
        
        
   },
   foto:{
    height:150,
    width: 150,
    borderRadius:75,


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