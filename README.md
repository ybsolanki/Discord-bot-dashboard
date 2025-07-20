# Discord Bot Dashboard

A comprehensive Discord bot with web dashboard featuring 18+ moderation and utility commands.

## Features

### Discord Bot Commands (18 Total)
- **Basic Commands**: help, ping, serverinfo, invite
- **Moderation Commands**: kick, ban, clear, mute, unmute, deafen, undeafen, lockdown, unlock, textmute, textunmute
- **Utility Commands**: userinfo, prefix, debug

### Web Dashboard
- Real-time bot status monitoring
- Command configuration management
- Bot statistics and analytics
- Settings management (prefix, error logging, DM permissions)

### Key Capabilities
- **Voice Channel Control**: Mute/unmute, deafen/undeafen users
- **Text Channel Control**: Text muting with timed duration support
- **Channel Management**: Lock/unlock channels for emergencies
- **Message Moderation**: Clear messages with advanced filtering
- **Auto-Features**: Timed mutes with automatic removal

## Quick Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Set environment variable: `DISCORD_BOT_TOKEN=your_bot_token`
4. Start the application: `npm run dev`

## Deployment

### Railway (Recommended - Free)
1. Fork this repository
2. Connect to Railway
3. Set `DISCORD_BOT_TOKEN` environment variable
4. Deploy automatically

### Other Free Options
- Render (with UptimeRobot for 24/7)
- Cyclic.sh
- Vercel (serverless)

## Commands Usage

- `,help` - Show all available commands
- `,textmute @user 10m spam` - Mute user for 10 minutes
- `,lockdown emergency` - Lock current channel
- `,clear 50 @user` - Clear 50 messages from specific user
- `,prefix !` - Change bot prefix to !

## Tech Stack

- **Backend**: Node.js, Express.js, Discord.js
- **Frontend**: React, TypeScript, Tailwind CSS
- **Database**: In-memory storage (easily upgradeable)
- **Build**: Vite, esbuild

## Architecture

Full-stack TypeScript application with monorepo structure:
- `server/` - Express API and Discord bot
- `client/` - React dashboard
- `shared/` - Common schemas and types

Built for production with comprehensive error handling, logging, and monitoring.