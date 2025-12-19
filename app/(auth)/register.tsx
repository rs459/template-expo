import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Text className="text-xl font-bold">Inscription</Text>
      <Text className="my-4 text-gray-500">Formulaire d'inscription à implémenter...</Text>
      <Link href="/login" className="text-blue-600 font-semibold">
        Retour à la connexion
      </Link>
    </SafeAreaView>
  );
}
