import { Button, View, Text, StyleSheet } from 'react-native';
import {useRouter} from 'expo-router';

export default function LoadingScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            
            
            <Button title="Perfil" onPress={() => router.push('/profile')}/>
            
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