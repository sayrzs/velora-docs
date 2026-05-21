---
title: Dashboard API
---

# Dashboard API

Public REST API for the Ticket-v2 dashboard.

---

## Overview

The dashboard exposes a REST API on port `27007` (configurable via `API_PORT`). This API serves the React frontend and handles authentication via OAuth2.

---

## Authentication

### OAuth2 Flow

1. User clicks "Login with Discord"
2. Redirected to Discord OAuth2 consent screen
3. User authorizes the application
4. Discord redirects back with authorization code
5. Server exchanges code for access token
6. Server creates JWT session token
7. User is logged in

### Session Token

All protected endpoints require a JWT session token:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Endpoints

### Authentication

#### POST /auth/discord

Initiate Discord OAuth2 login.

**Response:**
```json
{
  "url": "https://discord.com/oauth2/authorize?..."
}
```

#### GET /auth/callback

Handle Discord OAuth2 callback.

#### POST /auth/logout

Log out the current user.

---

### Guilds

#### GET /guilds

Get all guilds the user has access to.

**Response:**
```json
{
  "guilds": [
    {
      "id": "guild-123",
      "name": "My Server",
      "icon": "icon-hash",
      "premium": true,
      "botInstalled": true
    }
  ]
}
```

#### GET /guilds/:guildId

Get detailed information about a specific guild.

**Response:**
```json
{
  "id": "guild-123",
  "name": "My Server",
  "premium": {
    "active": true,
    "plan": "pro",
    "expiresAt": "2024-12-31"
  },
  "stats": {
    "totalTickets": 150,
    "openTickets": 12,
    "avgResponseTime": 5.2
  }
}
```

---

### Tickets

#### GET /guilds/:guildId/tickets

Get all tickets for a guild with pagination.

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 50)
- `status` - Filter by status (open, closed, archived)

**Response:**
```json
{
  "tickets": [...],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 150,
    "totalPages": 3
  }
}
```

#### GET /guilds/:guildId/tickets/:ticketId

Get a specific ticket details.

#### POST /guilds/:guildId/tickets/:ticketId/close

Close a ticket.

**Body:**
```json
{
  "reason": "Resolved"
}
```

---

### Categories

#### GET /guilds/:guildId/categories

Get all categories for a guild.

#### POST /guilds/:guildId/categories

Create a new category.

**Body:**
```json
{
  "name": "General Support",
  "emoji": "🎫",
  "color": "#8B5CF6",
  "description": "General support tickets"
}
```

#### PUT /guilds/:guildId/categories/:categoryId

Update a category.

#### DELETE /guilds/:guildId/categories/:categoryId

Delete a category.

---

### Panels

#### GET /guilds/:guildId/panels

Get all panels for a guild.

#### POST /guilds/:guildId/panels

Create a new panel.

#### POST /guilds/:guildId/panels/:panelId/send

Send a panel to a Discord channel.

**Body:**
```json
{
  "channelId": "channel-123"
}
```

---

### Staff

#### GET /guilds/:guildId/staff

Get all staff members and their stats.

**Response:**
```json
{
  "staff": [
    {
      "userId": "user-123",
      "username": "StaffMember",
      "points": 150,
      "ticketsClaimed": 45,
      "ticketsClosed": 38,
      "avgRating": 4.8
    }
  ]
}
```

---

### Settings

#### GET /guilds/:guildId/settings

Get guild settings.

#### PUT /guilds/:guildId/settings

Update guild settings.

---

## Error Responses

```json
{
  "error": "Unauthorized",
  "message": "Invalid or expired token"
}
```

Status codes:
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not found
- `429` - Rate limited
- `500` - Internal server error
