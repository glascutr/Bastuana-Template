<template>
  <div class="home">
    <!-- Hero Slider -->
    <section class="relative h-screen">
      <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      <div class="relative z-20 h-full flex items-center">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl">
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Home
            </h1>
            <p class="text-xl text-gray-200 mb-8 max-w-2xl">
              Discover the perfect blend of luxury, comfort, and convenience in our premium real estate listings across Bangladesh.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="btn-primary text-lg px-8 py-4">
                <i class="fas fa-search mr-2"></i>Search Properties
              </button>
              <button class="btn-secondary text-lg px-8 py-4">
                <i class="fas fa-plus mr-2"></i>List Your Property
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Images -->
      <div class="absolute inset-0 overflow-hidden">
        <div 
          class="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center"
        >
          <div class="text-center text-white">
            <i class="fas fa-home text-8xl mb-4 opacity-50"></i>
            <h3 class="text-2xl font-bold">{{ currentSlide.title }}</h3>
          </div>
        </div>
      </div>
      
      <!-- Slider Controls -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div class="flex space-x-2">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="currentSlideIndex = index"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentSlideIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'"
          ></button>
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Find Your Perfect Property</h2>
          
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select v-model="searchFilters.type" class="input-field">
                  <option value="">Types</option>
                  <option value="Buy">Buy</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <select v-model="searchFilters.category" class="input-field">
                  <option value="">Categories</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                <select v-model="searchFilters.rooms" class="input-field">
                  <option value="">Rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select v-model="searchFilters.bedrooms" class="input-field">
                  <option value="">Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <select v-model="searchFilters.bathrooms" class="input-field">
                  <option value="">Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6+">6+</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select v-model="searchFilters.priceRange" class="input-field">
                  <option value="">Price range</option>
                  <option value="0-1000000">৳ 1,000,000 - ৳ 5,000,000</option>
                  <option value="5000000-10000000">৳ 5,000,000 - ৳ 10,000,000</option>
                  <option value="10000000-50000000">৳ 10,000,000 - ৳ 50,000,000</option>
                  <option value="50000000+">Above ৳ 50,000,000</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  v-model="searchFilters.location" 
                  placeholder="Enter location"
                  class="input-field" 
                />
              </div>
              
              <div class="flex items-end">
                <button @click="handleSearch" class="btn-primary w-full">
                  <i class="fas fa-search mr-2"></i>Search
                </button>
              </div>
            </div>
            
            <div class="text-center">
              <button class="text-primary-600 hover:text-primary-700 font-medium">
                More Search Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Available Properties -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Available Apartments</h2>
          <p class="text-gray-600">We found {{ filteredProperties.length }} results</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="property in filteredProperties.slice(0, 6)" 
            :key="property.id"
            class="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div class="relative">
              <div class="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
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
                <button class="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200">
                  <i class="fas fa-heart text-gray-600"></i>
                </button>
              </div>
            </div>
            
            <div class="p-6">
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
              </div>
              
              <button class="btn-primary w-full">
                View Details
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <button class="btn-secondary">
            Load More Listings
          </button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive real estate services to help you buy, sell, or rent properties with confidence.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-home text-primary-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Sell Your Home</h3>
            <p class="text-gray-600">
              Sell properties efficiently with expert guidance on the basis of up-to-date industry trends, pricing strategies and marketing to attract potential buyers.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-search text-primary-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Buy Your Home</h3>
            <p class="text-gray-600">
              Buy homes at fair market value and a hassle-free transaction experience.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-gavel text-primary-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Legal Services</h3>
            <p class="text-gray-600">
              Receive comprehensive legal services throughout the entire real estate transaction process.
            </p>
          </div>
          
          <div class="text-center">
            <div class="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-credit-card text-primary-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Home Loan</h3>
            <p class="text-gray-600">
              Worried about securing the funds for your dream home? Don't be! With the help of our trusted financial partners, obtaining a loan has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
          <p class="text-gray-600">Stay updated with the latest real estate trends and insights</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="post in blogPosts.slice(0, 3)" 
            :key="post.id"
            class="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div class="text-center text-gray-500">
                <i class="fas fa-newspaper text-4xl mb-2"></i>
                <p class="text-sm">Blog Post</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ post.publishedAt }}</span>
                <button class="text-primary-600 hover:text-primary-700 font-medium">
                  Continue reading
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8">
          <button class="btn-secondary">
            Load Articles
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Property, BlogPost, SearchFilters } from '@/types'

