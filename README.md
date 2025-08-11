# Meal Planner

A comprehensive meal planning application built with Next.js 15, featuring user authentication, food management, and meal scheduling capabilities.

## 🚀 Features

- **User Authentication**: Secure sign-in/sign-up with NextAuth.js
- **Food Management**: Add, edit, and categorize foods with nutritional information
- **Serving Units**: Flexible serving unit management for accurate portion tracking
- **Meal Planning**: Schedule meals with specific foods and quantities
- **Admin Panel**: Comprehensive admin interface for food and category management
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **Real-time Updates**: Optimistic updates with React Query and Zustand state management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI components
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js 5
- **State Management**: Zustand, React Query
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Custom component library with shadcn/ui patterns

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Main application routes
│   │   ├── admin/         # Admin panel
│   │   │   ├── foods-management/  # Food CRUD operations
│   │   │   └── categories/        # Category management
│   │   └── client/        # User-facing features
│   └── api/               # API routes
├── components/             # Reusable UI components
├── lib/                    # Utilities and configurations
└── prisma/                 # Database schema and migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd meal-planner
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Configure the following variables:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3005"
```

4. Set up the database:
```bash
# Generate Prisma client
npm run postinstall

# Run database migrations
npx prisma migrate dev

# Seed the database (optional)
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3005](http://localhost:3005).

## 📊 Database Schema

The application uses the following main models:

- **User**: Authentication and role management
- **Food**: Nutritional information and categorization
- **Category**: Food classification system
- **ServingUnit**: Measurement units for food portions
- **Meal**: Scheduled meal plans
- **MealFood**: Junction table linking meals to foods with quantities

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data
- `npm run postinstall` - Generate Prisma client

## 🎨 UI Components

The application includes a comprehensive set of UI components built with:
- **Radix UI**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, consistent icons

## 🔐 Authentication

User authentication is handled by NextAuth.js with:
- Email/password authentication
- Role-based access control (USER/ADMIN)
- Secure session management
- Protected routes and middleware

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Touch interfaces

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

---

Built with ❤️ using Next.js and modern web technologies.
