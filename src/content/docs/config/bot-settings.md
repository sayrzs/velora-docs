---
title: Bot Settings
---

# Bot Settings

Configure global bot behavior and functionality.

---

## General Settings

### Bot Language

The language the bot uses in Discord messages. Available languages:
- English
- Arabic (RTL)
- Spanish
- French
- Dutch

:::note
Dashboard language is separate — users can set their preferred language in their user settings.
:::

### Ticket Numbering

Enable sequential ticket numbers (e.g., #0042, #0043). If disabled, tickets use Discord channel IDs.

### Claim System

Allow staff to claim tickets. When enabled:
- Staff can use `/claim` to take ownership of a ticket
- Points are awarded when a ticket is claimed
- Only the claimer can close the ticket (unless overridden by Ticket Manager role)

### Ticket Confirmation

Show a confirmation dialog before opening a ticket. Users see ephemeral Confirm/Cancel buttons. If they don't respond within 30 seconds, the ticket auto-opens.

### Priority System

Enable ticket priority levels (Low, Normal, Medium, High, Urgent, Critical, Emergency). Staff can set priority when claiming or managing tickets.

---

## Limits

### Max Tickets Per User

Maximum number of open tickets a single user can have. Set to 0 for unlimited.

---

## Points System

### Points Per Claim

Points awarded to staff when they claim a ticket.

### Points Per Close

Additional points awarded to staff when they close a ticket.

Points are used for the staff leaderboard and gamification.

---

## Commands

### Disabled Commands

Disable specific slash commands for your server. Useful if you want to restrict certain functionality.

### Command Permissions

Set which roles can use specific commands. Options:
- **Everyone** — All server members
- **Staff Only** — Only configured staff roles
- **Admin Only** — Only users with admin permissions

---

## Logging

### Log Channel

Channel where bot logs are sent. Includes:
- Ticket opens/closes
- Staff claims
- Settings changes
- Error events

### Transcript Channel

Channel where ticket transcripts are sent when tickets close.

---

## Auto-Close

### Auto-Close Inactive Tickets

Automatically close tickets after X hours of inactivity.

### Auto-Close After

Number of hours before auto-close triggers (max 168 hours = 7 days).

---

## Customization

### Custom Avatar

Set a custom avatar for the bot in this server (Premium only).

### Custom Banner

Set a custom banner for the bot's profile (Premium only).

### Custom Bio

Set a custom "About Me" for the bot's profile (Premium only, max 190 characters).

### Custom Nickname

Set a custom nickname for the bot in this server (Premium only, max 32 characters).

---

## Save Settings

Click **Save All Settings** at the top of the settings page to apply changes. Some changes (like bot profile customization) may take up to 2 minutes to take effect due to Discord rate limits.
