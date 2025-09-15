<template>
  <div class="reset-password-page min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div class="flex justify-center items-center mb-6">
          <div class="h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
            <i class="fas fa-home text-white text-2xl"></i>
          </div>
          <h1 class="text-3xl font-bold text-primary-600">Bastuana</h1>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
        <p class="text-gray-600">Enter your email to receive reset instructions</p>
      </div>

      <!-- Reset Password Form -->
      <div class="card p-8">
        <form @submit.prevent="handleResetPassword" class="space-y-6">
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

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="btn-primary w-full flex justify-center items-center"
          >
            <i v-if="isLoading" class="fas fa-spinner fa-spin mr-2"></i>
            <i v-else class="fas fa-paper-plane mr-2"></i>
            {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
          </button>
        </form>

        <!-- Back to Login -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Remember your password?
            <router-link to="/login" class="text-primary-600 hover:text-primary-700 font-medium">
              Sign in here
            </router-link>
          </p>
        </div>
      </div>

      <!-- Instructions -->
      <div class="card p-6 bg-blue-50 border border-blue-200">
        <div class="flex items-start">
          <i class="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
          <div>
            <h3 class="text-sm font-medium text-blue-800 mb-2">What happens next?</h3>
            <ul class="text-sm text-blue-700 space-y-1">
              <li>• We'll send a reset link to your email</li>
              <li>• Click the link to create a new password</li>
              <li>• The link expires in 24 hours for security</li>
            </ul>
          </div>
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

const isLoading = ref(false)
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const form = reactive({
  email: ''
})

const errors = reactive({
  email: ''
})

const validateForm = () => {
  errors.email = ''

  if (!form.email) {
    errors.email = 'Email is required'
    return false
  }

  if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    return false
  }

  return true
}

const handleResetPassword = async () => {
  if (!validateForm()) return

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful reset request
    successMessage.value = 'Password reset link sent to your email! Please check your inbox.'
    showSuccessMessage.value = true
    
    // Reset form
    form.email = ''
    
    // Redirect to login after success
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  } catch (error) {
    errorMessage.value = 'Failed to send reset link. Please try again.'
    showErrorMessage.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Custom styles for the reset password page */
.reset-password-page {
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
