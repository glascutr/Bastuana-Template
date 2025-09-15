<template>
  <div class="blog-detail" v-if="post">
    <!-- Article Header -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <div class="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span>{{ post.publishedAt }}</span>
              <span class="mx-2">•</span>
              <span>By {{ post.author }}</span>
            </div>
            <h1 class="text-4xl font-bold text-gray-800 mb-6">{{ post.title }}</h1>
            <div class="flex justify-center flex-wrap gap-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-3">
              <article class="prose prose-lg max-w-none">
                <div class="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-8 flex items-center justify-center">
                  <div class="text-center text-gray-500">
                    <i class="fas fa-newspaper text-6xl mb-4"></i>
                    <h3 class="text-xl font-bold">{{ post.title }}</h3>
                  </div>
                </div>
                
                <div class="text-gray-600 leading-relaxed space-y-6">
                  <p>
                    The real estate sector in Bangladesh has undergone remarkable evolution, transforming from a fledgling industry to a major economic driver. This transformation has been fueled by rapid urbanization, economic growth, and increasing demand for housing and commercial spaces.
                  </p>
                  
                  <p>
                    Over the past decade, we've witnessed significant changes in the market dynamics, with new players entering the field, innovative construction techniques being adopted, and a growing emphasis on sustainable development practices.
                  </p>
                  
                  <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Market Growth Trends</h2>
                  
                  <p>
                    The Bangladesh real estate market has shown consistent growth, with property values appreciating steadily across major cities. Dhaka, being the capital and economic hub, has seen the most significant growth, followed by Chittagong and other metropolitan areas.
                  </p>
                  
                  <p>
                    Key factors driving this growth include:
                  </p>
                  
                  <ul class="list-disc pl-6 space-y-2">
                    <li>Rapid urbanization and population growth</li>
                    <li>Increasing middle-class purchasing power</li>
                    <li>Government initiatives for infrastructure development</li>
                    <li>Foreign direct investment in the sector</li>
                    <li>Growing demand for modern amenities and facilities</li>
                  </ul>
                  
                  <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Investment Opportunities</h2>
                  
                  <p>
                    For investors, the Bangladesh real estate market presents numerous opportunities across different segments. Residential properties continue to be the most popular investment choice, with apartments in prime locations showing the highest returns.
                  </p>
                  
                  <p>
                    Commercial real estate is also gaining traction, with office spaces, retail outlets, and industrial properties becoming increasingly attractive to both local and foreign investors.
                  </p>
                  
                  <h2 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Future Outlook</h2>
                  
                  <p>
                    Looking ahead, the real estate sector in Bangladesh is expected to continue its growth trajectory. With ongoing infrastructure projects, improved connectivity, and government support for the industry, the market is poised for sustained development.
                  </p>
                  
                  <p>
                    However, challenges such as land scarcity, regulatory complexities, and the need for sustainable development practices will require careful navigation by all stakeholders.
                  </p>
                </div>
              </article>
            </div>

            <!-- Sidebar -->
            <div class="lg:col-span-1">
              <!-- Author Info -->
              <div class="card p-6 mb-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                <div class="flex items-center mb-4">
                  <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <i class="fas fa-user text-white text-xl"></i>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">{{ post.author }}</p>
                    <p class="text-sm text-gray-500">Real Estate Expert</p>
                  </div>
                </div>
                <p class="text-gray-600 text-sm">
                  With over 10 years of experience in the Bangladesh real estate market, our expert team provides valuable insights and guidance to help you make informed decisions.
                </p>
              </div>

              <!-- Related Posts -->
              <div class="card p-6 mb-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                <div class="space-y-4">
                  <div 
                    v-for="relatedPost in relatedPosts" 
                    :key="relatedPost.id"
                    class="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    @click="viewPost(relatedPost.id)"
                  >
                    <div class="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <i class="fas fa-newspaper text-gray-500"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-gray-800 line-clamp-2">
                        {{ relatedPost.title }}
                      </h4>
                      <p class="text-xs text-gray-500">{{ relatedPost.publishedAt }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Share Article -->
              <div class="card p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Share Article</h3>
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
    </section>

    <!-- Back to Blog -->
    <section class="py-8 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <button 
            @click="$router.push({ name: 'Blog' })"
            class="btn-secondary"
          >
            <i class="fas fa-arrow-left mr-2"></i>Back to Blog
          </button>
        </div>
      </div>
    </section>
  </div>
  
  <!-- Loading State -->
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <i class="fas fa-spinner fa-spin text-4xl text-primary-600 mb-4"></i>
      <p class="text-gray-600">Loading article...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { BlogPost } from '@/types'

const route = useRoute()
const router = useRouter()
const post = ref<BlogPost | null>(null)

const relatedPosts = ref<BlogPost[]>([
  {
    id: 2,
    title: 'The Rise of the Real Estate Secondary Market in Bangladesh',
    excerpt: 'Bangladesh, a country experiencing rapid urbanization and economic growth...',
    content: '',
    author: 'Bastuana Team',
    publishedAt: 'June 30, 2021',
    image: '/images/blog2.jpg',
    tags: ['Secondary Market', 'Urbanization', 'Growth']
  },
  {
    id: 4,
    title: 'Tips for First-Time Home Buyers in Dhaka',
    excerpt: 'Buying your first home can be overwhelming...',
    content: '',
    author: 'Bastuana Team',
    publishedAt: 'February 15, 2024',
    image: '/images/blog4.jpg',
    tags: ['First Time Buyers', 'Tips', 'Dhaka']
  },
  {
    id: 5,
    title: 'Commercial Real Estate Investment Opportunities',
    excerpt: 'Explore the growing commercial real estate sector...',
    content: '',
    author: 'Bastuana Team',
    publishedAt: 'January 28, 2024',
    image: '/images/blog5.jpg',
    tags: ['Commercial', 'Investment', 'Opportunities']
  }
])

const viewPost = (id: number) => {
  router.push({ name: 'BlogDetail', params: { id: id.toString() } })
}

onMounted(() => {
  // In real app, fetch post by ID from API
  const postId = route.params.id
  // Mock data for now
  post.value = {
    id: 1,
    title: 'Understanding the Growth of the Real Estate Market in Bangladesh',
    excerpt: 'The real estate sector in Bangladesh has undergone remarkable evolution, transforming from a fledgling industry to a major economic driver.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'April 18, 2024',
    image: '/images/blog1.jpg',
    tags: ['Real Estate', 'Bangladesh', 'Market Trends']
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

