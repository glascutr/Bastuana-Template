<template>
  <div class="properties-page">
    <!-- Page Header -->
    <section class="bg-primary-600 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Properties</h1>
          <p class="text-xl text-primary-100">Find your perfect property from our extensive collection</p>
        </div>
      </div>
    </section>

    <!-- Search and Filters -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Search Properties</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select v-model="filters.type" class="input-field">
                  <option value="">All Types</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select v-model="filters.category" class="input-field">
                  <option value="">All Categories</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                <select v-model="filters.subcategory" class="input-field">
                  <option value="">All Subcategories</option>
                  <option v-if="filters.category === 'Commercial'" value="Building">Building</option>
                  <option v-if="filters.category === 'Commercial'" value="Commercial Land">Commercial Land</option>
                  <option v-if="filters.category === 'Commercial'" value="Industrial Land">Industrial Land</option>
                  <option v-if="filters.category === 'Commercial'" value="Office">Office</option>
                  <option v-if="filters.category === 'Commercial'" value="Shop">Shop</option>
                  <option v-if="filters.category === 'Commercial'" value="Warehouse">Warehouse</option>
                  <option v-if="filters.category === 'Residential'" value="Apartment">Apartment</option>
                  <option v-if="filters.category === 'Residential'" value="Building">Building</option>
                  <option v-if="filters.category === 'Residential'" value="Land">Land</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  v-model="filters.location" 
                  placeholder="Enter location"
                  class="input-field" 
                />
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select v-model="filters.bedrooms" class="input-field">
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <select v-model="filters.bathrooms" class="input-field">
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                <input 
                  type="number" 
                  v-model="filters.minPrice" 
                  placeholder="Min Price"
                  class="input-field" 
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                <input 
                  type="number" 
                  v-model="filters.maxPrice" 
                  placeholder="Max Price"
                  class="input-field" 
                />
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <button @click="clearFilters" class="btn-secondary">
                <i class="fas fa-times mr-2"></i>Clear Filters
              </button>
              <button @click="applyFilters" class="btn-primary">
                <i class="fas fa-search mr-2"></i>Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Properties Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Available Properties</h2>
            <p class="text-gray-600">We found {{ filteredProperties.length }} results</p>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">Sort by:</span>
              <select v-model="sortBy" class="input-field w-auto">
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area-asc">Area: Small to Large</option>
                <option value="area-desc">Area: Large to Small</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            
            <div class="flex items-center space-x-2">
              <button 
                @click="viewMode = 'grid'"
                :class="viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'"
                class="p-2 rounded transition-colors"
              >
                <i class="fas fa-th"></i>
              </button>
              <button 
                @click="viewMode = 'list'"
                :class="viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'"
                class="p-2 rounded transition-colors"
              >
                <i class="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Properties Grid/List -->
        <div v-if="filteredProperties.length > 0" :class="viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'">
          <div 
            v-for="property in paginatedProperties" 
            :key="property.id"
            :class="viewMode === 'grid' ? 'card overflow-hidden hover:shadow-lg transition-shadow duration-300' : 'card overflow-hidden hover:shadow-lg transition-shadow duration-300 flex'"
          >
            <div :class="viewMode === 'grid' ? 'relative' : 'relative w-80 flex-shrink-0'">
              <div 
                :class="viewMode === 'grid' ? 'w-full h-64' : 'w-full h-48'"
                class="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
              >
                <div class="text-center text-gray-500">
                  <i class="fas fa-home text-4xl mb-2"></i>
                  <p class="text-sm">{{ property.type }}</p>
                </div>
              </div>
              <div class="absolute top-4 left-4">
                <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ property.type }}
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <button 
                  @click="toggleFavorite(property.id)"
                  :class="favorites.includes(property.id) ? 'text-red-500' : 'text-gray-600'"
                  class="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200"
                >
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
            
            <div :class="viewMode === 'grid' ? 'p-6' : 'p-6 flex-1'">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">{{ property.category }}</span>
                <span class="text-sm text-gray-500">{{ property.subcategory }}</span>
              </div>
              
              <h3 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {{ property.title }}
              </h3>
              
              <p class="text-2xl font-bold text-primary-600 mb-4">
                ৳ {{ property.price.toLocaleString() }}
              </p>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ property.description }}
              </p>
              
              <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div class="flex items-center">
                  <i class="fas fa-bed mr-1"></i>
                  <span>{{ property.bedrooms }}</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-bath mr-1"></i>
                  <span>{{ property.bathrooms }}</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-ruler-combined mr-1"></i>
                  <span>{{ property.area }} ft²</span>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-map-marker-alt mr-1"></i>
                  <span class="truncate">{{ property.location }}</span>
                </div>
              </div>
              
              <div class="flex space-x-2">
                <button 
                  @click="viewProperty(property.id)"
                  class="btn-primary flex-1"
                >
                  View Details
                </button>
                <button 
                  @click="contactAgent(property)"
                  class="btn-secondary"
                >
                  <i class="fas fa-phone mr-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- No Results -->
        <div v-else class="text-center py-16">
          <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
          <h3 class="text-2xl font-semibold text-gray-600 mb-2">No Properties Found</h3>
          <p class="text-gray-500 mb-6">Try adjusting your search criteria or clear the filters</p>
          <button @click="clearFilters" class="btn-primary">
            Clear Filters
          </button>
        </div>
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center mt-12">
          <nav class="flex items-center space-x-2">
            <button 
              @click="currentPage = Math.max(1, currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            
            <button 
              v-for="page in visiblePages" 
              :key="page"
              @click="currentPage = page"
              :class="currentPage === page ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'"
              class="px-3 py-2 rounded-md"
            >
              {{ page }}
            </button>
            
            <button 
              @click="currentPage = Math.min(totalPages, currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { Property, SearchFilters } from '@/types'

