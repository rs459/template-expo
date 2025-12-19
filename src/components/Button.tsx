import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  onPress,
  title,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  className,
}: ButtonProps) => {
  const baseStyle = "h-12 rounded-lg items-center justify-center flex-row px-4";
  
  const variants = {
    primary: "bg-blue-600 active:bg-blue-700",
    secondary: "bg-gray-200 active:bg-gray-300",
    outline: "border border-gray-300 bg-transparent active:bg-gray-50",
  };

  const textVariants = {
    primary: "text-white font-semibold text-base",
    secondary: "text-gray-900 font-semibold text-base",
    outline: "text-gray-700 font-semibold text-base",
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      className={twMerge(
        baseStyle,
        variants[variant],
        (disabled || isLoading) && "opacity-50",
        className
      )}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : 'black'} className="mr-2" />
      ) : null}
      <Text className={textVariants[variant]}>{title}</Text>
    </TouchableOpacity>
  );
};
