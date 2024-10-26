// loginStore.js
import create from 'zustand';

const useAdminStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        set({ user: data.user, isLoggedIn: true, isLoading: false });
      } else {
        set({ error: data.message, isLoading: false });
      }
    } catch {
      set({ error: 'An error occurred during login', isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
  },

  clearError: () => {
    set({ error: null });
  },
}));

export default useAdminStore;