const router = useRouter()
const route = useRoute()

const viewMode = ref<'grid' | 'list'>('grid')
const sortBy = ref('newest')
const currentPage = ref(1)
const itemsPerPage = 9
const favorites = ref<number[]>([])

const filters = reactive<SearchFilters>({
  type: '',
  category: '',
  subcategory: '',
  bedrooms: null,
  bathrooms: null,
  minPrice: null,
  maxPrice: null,
  location: ''
})

const properties = ref<Property[]>([
  {
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
    description: 'Stunning Fully Furnished Apartment for Sale in Bashundhara I-Block Discover the perfect blend of luxury, comfort, and convenience in this beautifully ready-to-move apartment.',
    images: ['/images/property1.jpg'],
    features: ['Fully Furnished', 'South Facing', 'Ready to Move'],
    status: 'Available',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Gulshan 1- 2000 Sq.ft – Luxury Apartment',
    price: 30000000,
    location: 'Gulshan 1, Dhaka',
    type: 'Buy',
    category: 'Residential',
    subcategory: 'Apartment',
    bedrooms: 3,
    bathrooms: 4,
    area: 2000,
    description: 'Ready Apartment for Sale in Gulshan 1 – 2,000 Sq. Ft | 3 Bedrooms | Prime Location at a Great Price Own a home in the heart of Dhaka\'s most prestigious neighborhood.',
    images: ['/images/property2.jpg'],
    features: ['Prime Location', 'Luxury Finish', 'Ready to Move'],
    status: 'Available',
    createdAt: '2024-01-10'
  },
  {
    id: 3,
    title: 'Niketan- 2,500 Sq.ft- Ready Apartment',
    price: 28000000,
    location: 'Niketan, Dhaka',
    type: 'Buy',
    category: 'Residential',
    subcategory: 'Apartment',
    bedrooms: 4,
    bathrooms: 4,
    area: 2500,
    description: 'Spacious Ready Apartment for Sale in Niketan – 2,500 Sq. Ft | 4 Bedrooms | South Facing Upgrade to a home that reflects your lifestyle with this beautiful large apartment.',
    images: ['/images/property3.jpg'],
    features: ['South Facing', 'Spacious', '4 Bedrooms'],
    status: 'Available',
    createdAt: '2024-01-08'
  },
  {
    id: 4,
    title: 'Gulshan 1- Ultra Luxury Apartment- 3,443 Sq.ft',
    price: 60000000,
    location: 'Gulshan 1, Dhaka',
    type: 'Buy',
    category: 'Residential',
    subcategory: 'Apartment',
    bedrooms: 3,
    bathrooms: 4,
    area: 3443,
    description: 'Ultra-Luxury Fully Furnished Apartment for Sale in Gulshan 1 – 3,443 Sq. Ft | Modern Design | Premium Location Step into a world of sophistication and elegance.',
    images: ['/images/property4.jpg'],
    features: ['Ultra Luxury', 'Fully Furnished', 'Modern Design'],
    status: 'Available',
    createdAt: '2024-01-05'
  },
  {
    id: 5,
    title: 'Uttara Sector 5- 1,390 Sq.Ft- Almost Ready Apartment',
    price: 12000000,
    location: 'Uttara Sector 5, Dhaka',
    type: 'Buy',
    category: 'Residential',
    subcategory: 'Apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: 1390,
    description: 'Brand New Apartment for Sale in Uttara Sector 5 – 1,390 Sq. Ft | 3 Bedrooms | South Facing Discover your dream home with this brand-new apartment for sale in Uttara.',
    images: ['/images/property5.jpg'],
    features: ['Brand New', 'South Facing', '3 Bedrooms'],
    status: 'Available',
    createdAt: '2024-01-03'
  },
  {
    id: 6,
    title: 'Uttara Sector 7- 2400 Sq.Ft- Furnished Apartment',
    price: 33000000,
    location: 'Uttara Sector 7, Dhaka',
    type: 'Buy',
    category: 'Residential',
    subcategory: 'Apartment',
    bedrooms: 4,
    bathrooms: 4,
    area: 2400,
    description: 'Furnished Apartment for Sale in Uttara Sector 7 – 2,400 Sq. Ft | 4 Bedrooms | South Facing Looking for a luxurious furnished apartment in Uttara Sector 7?',
    images: ['/images/property6.jpg'],
    features: ['Furnished', 'South Facing', '4 Bedrooms'],
    status: 'Available',
    createdAt: '2024-01-01'
  },
  {
    id: 7,
    title: 'Commercial Office Space in Dhanmondi',
    price: 15000000,
    location: 'Dhanmondi, Dhaka',
    type: 'Buy',
    category: 'Commercial',
    subcategory: 'Office',
    bedrooms: 0,
    bathrooms: 2,
    area: 1200,
    description: 'Prime commercial office space in the heart of Dhanmondi. Perfect for business operations with modern amenities.',
    images: ['/images/property7.jpg'],
    features: ['Prime Location', 'Modern Amenities', 'Business Ready'],
    status: 'Available',
    createdAt: '2024-01-20'
  },
  {
    id: 8,
    title: 'Shop Space in New Market',
    price: 8000000,
    location: 'New Market, Dhaka',
    type: 'Rent',
    category: 'Commercial',
    subcategory: 'Shop',
    bedrooms: 0,
    bathrooms: 1,
    area: 800,
    description: 'High-traffic shop space in New Market area. Ideal for retail business with excellent customer footfall.',
    images: ['/images/property8.jpg'],
    features: ['High Traffic', 'Retail Ready', 'Prime Location'],
    status: 'Available',
    createdAt: '2024-01-18'
  },
  {
    id: 9,
    title: 'Warehouse in Tongi Industrial Area',
    price: 20000000,
    location: 'Tongi, Dhaka',
    type: 'Buy',
    category: 'Commercial',
    subcategory: 'Warehouse',
    bedrooms: 0,
    bathrooms: 2,
    area: 5000,
    description: 'Large warehouse space in Tongi Industrial Area. Perfect for storage and distribution operations.',
    images: ['/images/property9.jpg'],
    features: ['Large Space', 'Industrial Area', 'Storage Ready'],
    status: 'Available',
    createdAt: '2024-01-16'
  }
])

