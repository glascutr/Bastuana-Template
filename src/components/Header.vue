<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <!-- Top Bar -->
    <div class="bg-primary-600 text-white py-2">
      <div class="container mx-auto px-4 flex justify-between items-center text-sm">
        <div class="flex items-center space-x-4">
          <span><i class="fas fa-phone mr-1"></i> +880-1322906531, 09666-794949</span>
          <span><i class="fas fa-envelope mr-1"></i> info@bastuana.com</span>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="showLogin = true" class="hover:text-primary-200 transition-colors">
            Login
          </button>
          <button @click="showRegister = true" class="hover:text-primary-200 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
            <i class="fas fa-home text-white text-2xl"></i>
          </div>
          <h1 class="text-2xl font-bold text-primary-600">Bastuana</h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-primary-600 transition-colors">
            Home
          </router-link>
          <div class="relative group">
            <button class="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
              Properties <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/properties" class="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Properties Standard List
              </router-link>
            </div>
          </div>
          <router-link to="/about" class="text-gray-700 hover:text-primary-600 transition-colors">
            About us
          </router-link>
          <div class="relative group">
            <button class="text-gray-700 hover:text-primary-600 transition-colors flex items-center">
              Blog <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <router-link to="/blog" class="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                Blog List
              </router-link>
            </div>
          </div>
          <router-link to="/contact" class="text-gray-700 hover:text-primary-600 transition-colors">
            Contact
          </router-link>
        </div>

        <!-- Add Listing Button -->
        <div class="hidden md:block">
          <button class="btn-primary">
            <i class="fas fa-plus mr-2"></i>Add Listing
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-700">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4 pt-4">
          <router-link to="/" class="text-gray-700 hover:text-primary-600 transition-colors">
            Home
          </router-link>
          <router-link to="/properties" class="text-gray-700 hover:text-primary-600 transition-colors">
            Properties
          </router-link>
          <router-link to="/about" class="text-gray-700 hover:text-primary-600 transition-colors">
            About us
          </router-link>
          <router-link to="/blog" class="text-gray-700 hover:text-primary-600 transition-colors">
            Blog
          </router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-primary-600 transition-colors">
            Contact
          </router-link>
          <button class="btn-primary w-full">
            <i class="fas fa-plus mr-2"></i>Add Listing
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Login Modal -->
  <div v-if="showLogin" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-8 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Login</h2>
        <button @click="showLogin = false" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" v-model="loginForm.email" class="input-field" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" v-model="loginForm.password" class="input-field" required />
        </div>
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input type="checkbox" v-model="loginForm.remember" class="mr-2" />
            <span class="text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" @click="showResetPassword = true; showLogin = false" class="text-sm text-primary-600 hover:text-primary-700">
            Forgot Password?
          </button>
        </div>
        <button type="submit" class="btn-primary w-full">Login</button>
      </form>
      
      <div class="mt-4 text-center">
        <span class="text-sm text-gray-600">Need an account? </span>
        <button @click="showRegister = true; showLogin = false" class="text-sm text-primary-600 hover:text-primary-700">
          Register here!
        </button>
      </div>
    </div>
  </div>

  <!-- Register Modal -->
  <div v-if="showRegister" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-8 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Register</h2>
        <button @click="showRegister = false" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" v-model="registerForm.name" class="input-field" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" v-model="registerForm.email" class="input-field" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input type="tel" v-model="registerForm.phone" class="input-field" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" v-model="registerForm.password" class="input-field" required />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input type="password" v-model="registerForm.confirmPassword" class="input-field" required />
        </div>
        <div class="flex items-center">
          <input type="checkbox" v-model="registerForm.agreeTerms" class="mr-2" required />
          <span class="text-sm text-gray-600">I agree with terms & conditions</span>
        </div>
        <button type="submit" class="btn-primary w-full">Register</button>
      </form>
      
      <div class="mt-4 text-center">
        <span class="text-sm text-gray-600">Already have an account? </span>
        <button @click="showLogin = true; showRegister = false" class="text-sm text-primary-600 hover:text-primary-700">
          Back to Login
        </button>
      </div>
    </div>
  </div>

  <!-- Reset Password Modal -->
  <div v-if="showResetPassword" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-8 w-full max-w-md mx-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">Reset Password</h2>
        <button @click="showResetPassword = false" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <form @submit.prevent="handleResetPassword" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" v-model="resetForm.email" class="input-field" required />
        </div>
        <button type="submit" class="btn-primary w-full">Reset Password</button>
      </form>
      
      <div class="mt-4 text-center">
        <button @click="showLogin = true; showResetPassword = false" class="text-sm text-primary-600 hover:text-primary-700">
          Return to Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const mobileMenuOpen = ref(false)
const showLogin = ref(false)
const showRegister = ref(false)
const showResetPassword = ref(false)

const loginForm = reactive({
  email: '',
  password: '',
  remember: false
})

const registerForm = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const resetForm = reactive({
  email: ''
})

const handleLogin = () => {
  console.log('Login:', loginForm)
  // Handle login logic here
  showLogin.value = false
}

const handleRegister = () => {
  console.log('Register:', registerForm)
  // Handle register logic here
  showRegister.value = false
}

const handleResetPassword = () => {
  console.log('Reset Password:', resetForm)
  // Handle reset password logic here
  showResetPassword.value = false
}
</script>