const router = useRouter()

const currentSlideIndex = ref(0)

const slides = ref([
  {
    title: 'Sell Your Home',
    description: 'Sell properties efficiently with expert guidance on the basis of up-to-date industry trends, pricing strategies and marketing to attract potential buyers.',
    image: '/images/hero1.jpg'
  },
  {
    title: 'Buy Your Home',
    description: 'Receive comprehensive legal services throughout the entire real estate transaction process.',
    image: '/images/hero2.jpg'
  },
  {
    title: 'Legal Services',
    description: 'Receive comprehensive legal services throughout the entire real estate transaction process.',
    image: '/images/hero3.jpg'
  },
  {
    title: 'Home Loan',
    description: 'Worried about securing the funds for your dream home? Don\'t be! With the help of our trusted financial partners, obtaining a loan has never been easier.',
    image: '/images/hero4.jpg'
  }
])

const currentSlide = computed(() => slides.value[currentSlideIndex.value])

const searchFilters = reactive<SearchFilters>({
  type: '',
  category: '',
  subcategory: '',
  bedrooms: null,
  bathrooms: null,
  minPrice: null,
  maxPrice: null,
  location: '',
  rooms: '',
  priceRange: ''
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
  }
])

const blogPosts = ref<BlogPost[]>([
  {
    id: 1,
    title: 'Understanding the Growth of the Real Estate Market in Bangladesh',
    excerpt: 'The real estate sector in Bangladesh has undergone remarkable evolution, transforming from a fledgling industry to a major economic driver.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'April 18, 2024',
    image: '/images/blog1.jpg',
    tags: ['Real Estate', 'Bangladesh', 'Market Trends']
  },
  {
    id: 2,
    title: 'The Rise of the Real Estate Secondary Market in Bangladesh',
    excerpt: 'Bangladesh, a country experiencing rapid urbanization and economic growth, has witnessed a remarkable transformation in its real estate landscape.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'June 30, 2021',
    image: '/images/blog2.jpg',
    tags: ['Secondary Market', 'Urbanization', 'Growth']
  },
  {
    id: 3,
    title: 'Navigating Bangladesh\'s Real Estate Market',
    excerpt: 'The real estate secondary market in Bangladesh offers a wealth of opportunities for both buyers and sellers.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'March 4, 2016',
    image: '/images/blog3.jpg',
    tags: ['Market Navigation', 'Opportunities', 'Investment']
  }
])

const filteredProperties = computed(() => {
  return properties.value.filter(property => {
    if (searchFilters.type && property.type !== searchFilters.type) return false
    if (searchFilters.category && property.category !== searchFilters.category) return false
    if (searchFilters.bedrooms && property.bedrooms !== Number(searchFilters.bedrooms)) return false
    if (searchFilters.bathrooms && property.bathrooms !== Number(searchFilters.bathrooms)) return false
    if (searchFilters.location && !property.location.toLowerCase().includes(searchFilters.location.toLowerCase())) return false
    return true
  })
})

const handleSearch = () => {
  router.push({ 
    name: 'Properties', 
    query: {
      type: searchFilters.type,
      category: searchFilters.category,
      bedrooms: searchFilters.bedrooms?.toString(),
      bathrooms: searchFilters.bathrooms?.toString(),
      location: searchFilters.location
    }
  })
}

// Auto-rotate slides
onMounted(() => {
  setInterval(() => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
  }, 5000)
})
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