const filteredProperties = computed(() => {
  let filtered = properties.value.filter(property => {
    if (filters.type && property.type !== filters.type) return false
    if (filters.category && property.category !== filters.category) return false
    if (filters.subcategory && property.subcategory !== filters.subcategory) return false
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) return false
    if (filters.bathrooms && property.bathrooms !== Number(filters.bathrooms)) return false
    if (filters.minPrice && property.price < filters.minPrice) return false
    if (filters.maxPrice && property.price > filters.maxPrice) return false
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false
    return true
  })

  // Apply sorting
  switch (sortBy.value) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'area-asc':
      filtered.sort((a, b) => a.area - b.area)
      break
    case 'area-desc':
      filtered.sort((a, b) => b.area - a.area)
      break
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'oldest':
      filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      break
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredProperties.value.length / itemsPerPage))

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProperties.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  
  return pages
})

const applyFilters = () => {
  currentPage.value = 1
}

const clearFilters = () => {
  Object.assign(filters, {
    type: '',
    category: '',
    subcategory: '',
    bedrooms: null,
    bathrooms: null,
    minPrice: null,
    maxPrice: null,
    location: ''
  })
  currentPage.value = 1
}

const viewProperty = (id: number) => {
  router.push({ name: 'PropertyDetail', params: { id: id.toString() } })
}

const contactAgent = (property: Property) => {
  // Implement contact agent functionality
  console.log('Contact agent for property:', property.id)
}

const toggleFavorite = (id: number) => {
  const index = favorites.value.indexOf(id)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(id)
  }
}

// Watch for route query changes
watch(() => route.query, (newQuery) => {
  if (newQuery.type) filters.type = newQuery.type as string
  if (newQuery.category) filters.category = newQuery.category as string
  if (newQuery.bedrooms) filters.bedrooms = Number(newQuery.bedrooms)
  if (newQuery.bathrooms) filters.bathrooms = Number(newQuery.bathrooms)
  if (newQuery.location) filters.location = newQuery.location as string
}, { immediate: true })

onMounted(() => {
  // Load favorites from localStorage
  const savedFavorites = localStorage.getItem('property-favorites')
  if (savedFavorites) {
    favorites.value = JSON.parse(savedFavorites)
  }
})

// Save favorites to localStorage
watch(favorites, (newFavorites) => {
  localStorage.setItem('property-favorites', JSON.stringify(newFavorites))
}, { deep: true })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

