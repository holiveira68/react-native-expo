import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "grey",
            tabBarIconStyle: { size: 24, },
            tabBarStyle: {
                backgroundColor: "#f5f5f5",
                paddingBottom: 10,
                paddingTop: 10,
                height: 70
            }
        }}>
            <Tabs.Screen name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={24} color="black" />
                    )
                }} />

            <Tabs.Screen name="produtos"
                options={{
                    title: "Produtos",
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="shopping-package" size={24} color="black" />
                    )
                }} />
            <Tabs.Screen name="contatos"
                options={{
                    title: "Contatos",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="people-roof" size={24} color="black" />
                    )
                }} />
            <Tabs.Screen name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={24} color="black" />
                    )
                }} />
        </Tabs>
    )
}   
