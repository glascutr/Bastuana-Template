<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Us -->
        <div>
          <h3 class="text-xl font-bold mb-4">About Us</h3>
          <p class="text-gray-300 leading-relaxed">
            A pioneering platform conceived to revolutionize the homeownership market, providing buying, selling, loaning and legal services tailormade in accordance with all your needs.
          </p>
          <div class="mt-4">
            <p class="text-sm text-gray-400">COPYRIGHT © 2024-2032 BASTUANA</p>
            <a href="#" class="text-sm text-primary-400 hover:text-primary-300">Privacy Policy</a>
          </div>
        </div>

        <!-- Contact Us -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact Us</h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <i class="fas fa-map-marker-alt text-primary-400 mt-1 mr-3"></i>
              <div>
                <p class="text-gray-300">MG SAM CENTER (17TH FLOOR)</p>
                <p class="text-gray-300">12, MOHAKHALI C/A, DHAKA-1212</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone text-primary-400 mr-3"></i>
              <p class="text-gray-300">09666-794949</p>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope text-primary-400 mr-3"></i>
              <p class="text-gray-300">info@bastuana.com</p>
            </div>
          </div>
        </div>

        <!-- Latest Properties -->
        <div>
          <h3 class="text-xl font-bold mb-4">Latest Properties</h3>
          <div class="space-y-3">
            <div v-for="property in latestProperties" :key="property.id" class="flex items-center space-x-3">
              <div class="w-16 h-16 bg-gray-600 rounded flex items-center justify-center">
                <i class="fas fa-home text-gray-300"></i>
              </div>
              <div>
                <h4 class="text-sm font-medium text-white hover:text-primary-400 cursor-pointer">
                  {{ property.title }}
                </h4>
                <p class="text-primary-400 font-semibold">{{ property.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-primary-400 transition-colors">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/properties" class="text-gray-300 hover:text-primary-400 transition-colors">
                Properties
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-primary-400 transition-colors">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-300 hover:text-primary-400 transition-colors">
                Blog
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-primary-400 transition-colors">
                Contact
              </router-link>
            </li>
          </ul>
          
          <!-- Social Media -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold mb-3">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <i class="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 transition-colors">
                <i class="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const latestProperties = ref([
  {
    id: 1,
    title: 'Bashundhara I Block- 2150 Sq.ft- Ready Apartment',
    price: '৳ 25,000,000',
    image: '/images/property1.jpg'
  },
  {
    id: 2,
    title: 'Gulshan 1- 2000 Sq.ft – Luxury Apartment',
    price: '৳ 30,000,000',
    image: '/images/property2.jpg'
  },
  {
    id: 3,
    title: 'Niketan- 2,500 Sq.ft- Ready Apartment',
    price: '৳ 28,000,000',
    image: '/images/property3.jpg'
  }
])
</script>


