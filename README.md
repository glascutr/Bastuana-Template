# Bastuana - Real Estate Website

A modern, responsive real estate website built with Vue.js 3, TypeScript, and Tailwind CSS, inspired by the Bastuana.com design.

## Features

- 🏠 **Property Listings** - Browse and search properties with advanced filtering
- 🔍 **Advanced Search** - Filter by type, category, location, price, bedrooms, and more
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔐 **Authentication** - Login, register, and password reset functionality
- 📝 **Blog System** - Real estate news and insights
- 📞 **Contact Forms** - Multiple ways to get in touch
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Clean, professional design with smooth animations

## Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Router**: Vue Router 4
- **State Management**: Pinia
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.vue      # Main navigation header
│   ├── Footer.vue      # Site footer
│   └── Navigation.vue  # Navigation component
├── views/              # Page components
│   ├── Home.vue        # Homepage
│   ├── Properties.vue  # Property listings
│   ├── PropertyDetail.vue # Property details
│   ├── About.vue       # About page
│   ├── Blog.vue        # Blog listings
│   ├── BlogDetail.vue  # Blog post details
│   ├── Contact.vue     # Contact page
│   ├── Login.vue       # Login page
│   ├── Register.vue    # Registration page
│   └── ResetPassword.vue # Password reset
├── router/             # Vue Router configuration
├── types/              # TypeScript type definitions
├── App.vue            # Root component
├── main.ts            # Application entry point
└── style.css          # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bastuana-vue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Alias for preview

## Features Overview

### Homepage
- Hero slider with property highlights
- Advanced search functionality
- Featured property listings
- Services overview
- Latest blog posts

### Properties
- Grid and list view options
- Advanced filtering and sorting
- Pagination
- Property comparison
- Favorites functionality

### Property Details
- High-quality image gallery
- Detailed property information
- Contact agent forms
- Social sharing
- Related properties

### Authentication
- User registration with validation
- Secure login system
- Password reset functionality
- Social login options (placeholder)

### Blog
- Article listings with categories
- Detailed article pages
- Author information
- Related articles
- Social sharing

### Contact
- Contact form with validation
- Office information
- Interactive map (placeholder)
- FAQ section

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
- Property data is currently mocked in the components
- Replace with real API calls in production
- Update contact information in Footer.vue and Contact.vue

### Images
- Add your logo to the public folder
- Replace placeholder images with actual property photos
- Update team member photos in About.vue

## API Integration

The current implementation uses mock data. To integrate with a real API:

1. Create API service files in `src/services/`
2. Replace mock data with API calls
3. Add proper error handling
4. Implement loading states

Example API service structure:
```typescript
// src/services/propertyService.ts
export const getProperties = async (filters: SearchFilters) => {
  // API call implementation
}
```

## Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the SPA

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by Bastuana.com
- Icons by Font Awesome
- Fonts by Google Fonts
- Built with Vue.js and Tailwind CSS

## Support

For support, email info@bastuana.com or create an issue in the repository.
