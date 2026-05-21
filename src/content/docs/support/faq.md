---
title: FAQ
---

# FAQ

Frequently asked questions about Velora Tickets.

---

## Setup

**Why can't I run /setup?**
You need **Administrator** permission in the server. Regular members and even some admins without the Administrator flag cannot run it.

---

**The bot joined but I don't see any slash commands. What do I do?**
Slash commands can take up to 1 hour to propagate globally after the bot joins. If it's been longer than that, run `/setup` which re-registers them, or kick and re-invite the bot.

---

**The bot can't create ticket channels. What permissions does it need?**

At minimum: `View Channels`, `Manage Channels`, `Send Messages`, `Embed Links`, `Read Message History`, `Manage Roles`. For easiest setup, grant `Administrator` during initial configuration.

---

## Tickets

**Can a user open tickets in multiple categories at the same time?**
Yes. The `Max Tickets Per User` limit applies per server, not per category. A user can have one ticket in each category simultaneously if they haven't hit the server limit.

---

**How do I stop a specific user from opening tickets?**
Add their role to the **Blacklisted Roles** list on the category. For server-wide blocking, you'd need to restrict their access to the panel channel via Discord channel permissions.

---

**Ticket channels aren't being hidden from other members after close. Why?**
The bot updates channel permissions on close. If it's failing, check that the bot has `Manage Channels` and `Manage Roles` permissions, and that its role is higher than the roles being modified in the role hierarchy.

---

**How do transcripts work?**
When a ticket closes, the bot generates an HTML transcript of all messages and attachments. It's sent to:
- The ticket opener via DM
- The configured Transcript Channel (if set)
- The configured Log Channel (if set)

Transcripts are also viewable from the dashboard under **Tickets → [ticket] → View Transcript**.

---

## Staff

**A staff member lost their role. Can they still interact with tickets?**
No. All permission checks happen at the moment of the interaction, not when the bot was started or when the ticket was opened. If a user loses their staff role, the next action they try will be denied.

---

**Why does a non-staff member appear in the staff leaderboard?**
This was a bug fixed in v2.2.0. Regular members who closed their own tickets (when `allowUserClose` was enabled) were incorrectly added to the `StaffMember` table. After the update, only users with actual staff roles are tracked. Any incorrectly-added records can be removed by an admin via the dashboard.

---

## Panels

**I edited my panel but the Discord message didn't update.**
Editing a panel in the dashboard doesn't automatically update the live Discord message. Click **Resend** in the panel editor to push the changes.

---

**The panel message got deleted. How do I re-send it?**
Open the panel in the dashboard and click **Send to Channel** again. It will post a fresh panel message.

---

## Premium

**How do I activate Premium on my server?**
After purchasing, contact support in the [Discord server](https://discord.gg/tHwtjXhUHf) with your server ID (or have an admin run `/ping` to display it). Premium is applied per-server.

---

**Can I transfer Premium to a different server?**
Contact support. Transfers are handled case by case.

---

:::tip
Didn't find your answer? Ask in the [support server](https://discord.gg/tHwtjXhUHf) — typically answered within a few hours.
:::
