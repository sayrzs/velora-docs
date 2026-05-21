---
title: Bot API
---

# Bot API

Internal API for bot-to-dashboard communication.

---

## Overview

The bot exposes an internal REST API on port `27017` (configurable via `BOT_API_PORT`). This API is used by the dashboard to fetch real-time data and send commands to the bot.

---

## Authentication

All endpoints require the `BOT_API_SECRET` header for authentication:

```http
X-Bot-Api-Secret: your-secret-key
```

---

## Endpoints

### GET /stats

Get real-time bot statistics.

**Response:**
```json
{
  "guilds": 42,
  "tickets": {
    "open": 15,
    "closed": 127
  },
  "uptime": 86400,
  "memory": "125MB"
}
```

### GET /guilds/:guildId/tickets

Get all tickets for a specific guild.

**Response:**
```json
{
  "tickets": [
    {
      "id": "ticket-123",
      "channelId": "123456789",
      "userId": "987654321",
      "categoryId": "cat-1",
      "status": "open",
      "claimedBy": null,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### POST /guilds/:guildId/tickets/:ticketId/close

Close a specific ticket.

**Body:**
```json
{
  "reason": "Issue resolved",
  "closedBy": "staff-user-id"
}
```

### POST /guilds/:guildId/tickets/:ticketId/claim

Claim a ticket for a staff member.

**Body:**
```json
{
  "staffId": "staff-user-id"
}
```

### GET /guilds/:guildId/settings

Get guild settings.

**Response:**
```json
{
  "language": "en",
  "ticketNumbering": true,
  "claimSystem": true,
  "maxTicketsPerUser": 3
}
```

### PUT /guilds/:guildId/settings

Update guild settings.

**Body:**
```json
{
  "language": "ar",
  "ticketNumbering": true
}
```

---

## WebSocket Events

The bot also emits WebSocket events for real-time updates:

### ticket:opened
```json
{
  "type": "ticket:opened",
  "guildId": "guild-123",
  "ticketId": "ticket-456",
  "userId": "user-789"
}
```

### ticket:closed
```json
{
  "type": "ticket:closed",
  "guildId": "guild-123",
  "ticketId": "ticket-456",
  "closedBy": "staff-456"
}
```

### staff:shift:start
```json
{
  "type": "staff:shift:start",
  "guildId": "guild-123",
  "staffId": "staff-456"
}
```

---

## Error Responses

All endpoints may return error responses:

```json
{
  "error": "Unauthorized",
  "message": "Invalid API secret"
}
```

Status codes:
- `401` - Unauthorized (missing or invalid secret)
- `404` - Resource not found
- `500` - Internal server error
