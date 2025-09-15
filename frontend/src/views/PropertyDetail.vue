<template>
  <div class="property-detail" v-if="property">
    <!-- Property Images -->
    <section class="relative">
      <div class="h-96 md:h-[500px] overflow-hidden">
        <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div class="text-center text-gray-500">
            <i class="fas fa-home text-8xl mb-4"></i>
            <h3 class="text-2xl font-bold">{{ property.title }}</h3>
          </div>
        </div>
      </div>
      
      <!-- Image Navigation -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div class="flex space-x-2">
          <button 
            v-for="(image, index) in property.images" 
            :key="index"
            @click="currentImageIndex = index"
            :class="currentImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'"
            class="w-3 h-3 rounded-full transition-colors duration-200"
          ></button>
        </div>
      </div>
      
      <!-- Back Button -->
      <button 
        @click="$router.go(-1)"
        class="absolute top-4 left-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200"
      >
        <i class="fas fa-arrow-left text-gray-700"></i>
      </button>
      
      <!-- Favorite Button -->
      <button 
        @click="toggleFavorite"
        :class="isFavorite ? 'text-red-500' : 'text-white'"
        class="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full transition-all duration-200"
      >
        <i class="fas fa-heart"></i>
      </button>
    </section>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Property Header -->
          <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
              <div>
                <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ property.type }}
                </span>
                <span class="ml-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {{ property.category }} - {{ property.subcategory }}
                </span>
              </div>
              <div class="text-right">
                <p class="text-3xl font-bold text-primary-600">
                  ৳ {{ property.price.toLocaleString() }}
                </p>
                <p class="text-gray-500">{{ property.location }}</p>
              </div>
            </div>
            
            <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ property.title }}</h1>
            
            <div class="flex items-center space-x-6 text-gray-600">
              <div class="flex items-center">
                <i class="fas fa-bed mr-2"></i>
                <span>{{ property.bedrooms }} Bedrooms</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-bath mr-2"></i>
                <span>{{ property.bathrooms }} Bathrooms</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-ruler-combined mr-2"></i>
                <span>{{ property.area }} ft²</span>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <p class="text-gray-600 leading-relaxed">{{ property.description }}</p>
          </div>

          <!-- Features -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div 
                v-for="feature in property.features" 
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <i class="fas fa-check text-primary-600 mr-2"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Property Images Gallery -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Property Images</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div 
                v-for="(image, index) in property.images" 
                :key="index"
                @click="currentImageIndex = index"
                class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <div class="text-center text-gray-500">
                  <i class="fas fa-home text-3xl mb-2"></i>
                  <p class="text-sm">Image {{ index + 1 }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Contact Agent -->
          <div class="card p-6 mb-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Contact Agent</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-user text-white"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">John Doe</p>
                  <p class="text-sm text-gray-500">Real Estate Agent</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <button class="btn-primary w-full">
                  <i class="fas fa-phone mr-2"></i>Call Now
                </button>
                <button class="btn-secondary w-full">
                  <i class="fas fa-envelope mr-2"></i>Send Message
                </button>
                <button class="btn-secondary w-full">
                  <i class="fas fa-calendar mr-2"></i>Schedule Visit
                </button>
              </div>
            </div>
          </div>

          <!-- Property Details -->
          <div class="card p-6 mb-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Property Details</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Property ID:</span>
                <span class="font-semibold">#{{ property.id }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Type:</span>
                <span class="font-semibold">{{ property.type }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Category:</span>
                <span class="font-semibold">{{ property.category }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Subcategory:</span>
                <span class="font-semibold">{{ property.subcategory }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Bedrooms:</span>
                <span class="font-semibold">{{ property.bedrooms }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Bathrooms:</span>
                <span class="font-semibold">{{ property.bathrooms }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Area:</span>
                <span class="font-semibold">{{ property.area }} ft²</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Status:</span>
                <span class="font-semibold text-green-600">{{ property.status }}</span>
              </div>
            </div>
          </div>

          <!-- Share Property -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Share Property</h3>
            <div class="flex space-x-3">
              <button class="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <i class="fab fa-facebook-f"></i>
              </button>
              <button class="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                <i class="fab fa-twitter"></i>
              </button>
              <button class="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                <i class="fab fa-instagram"></i>
              </button>
              <button class="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Loading State -->
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <i class="fas fa-spinner fa-spin text-4xl text-primary-600 mb-4"></i>
      <p class="text-gray-600">Loading property details...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { Property } from '@/types'

const route = useRoute()
const property = ref<Property | null>(null)
const currentImageIndex = ref(0)
const isFavorite = ref(false)

// Mock property data - in real app, fetch from API
const mockProperty: Property = {
  id: 1,
  title: 'Bashundhara I Block- 2150 Sq.ft- Ready Apartment',
  price: 25000000,
  location: 'Bashundhara I Block, Dhaka',
  type: 'Buy',
  category: 'Residential',
  subcategory: 'Apartment',
  bedrooms: 4,
  bathrooms: 5,
  area: 2150,
  description: 'Stunning Fully Furnished Apartment for Sale in Bashundhara I-Block Discover the perfect blend of luxury, comfort, and convenience in this beautifully ready-to-move apartment. This exceptional property offers modern living with premium amenities and finishes throughout. The apartment features spacious rooms with abundant natural light, high-quality fixtures, and contemporary design elements that create an elegant and comfortable living environment.',
  images: [
    '/images/property1.jpg',
    '/images/property1-2.jpg',
    '/images/property1-3.jpg',
    '/images/property1-4.jpg'
  ],
  features: [
    'Fully Furnished',
    'South Facing',
    'Ready to Move',
    'Modern Kitchen',
    'Marble Flooring',
    'Balcony',
    'Parking Space',
    'Security System',
    'Lift Access',
    'Generator Backup'
  ],
  status: 'Available',
  createdAt: '2024-01-15'
}

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
  // In real app, save to backend
}

onMounted(() => {
  // In real app, fetch property by ID from API
  const propertyId = route.params.id
  property.value = mockProperty
  
  // Check if property is in favorites
  const savedFavorites = localStorage.getItem('property-favorites')
  if (savedFavorites) {
    const favorites = JSON.parse(savedFavorites)
    isFavorite.value = favorites.includes(Number(propertyId))
  }
})
</script>
