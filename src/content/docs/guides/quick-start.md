---
title: Quick Start
---

# Quick Start

Get your first ticket panel running in under 5 minutes.

---

## 1. Invite the Bot

Click the invite link and select your server. Grant all requested permissions — the bot needs `Manage Channels`, `Send Messages`, `Manage Roles`, and `Read Message History` at minimum.

:::tip
Grant **Administrator** permission during setup to avoid missing permission issues. You can restrict it later once everything is configured.
:::

---

## 2. Run /setup

After inviting the bot, run the setup wizard in any channel:

```
/setup
```

This creates your default guild settings, registers all slash commands, and walks you through configuring your first staff role.

:::note
You need **Administrator** permission to run `/setup`. Regular members and staff cannot use this command.
:::

---

## 3. Create a Category

Go to your dashboard → **Categories** → **Create Category**.

Fill in:
- **Name** — displayed on the button/dropdown (e.g., "General Support")
- **Emoji** — shown next to the name (e.g., 🎫)
- **Color** — used for the ticket embed accent
- **Description** — shown in the panel dropdown
- **Welcome Message** — sent inside the ticket when it opens

---

## 4. Create a Panel

Go to **Panels** → **Create Panel**. Set a name, color, and description. Then add the category you just created.

Two panel types are available:
- **Button Panel** — one button per category, best for 1–5 categories
- **Select Panel** — dropdown menu, best for 6+ categories

---

## 5. Send the Panel to a Channel

From the panel editor, click **Send to Channel** and select the channel where users should open tickets. The bot posts a permanent embed with your buttons or dropdown.

:::warning
If you edit the panel after sending it, click **Resend** to update the live message. The old message is deleted and a new one is posted in its place.
:::

---

## 6. Open Your First Ticket

Click a button (or select a category from the dropdown) in the panel. A private ticket channel is created instantly. Only the ticket opener, configured staff roles, and the bot can see it.

:::tip
Test with a non-staff account to make sure the opening flow works as expected before announcing it to your community.
:::

---

## What's Next?

- [Configure Categories →](/features/categories-panels)
- [Set Up Staff Roles →](/features/staff-management)
- [Customize Panel Appearance →](/config/customization)
