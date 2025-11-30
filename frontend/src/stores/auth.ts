import { defineStore } from 'pinia'
import { authClient } from '@/lib/auth-client'
import type { SignInRequest, SignUpRequest, User } from '@/interfaces/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    isLoading: false,
    error: null as string | null
  }),

  actions: {
    async signIn(credentials: SignInRequest) {
      this.isLoading = true
      this.error = null
      try {
        const { data, error } = await authClient.signIn.email({
          email: credentials.email,
          password: credentials.password,
        })

        if (error) {
          this.error = error.message || 'Failed to sign in'
          return false
        }

        if (data) {
            this.user = data.user as User
            this.isAuthenticated = true
            return true
        }
        return false
      } catch (e) {
        this.error = 'An unexpected error occurred'
        console.error(e)
        return false
      } finally {
        this.isLoading = false
      }
    },

    async signUp(credentials: SignUpRequest) {
      this.isLoading = true
      this.error = null
      try {
        const { data, error } = await authClient.signUp.email({
          email: credentials.email,
          password: credentials.password,
          name: credentials.name,
        })

        if (error) {
          this.error = error.message || 'Failed to sign up'
          return false
        }

        if (data) {
            this.user = data.user as User
            this.isAuthenticated = true
            return true
        }
        return false
      } catch (e) {
        this.error = 'An unexpected error occurred'
        console.error(e)
        return false
      } finally {
        this.isLoading = false
      }
    },

    async signOut() {
      this.isLoading = true
      try {
          await authClient.signOut()
          this.user = null
          this.isAuthenticated = false
      } catch (error) {
          console.error("Sign out error", error)
      } finally {
          this.isLoading = false
      }
    },

    async fetchSession() {
      this.isLoading = true
      try {
        const { data } = await authClient.getSession()
        if (data) {
          this.user = data.user as User
          this.isAuthenticated = true
        } else {
          this.user = null
          this.isAuthenticated = false
        }
      } catch (e) {
        this.user = null
        this.isAuthenticated = false
      } finally {
        this.isLoading = false
      }
    },

    async signInWithGoogle() {
      this.isLoading = true
      this.error = null
      try {
        const { data, error } = await authClient.signIn.social({
          provider: 'google',
          callbackURL: 'http://localhost:5173',
        })

        if (error) {
          this.error = error.message || 'Failed to sign in with Google'
          return false
        }
        
        return true
      } catch (e) {
        this.error = 'An unexpected error occurred'
        console.error(e)
        return false
      } finally {
        this.isLoading = false
      }
    },
  },
})
