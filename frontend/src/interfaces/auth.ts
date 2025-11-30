export interface SignInRequest {
  email: string
  password: string
}

export interface SignUpRequest {
  email: string
  password: string
  name: string
}

export interface User {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface SigninResponse {
  redirect: boolean
  token: string
  user: User
}

export interface SignupResponse {
  token: string
  user: User
}
