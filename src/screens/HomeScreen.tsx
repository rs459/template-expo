import React from 'react';
import { View, Text } from 'react-native';
import { useAuthStore } from '../stores/authStore';
import { Button } from '../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <SafeAreaView className="flex-1 bg-gray-50 items-center justify-center px-6">
      <Text className="text-2xl font-bold text-gray-900 mb-2">Tableau de bord</Text>
      <Text className="text-gray-600 mb-8 text-center">
        Vous êtes connecté. Votre token est stocké de manière sécurisée.
      </Text>
      
      <Button
        title="Se déconnecter"
        variant="secondary"
        onPress={logout}
        className="w-full"
      />
    </SafeAreaView>
  );
};
