# Discord Bot Dashboard

## Overview

This is a full-stack Discord bot management application built with Express.js backend and React frontend. The application provides a web-based dashboard to manage Discord bot commands, monitor bot status, and configure settings. The bot includes moderation commands, utility features, and a comprehensive management interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack TypeScript Application
- **Frontend**: React with TypeScript, styled using Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **Discord Integration**: Discord.js library for bot functionality
- **Build System**: Vite for frontend bundling, esbuild for backend compilation

### Monorepo Structure
The application follows a monorepo pattern with shared TypeScript code:
- `client/` - React frontend application
- `server/` - Express.js backend and Discord bot
- `shared/` - Shared TypeScript schemas and types

## Key Components

### Frontend Architecture
- **Component-Based UI**: Uses shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom theme configuration
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **RESTful API**: Express.js server providing bot management endpoints
- **Discord Bot**: Comprehensive command system with moderation and utility features
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database)
- **Command System**: Modular command architecture with category-based organization

### Discord Bot Features
- **Command Categories**: General, Moderation, Utility, Settings
- **Moderation Commands**: kick, ban, mute, deafen, clear messages
- **Utility Commands**: ping, serverinfo, userinfo, help, debug
- **Configuration**: Dynamic prefix changing, bot statistics tracking
- **Error Handling**: Comprehensive logging and error recovery

## Data Flow

### Bot Management Flow
1. Web dashboard sends API requests to Express server
2. Server updates bot configuration through storage layer
3. Bot reads configuration changes and applies them in real-time
4. Status updates flow back through the API to update the dashboard

### Command Execution Flow
1. Discord message received by bot
2. Message parsed for command prefix or bot mention
3. Command looked up in storage and executed if enabled
4. Command usage statistics updated
5. Response sent back to Discord channel

### Real-time Updates
- Bot status polled every 30 seconds from dashboard
- Command statistics updated in real-time as commands are used
- Configuration changes applied immediately without restart

## External Dependencies

### Core Technologies
- **Discord.js**: Discord API interaction and bot functionality
- **Drizzle ORM**: Type-safe database schema and query management
- **Neon Database**: Serverless PostgreSQL database provider
- **TanStack Query**: Server state management and caching
- **Zod**: Runtime type validation and schema definition

### UI Libraries
- **Radix UI**: Unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Development Tools
- **Vite**: Fast frontend build tool with HMR
- **TypeScript**: Type safety across the entire stack
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Production Build Process
1. Frontend built using Vite into `dist/public/` directory
2. Backend compiled using esbuild into `dist/` directory
3. Shared schemas included in both build outputs
4. Static files served by Express in production

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Discord bot token required for bot functionality
- Development vs production modes with different logging levels

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Environment variables for Discord bot token and database URL
- Port configuration for web server (default production setup)

### Database Setup
- Drizzle migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` with PostgreSQL dialect
- Database push command: `npm run db:push`
- Initial data seeded through storage layer initialization