<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="bg-primary-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">Blog</h1>
          <p class="text-xl text-primary-100 leading-relaxed">
            Stay updated with the latest real estate trends, market insights, and expert advice from our team.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in blogPosts" 
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
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>{{ post.publishedAt }}</span>
                <span class="mx-2">•</span>
                <span>By {{ post.author }}</span>
              </div>
              
              <h2 class="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                {{ post.title }}
              </h2>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in post.tags.slice(0, 2)" 
                    :key="tag"
                    class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                  >
                    {{ tag }}
                  </span>
                </div>
                <button 
                  @click="viewPost(post.id)"
                  class="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read More
                </button>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-secondary">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { BlogPost } from '@/types'

const router = useRouter()

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
  },
  {
    id: 4,
    title: 'Tips for First-Time Home Buyers in Dhaka',
    excerpt: 'Buying your first home can be overwhelming. Here are essential tips to help you navigate the process successfully.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'February 15, 2024',
    image: '/images/blog4.jpg',
    tags: ['First Time Buyers', 'Tips', 'Dhaka']
  },
  {
    id: 5,
    title: 'Commercial Real Estate Investment Opportunities',
    excerpt: 'Explore the growing commercial real estate sector in Bangladesh and discover investment opportunities.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'January 28, 2024',
    image: '/images/blog5.jpg',
    tags: ['Commercial', 'Investment', 'Opportunities']
  },
  {
    id: 6,
    title: 'Legal Aspects of Property Transactions in Bangladesh',
    excerpt: 'Understanding the legal requirements and documentation needed for property transactions in Bangladesh.',
    content: 'Full content here...',
    author: 'Bastuana Team',
    publishedAt: 'January 10, 2024',
    image: '/images/blog6.jpg',
    tags: ['Legal', 'Documentation', 'Transactions']
  }
])

const viewPost = (id: number) => {
  router.push({ name: 'BlogDetail', params: { id: id.toString() } })
}
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

