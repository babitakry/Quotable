# Quotable - Daily Inspiration App

**Quotable** is a modern, responsive React application designed to provide users with daily doses of wisdom and inspiration. Built with a focus on performance, modularity, and premium aesthetics, the app fetches real-time data from the FreeAPI quotes endpoint.

## Live Demo
- **Deployed Link**: [https://quotable-theta.vercel.app/](https://quotable-theta.vercel.app/)

## Features

- **Dynamic Data Fetching**: Seamlessly retrieves quotes from [FreeAPI](https://freeapi.app/) with robust handling for loading and error states.
- **Custom `useQuotes` Hook**: Encapsulates all data fetching, state management, and pagination logic, ensuring a clean and maintainable codebase.
- **Premium UI/UX**: 
  - Glassmorphism header and vibrant background gradients.
  - Interactive quote cards with hover effects and smooth transitions.
- **Advanced Pagination**: Navigate through a large collection of quotes with functional "Next/Previous" controls and specific page jumps.
- **One-Click Copy**: A dedicated `CopyButton` component that allows users to instantly copy quotes with formatted author attribution.
- **Fully Responsive**: Optimized for all devices, from mobile phones to large desktops.

## Tech Stack

- **Core**: React 18 + Vite
- **Styling**: Tailwind CSS
- **API**: [FreeAPI](https://freeapi.app/api/v1/public/quotes)
- **Icons**: Custom SVG Icons
- **Deployment**: Vercel

## Architecture

The project follows a modular, component-based architecture:

- `src/hooks/useQuotes.js`: The engine of the app, managing data flow and pagination.
- `src/components/QuotesList.jsx`: The main container that coordinates the display of quotes.
- `src/components/QuoteCard.jsx`: A presentational component for individual quotes.
- `src/components/CopyButton.jsx`: A reusable utility for clipboard functionality.
- `src/components/Pagination.jsx`: A custom navigation component for exploring different pages of data.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/babitakry/Quotable.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---
Built with ❤️ by [Babita Kumari](https://github.com/babitakry)
