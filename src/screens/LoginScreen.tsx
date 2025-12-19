import React from 'react';
import { View, Text, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import { useAuthStore } from '../stores/authStore';
import { authService, LoginSchema, LoginCredentials } from '../services/authService';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoginScreen = () => {
  const login = useAuthStore((state) => state.login);
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginCredentials>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const response = await authService.login(data);
      login(response.token);
    } catch (error) {
      Alert.alert('Erreur', 'Connexion échouée');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center px-6">
      <View className="mb-8">
        <Text className="text-3xl font-bold text-gray-900" accessibilityRole="header">Bienvenue</Text>
        <Text className="text-gray-500 mt-2">Connectez-vous à votre compte</Text>
      </View>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            placeholder="exemple@email.com"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.email?.message}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Mot de passe"
            placeholder="******"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.password?.message}
          />
        )}
      />

      <Button
        title="Se connecter"
        onPress={handleSubmit(onSubmit)}
        isLoading={isSubmitting}
        className="mt-4"
      />

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Pas de compte ? </Text>
        <Link href="/(auth)/register" asChild>
          <Text className="text-blue-600 font-semibold" accessibilityRole="link">S'inscrire</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};
