import { defineStore } from 'pinia'

const PASSWORD = "1234"

export const useAuthStore = defineStore('auth',
  {state: () => {
    return {
      authed: false,
    }
  },
  actions: {
    tryPassword(password) {
      if (password == PASSWORD) {
        this.authed = true;
        return true;
      }
      return false;
    },
  }});