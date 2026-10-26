import { Button, View, Text, StyleSheet } from 'react-native';
import {Link, useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen() {
    const router = useRouter();

    const handleLogin = async () => {
        await AsyncStorage.setItem("token","_SAMPLE_234567890#$#$%")
        router.push("/home")
    }

    

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Entrar" onPress={handleLogin}/>
            <Link href="/home">
            <Button title="Home" />
            </Link>

            <Button title="Cadastrar" onPress={() => router.push('/signup')}/>
            
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
});