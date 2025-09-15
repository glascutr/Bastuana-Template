<template>
  <div class="login-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div class="flex justify-center items-center mb-6">
          <div class="h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
            <i class="fas fa-home text-white text-2xl"></i>
          </div>
          <h1 class="text-3xl font-bold text-primary-600">Bastuana</h1>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Sign in to your account</h2>
        <p class="text-gray-600">Access your dashboard and manage your properties</p>
      </div>

      <!-- Login Form -->
      <div class="card p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input-field pl-10"
                placeholder="Enter your email address"
                :class="{ 'border-red-500': errors.email }"
              />
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-lock text-gray-400"></i>
              </div>
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="input-field pl-10 pr-10"
                placeholder="Enter your password"
                :class="{ 'border-red-500': errors.password }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="text-gray-400 hover:text-gray-600"></i>
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember"
                v-model="form.remember"
                type="checkbox"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="button"
              @click="showForgotPassword = true"
              class="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Forgot password?
            </button>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="btn-primary w-full flex justify-center items-center"
          >
            <i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>
            <i v-else class="fas fa-sign-in-alt mr-2"></i>
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>

          <!-- Divider -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-3">
            <button
              type="button"
              @click="loginWithGoogle"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <i class="fab fa-google text-red-500 mr-2"></i>
              Google
            </button>
            <button
              type="button"
              @click="loginWithFacebook"
              class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <i class="fab fa-facebook-f text-blue-600 mr-2"></i>
              Facebook
            </button>
          </div>
        </form>

        <!-- Register Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <router-link to="/register" class="text-primary-600 hover:text-primary-700 font-medium">
              Register here!
            </router-link>
          </p>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center">
        <router-link to="/" class="text-sm text-gray-600 hover:text-primary-600">
          <i class="fas fa-arrow-left mr-1"></i>
          Back to Home
        </router-link>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotPassword" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Reset Password</h2>
          <button @click="showForgotPassword = false" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <form @submit.prevent="handleForgotPassword" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              v-model="forgotPasswordForm.email" 
              required
              class="input-field" 
              placeholder="Enter your email address"
            />
          </div>
          
          <button type="submit" :disabled="isForgotPasswordLoading" class="btn-primary w-full">
            <i v-if="isForgotPasswordLoading" class="fas fa-spinner fa-spin mr-2"></i>
            <i v-else class="fas fa-paper-plane mr-2"></i>
            {{ isForgotPasswordLoading ? 'Sending...' : 'Send Reset Link' }}
          </button>
        </form>
        
        <div class="mt-4 text-center">
          <button @click="showForgotPassword = false; showLogin = true" class="text-sm text-primary-600 hover:text-primary-700">
            Return to Login
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccessMessage" class="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
      <div class="flex items-center">
        <i class="fas fa-check-circle mr-2"></i>
        <span>{{ successMessage }}</span>
        <button @click="showSuccessMessage = false" class="ml-4 text-green-700 hover:text-green-900">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <!-- Error Message -->
    <div v-if="showErrorMessage" class="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-50">
      <div class="flex items-center">
        <i class="fas fa-exclamation-circle mr-2"></i>
        <span>{{ errorMessage }}</span>
        <button @click="showErrorMessage = false" class="ml-4 text-red-700 hover:text-red-900">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showPassword = ref(false)
const showForgotPassword = ref(false)
const isLoading = ref(false)
const isForgotPasswordLoading = ref(false)
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const forgotPasswordForm = reactive({
  email: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email is required'
    return false
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    return false
  }

  if (!form.password) {
    errors.password = 'Password is required'
    return false
  }

  if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
    return false
  }

  return true
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful login
    if (form.email === 'admin@bastuana.com' && form.password === 'password') {
      successMessage.value = 'Login successful! Redirecting...'
      showSuccessMessage.value = true
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: form.email,
        name: 'Admin User',
        role: 'admin'
      }))
      
      // Redirect to dashboard or home
      setTimeout(() => {
        router.push('/')
      }, 1500)
    } else {
      errorMessage.value = 'Invalid email or password'
      showErrorMessage.value = true
    }
  } catch (error) {
    errorMessage.value = 'Login failed. Please try again.'
    showErrorMessage.value = true
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = async () => {
  if (!forgotPasswordForm.email) {
    errorMessage.value = 'Please enter your email address'
    showErrorMessage.value = true
    return
  }

  isForgotPasswordLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    successMessage.value = 'Password reset link sent to your email!'
    showSuccessMessage.value = true
    showForgotPassword.value = false
    forgotPasswordForm.email = ''
  } catch (error) {
    errorMessage.value = 'Failed to send reset link. Please try again.'
    showErrorMessage.value = true
  } finally {
    isForgotPasswordLoading.value = false
  }
}

const loginWithGoogle = () => {
  // Implement Google OAuth
  console.log('Login with Google')
  errorMessage.value = 'Google login not implemented yet'
  showErrorMessage.value = true
}

const loginWithFacebook = () => {
  // Implement Facebook OAuth
  console.log('Login with Facebook')
  errorMessage.value = 'Facebook login not implemented yet'
  showErrorMessage.value = true
}
</script>

<style scoped>
/* Custom styles for the login page */
.login-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Input field focus styles */
.input-field:focus {
  @apply ring-2 ring-primary-500 border-primary-500;
}

/* Button hover effects */
.btn-primary:hover {
  @apply transform translate-y-0.5 shadow-lg;
}

/* Card shadow */
.card {
  @apply shadow-xl;
}

/* Animation for success/error messages */
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fixed.top-4.right-4 {
  animation: slideIn 0.3s ease-out;
}
</style>
