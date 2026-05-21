---
title: Installation
---

# Installation

Get Ticket-v2 running on your server or local machine.

---

## Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later
- A **Discord application** with a bot token ([Discord Developer Portal](https://discord.com/developers/applications))
- **PostgreSQL** (recommended for production) or SQLite (development)

---

## Clone the Repository

```bash
git clone https://github.com/sayrzs/Ticket-v2.git
cd Ticket-v2
```

---

## Environment Setup

Copy the environment template and configure your values:

```bash
cp .env.example .env
```

Edit `.env` and fill in the required variables:

### Discord Configuration

| Variable | Description |
|---|---|
| `DISCORD_TOKEN` | Bot token from Discord Developer Portal |
| `DISCORD_CLIENT_ID` | Application client ID |
| `DISCORD_CLIENT_SECRET` | Application client secret (for OAuth2) |

### URLs & Ports

| Variable | Description | Default |
|---|---|---|
| `OAUTH_REDIRECT_URI` | Discord OAuth2 callback URL | — |
| `DASHBOARD_URL` | Public URL of the dashboard | — |
| `API_URL` | Public URL of the REST API | — |
| `BOT_API_URL` | Internal URL for bot ↔ API communication | — |
| `API_PORT` | Port for the REST API | `27007` |
| `BOT_API_PORT` | Port for the bot's internal API | `27017` |
| `DASHBOARD_PORT` | Port for the dashboard dev/preview server | `27015` |

### Security

| Variable | Description |
|---|---|
| `SESSION_SECRET` | Secret for session signing |
| `JWT_SECRET` | Secret for JWT token signing |
| `TRANSCRIPT_SECRET` | Secret for transcript URL signing |
| `DB_ENCRYPTION_KEY` | Key for encrypting sensitive database fields |
| `BOT_API_SECRET` | Shared secret between API and bot internal API |

### Database

| Variable | Description |
|---|---|
| `DATABASE_URL` | Prisma connection string (SQLite or PostgreSQL) |

### Access Control

| Variable | Description |
|---|---|
| `OWNER_IDS` | Comma-separated Discord user IDs with owner access |
| `ADMIN_USER_IDS` | Comma-separated Discord user IDs with admin panel access |

---

## Install Dependencies

```bash
npm install
```

---

## Setup Database

Push the Prisma schema to your database:

```bash
npm run db:push
```

---

## Start the Services

Start all services (bot, API, dashboard):

```bash
npm start
```

For development with hot-reload:

```bash
npm run dev
```

---

## Bot Permissions & Intents

**Required Permissions:**

| Permission | Purpose |
|---|---|
| Manage Channels | Create and configure ticket channels |
| Manage Roles | Set channel permission overwrites |
| Send Messages | Send ticket messages and notifications |
| Embed Links | Send rich embed messages |
| Read Message History | Read ticket conversation history |
| Use Application Commands | Register and respond to slash commands |
| Manage Messages | Pin messages, delete content |

**Required Gateway Intents:**

- `Guilds`
- `GuildMessages`
- `GuildMembers`
- `MessageContent`

Enable `GuildMembers` and `MessageContent` as **Privileged Intents** in the Discord Developer Portal under your application's Bot settings.

---

## What's Next?

- [Quick Start Guide →](/guides/quick-start)
- [Configuration →](/config/bot-settings)
