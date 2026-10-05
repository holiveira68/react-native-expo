import { Button, View, Text, StyleSheet } from 'react-native';
import {useRouter} from 'expo-router';

export default function LoadingScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            
            
            <Button title="Sair (Login)" onPress={() => router.push('/login')}/>
            
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