<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="bg-primary-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">Contact Us</h1>
          <p class="text-xl text-primary-100 leading-relaxed">
            Get in touch with our expert team for all your real estate needs. We're here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    v-model="form.name" 
                    required
                    class="input-field" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    v-model="form.email" 
                    required
                    class="input-field" 
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    v-model="form.phone" 
                    required
                    class="input-field" 
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select v-model="form.subject" required class="input-field">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="property">Property Information</option>
                    <option value="sale">Selling Property</option>
                    <option value="rent">Renting Property</option>
                    <option value="legal">Legal Services</option>
                    <option value="loan">Home Loan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  v-model="form.message" 
                  required
                  rows="6"
                  class="input-field" 
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="form.agreeTerms" 
                  required
                  class="mr-3" 
                />
                <span class="text-sm text-gray-600">
                  I agree to the <a href="#" class="text-primary-600 hover:text-primary-700">Terms & Conditions</a> and <a href="#" class="text-primary-600 hover:text-primary-700">Privacy Policy</a>
                </span>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="btn-primary w-full"
              >
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                <i v-else class="fas fa-paper-plane mr-2"></i>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div class="space-y-8">
              <!-- Office Address -->
              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <i class="fas fa-map-marker-alt text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">Office Address</h3>
                  <p class="text-gray-600">
                    MG SAM CENTER (17TH FLOOR)<br>
                    12, MOHAKHALI C/A<br>
                    DHAKA-1212, Bangladesh
                  </p>
                </div>
              </div>

              <!-- Phone Numbers -->
              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <i class="fas fa-phone text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                  <p class="text-gray-600">
                    <a href="tel:+8801322906531" class="hover:text-primary-600 transition-colors">
                      +880-1322906531
                    </a><br>
                    <a href="tel:+8809666794949" class="hover:text-primary-600 transition-colors">
                      09666-794949
                    </a>
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <i class="fas fa-envelope text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
                  <p class="text-gray-600">
                    <a href="mailto:info@bastuana.com" class="hover:text-primary-600 transition-colors">
                      info@bastuana.com
                    </a>
                  </p>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="flex items-start">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <i class="fas fa-clock text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 4:00 PM<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
          <p class="text-gray-600">Visit our office for a personal consultation</p>
        </div>
        
        <div class="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <i class="fas fa-map text-6xl text-gray-500 mb-4"></i>
            <p class="text-gray-600">Interactive Map Coming Soon</p>
            <p class="text-sm text-gray-500">MG SAM CENTER (17TH FLOOR), 12, MOHAKHALI C/A, DHAKA-1212</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p class="text-gray-600">Find answers to common questions about our services</p>
          </div>
          
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="card p-6"
            >
              <button 
                @click="toggleFaq(index)"
                class="flex justify-between items-center w-full text-left"
              >
                <h3 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h3>
                <i 
                  :class="openFaqs.includes(index) ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
                  class="text-primary-600"
                ></i>
              </button>
              <div 
                v-if="openFaqs.includes(index)"
                class="mt-4 text-gray-600"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ContactForm } from '@/types'

const isSubmitting = ref(false)
const openFaqs = ref<number[]>([])

const form = reactive<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agreeTerms: false
})

const faqs = ref([
  {
    question: 'How can I list my property for sale?',
    answer: 'You can list your property by contacting us through our website, phone, or visiting our office. Our team will guide you through the entire process, including property valuation, documentation, and marketing.'
  },
  {
    question: 'What services do you provide for property buyers?',
    answer: 'We provide comprehensive services including property search, site visits, legal verification, documentation assistance, and post-purchase support. Our team ensures a smooth buying experience.'
  },
  {
    question: 'Do you offer legal services for property transactions?',
    answer: 'Yes, we have a team of legal experts who can assist with property documentation, title verification, registration, and other legal aspects of real estate transactions.'
  },
  {
    question: 'How do you determine property prices?',
    answer: 'Our pricing is based on current market trends, property location, size, condition, amenities, and comparable sales in the area. We provide fair and competitive pricing for both buyers and sellers.'
  },
  {
    question: 'What areas do you cover?',
    answer: 'We primarily cover Dhaka and its surrounding areas, including Gulshan, Dhanmondi, Uttara, Bashundhara, and other major residential and commercial areas.'
  },
  {
    question: 'Do you provide home loan assistance?',
    answer: 'Yes, we work with trusted financial partners to help you secure home loans with favorable terms. Our team can guide you through the loan application process.'
  }
])

const toggleFaq = (index: number) => {
  const faqIndex = openFaqs.value.indexOf(index)
  if (faqIndex > -1) {
    openFaqs.value.splice(faqIndex, 1)
  } else {
    openFaqs.value.push(index)
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      agreeTerms: false
    })
    
    alert('Thank you for your message! We will get back to you soon.')
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

