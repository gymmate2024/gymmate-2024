import { create } from 'zustand'; // Ensure this import is correct

export const useAdminStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,

  loginAdmin: async (email, password) => {
    // Input validation
    if (!email || !password) {
      return {success: false, message: "Please fill in all fields."}
    }

    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/admin/login', { // Ensure the correct endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        set({ user: data.user, isLoggedIn: true, isLoading: false });
      } else {
        set({ error: data.message || 'Login failed', isLoading: false });
      }
    } catch (error) {
      set({ error: 'An error occurred during login: ' + error.message, isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
  },

  clearError: () => {
    set({ error: null });
  },
}));