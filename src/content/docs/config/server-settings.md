---
title: Server Settings
---

# Settings Reference

Every configurable setting in the dashboard, explained.

---

## General

| Setting              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Bot Language         | Language for all bot messages: English, Arabic, Spanish, French, Dutch      |
| Ticket Numbering     | Sequential numbers (#0001, #0002…). Off = random 4-digit number             |
| Max Tickets Per User | How many open tickets one user can have simultaneously across the server    |
| Ticket Confirmation  | Shows a confirm/cancel prompt before opening. Auto-opens after 30 seconds  |

---

## Ticket Behavior

| Setting            | Description                                                                    |
|--------------------|--------------------------------------------------------------------------------|
| Claim System       | Enables the **Claim** button on tickets                                        |
| Priority System    | Enables priority levels (Low → Urgent) on tickets *(Premium)*                 |
| Allow User Close   | Lets the ticket opener close their own ticket. Off = staff only                |
| Summon Support     | Shows a 🔔 button — pings support roles once per 5 minutes, owner-only        |
| Auto-Close         | Automatically closes inactive tickets after a configurable number of hours     |
| Auto-Rename        | Renames channel to `closed-XXXX` when a ticket is closed                       |

---

## Channels

| Setting              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Log Channel          | All ticket events (open, close, claim, delete) posted here as embeds        |
| Transcript Channel   | HTML transcript files sent here when tickets close                           |
| Closed Category      | Closed tickets are moved to this Discord category channel                    |

---

## Staff & Roles

| Setting               | Description                                                              |
|-----------------------|--------------------------------------------------------------------------|
| Staff Role            | Single staff role — can see tickets, claim, and use staff commands       |
| Support Roles         | Additional staff roles — same permissions, supports multiple roles       |
| Ticket Manager Role   | Can force-unclaim any ticket and manage all tickets                      |
| Admin Roles           | Full dashboard access and all bot permissions                            |

:::note
You can configure multiple support roles. All configured roles are checked on every permission-sensitive action.
:::

---

## Points System

| Setting          | Description                                            |
|------------------|--------------------------------------------------------|
| Points per Claim | Points awarded when a staff member claims a ticket     |
| Points per Close | Points awarded when a staff member closes a ticket     |

---

## SLA *(Premium)*

| Setting                 | Description                                                       |
|-------------------------|-------------------------------------------------------------------|
| Response Time Target    | Minutes until first staff response is expected                    |
| Resolution Time Target  | Minutes until ticket should be closed                             |
| Breach Warnings         | Bot warns at 80% of target and again at breach                    |

---

## Close Message

A custom message sent inside the ticket when it's closed. Supports the same variables as the welcome message (`{user}`, `{ticket-no}`, etc.).
