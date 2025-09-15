<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
            <i class="fas fa-home text-white text-lg"></i>
          </div>
          <h1 class="text-xl font-bold text-primary-600">Bastuana</h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.name === 'Home' }"
          >
            Home
          </router-link>
          
          <div class="relative group">
            <button class="nav-link flex items-center">
              Properties <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="nav-dropdown">
              <router-link to="/properties" class="nav-dropdown-item">
                Properties Standard List
              </router-link>
            </div>
          </div>
          
          <router-link 
            to="/about" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.name === 'About' }"
          >
            About us
          </router-link>
          
          <div class="relative group">
            <button class="nav-link flex items-center">
              Blog <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="nav-dropdown">
              <router-link to="/blog" class="nav-dropdown-item">
                Blog List
              </router-link>
            </div>
          </div>
          
          <router-link 
            to="/contact" 
            class="nav-link"
            :class="{ 'nav-link-active': $route.name === 'Contact' }"
          >
            Contact
          </router-link>
        </div>

        <!-- Action Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <button @click="showSearch = true" class="text-gray-600 hover:text-primary-600 transition-colors">
            <i class="fas fa-search text-xl"></i>
          </button>
          <button class="btn-primary">
            <i class="fas fa-plus mr-2"></i>Add Listing
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-600">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === 'Home' }"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          
          <router-link 
            to="/properties" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === 'Properties' }"
            @click="mobileMenuOpen = false"
          >
            Properties
          </router-link>
          
          <router-link 
            to="/about" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === 'About' }"
            @click="mobileMenuOpen = false"
          >
            About us
          </router-link>
          
          <router-link 
            to="/blog" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === 'Blog' }"
            @click="mobileMenuOpen = false"
          >
            Blog
          </router-link>
          
          <router-link 
            to="/contact" 
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.name === 'Contact' }"
            @click="mobileMenuOpen = false"
          >
            Contact
          </router-link>
          
          <div class="pt-4 border-t border-gray-200">
            <button class="btn-primary w-full">
              <i class="fas fa-plus mr-2"></i>Add Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Search Modal -->
  <div v-if="showSearch" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-gray-800">Search Properties</h2>
        <button @click="showSearch = false" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input 
              type="text" 
              v-model="searchForm.location" 
              placeholder="Enter location"
              class="input-field" 
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select v-model="searchForm.type" class="input-field">
              <option value="">All Types</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <select v-model="searchForm.bedrooms" class="input-field">
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select v-model="searchForm.priceRange" class="input-field">
              <option value="">Any Price</option>
              <option value="0-1000000">Under ৳1M</option>
              <option value="1000000-5000000">৳1M - ৳5M</option>
              <option value="5000000-10000000">৳5M - ৳10M</option>
              <option value="10000000-50000000">৳10M - ৳50M</option>
              <option value="50000000+">Above ৳50M</option>
            </select>
          </div>
        </div>
        
        <div class="flex justify-end space-x-3">
          <button @click="showSearch = false" class="btn-secondary">
            Cancel
          </button>
          <button @click="handleSearch" class="btn-primary">
            <i class="fas fa-search mr-2"></i>Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const showSearch = ref(false)

const searchForm = reactive({
  location: '',
  type: '',
  bedrooms: '',
  priceRange: ''
})

const handleSearch = () => {
  // Navigate to properties page with search parameters
  const query: any = {}
  if (searchForm.location) query.location = searchForm.location
  if (searchForm.type) query.type = searchForm.type
  if (searchForm.bedrooms) query.bedrooms = searchForm.bedrooms
  if (searchForm.priceRange) query.priceRange = searchForm.priceRange
  
  router.push({ name: 'Properties', query })
  showSearch.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium;
}

.nav-link-active {
  @apply text-primary-600;
}

.nav-dropdown {
  @apply absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200;
}

.nav-dropdown-item {
  @apply block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors;
}

.mobile-nav-link {
  @apply text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2;
}

.mobile-nav-link-active {
  @apply text-primary-600;
}
</style>


