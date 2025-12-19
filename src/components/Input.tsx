import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Input = ({
  label,
  error,
  containerClassName,
  className,
  ...props
}: InputProps) => {
  return (
    <View className={twMerge("mb-4", containerClassName)}>
      {label && (
        <Text className="text-gray-700 font-medium mb-1.5">{label}</Text>
      )}
      <TextInput
        className={twMerge(
          "h-12 px-4 rounded-lg bg-white border border-gray-300 text-gray-900",
          "focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        placeholderTextColor="#9ca3af"
        accessibilityLabel={label}
        accessibilityHint={error ? `Erreur: ${error}` : undefined}
        {...props}
      />
      {error && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
};
