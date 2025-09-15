export interface Property {
  id: number
  title: string
  price: number
  location: string
  type: 'Buy' | 'Rent'
  category: 'Commercial' | 'Residential'
  subcategory: string
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  images: string[]
  features: string[]
  status: 'Available' | 'Sold' | 'Rented'
  createdAt: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  image: string
  tags: string[]
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  role: 'user' | 'admin'
}

export interface SearchFilters {
  type: 'Buy' | 'Rent' | 'All'
  category: string
  subcategory: string
  bedrooms: number | null
  bathrooms: number | null
  minPrice: number | null
  maxPrice: number | null
  location: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

