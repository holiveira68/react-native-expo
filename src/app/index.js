import { Button, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Link} from 'expo-router';
import {Image} from 'expo-image'; 
import {useEffect} from 'react';
import {useRouter} from 'expo-router';

export default function LoadingScreen() {
const router = useRouter();

useEffect(()=> {
    setTimeout(() => {
        router.replace('/login');
    }, 2000); 
}, []);


    return (
        <View style={styles.container}>
            <Image
               style={styles.logo}
                source={require("../../assets/IFFlix.png")}
               
            />
            <Text>IFFlix</Text>
            <ActivityIndicator size="large" color="#000000"/>
             <Text>Carregando...</Text>
            <Link href="/login" asChild>
                <Button title="Login" />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        gap: 20
    },
    logo:{
        width:100,
        height:100,
        borderRadius:25,
        
    }
});