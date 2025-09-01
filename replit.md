# Overview

This is a financial services landing page application for "The Rich Monkey," a Mumbai-based financial advisory firm. The application is built as a full-stack web application with a React frontend and Express.js backend, focusing on showcasing financial services including stock investments, portfolio management, trading strategies, and personal finance solutions. The primary purpose is to attract potential clients and collect contact inquiries through a professional business website.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application built with React 18 using TypeScript
- **Component Library**: Shadcn/ui components with Radix UI primitives for consistent, accessible UI elements
- **Styling**: Tailwind CSS with custom design tokens and dark theme support
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API built with Express.js and TypeScript
- **Development Setup**: Hot reload with Vite middleware integration for seamless development
- **API Structure**: Clean separation of routes, storage abstraction, and error handling
- **Session Management**: Uses connect-pg-simple for PostgreSQL-backed sessions
- **Request Logging**: Custom middleware for API request logging and monitoring

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless configuration
- **ORM**: Drizzle ORM for type-safe database queries and migrations
- **Schema Management**: Centralized schema definitions with Zod validation integration
- **Migration System**: Drizzle Kit for database schema migrations
- **Storage Abstraction**: Interface-based storage layer with in-memory fallback for development

## Authentication and Authorization
- **Session-based**: Traditional session-based authentication using PostgreSQL storage
- **User Management**: Basic user schema with username/password authentication
- **Security**: Password hashing and secure session management

## External Dependencies

### Core Frameworks and Libraries
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect support
- **@tanstack/react-query**: Server state management and data fetching
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Zod integration for form validation

### UI Component System
- **@radix-ui/***: Complete set of accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library for consistent iconography

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across frontend and backend
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment

### Utility Libraries
- **zod**: Schema validation for forms and API requests
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional className utilities
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality

The application follows modern web development practices with strong typing, component reusability, and scalable architecture patterns suitable for a professional business website.