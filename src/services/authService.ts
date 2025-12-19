import { api } from '../utils/api';
import { z } from 'zod';

// Zod Schemas for Type Safety
export const LoginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Min 6 caractères'),
});

export type LoginCredentials = z.infer<typeof LoginSchema>;

export const authService = {
  login: async (credentials: LoginCredentials) => {
    // MOCK: Simulate API Call
    return new Promise<{ token: string; user: { id: string; name: string } }>((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'fake-jwt-token-123456',
          user: { id: '1', name: 'User Test' },
        });
      }, 1000);
    });
    
    // Real implementation:
    // const { data } = await api.post('/auth/login', credentials);
    // return data;
  },

  register: async (credentials: LoginCredentials) => {
     // MOCK
     return new Promise<{ token: string }>((resolve) => {
      setTimeout(() => {
        resolve({ token: 'fake-jwt-token-register' });
      }, 1000);
    });
  },
  
  logout: async () => {
    // await api.post('/auth/logout');
  }
};
