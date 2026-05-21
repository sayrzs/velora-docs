---
title: Ticket Panels
---

# Ticket Panels

Panels are the entry point for users to open tickets. They live in a channel as a persistent embed and stay there permanently.

---

## Panel Types

### Button Panels

Show one button per category. Best for servers with **1–5 categories**. Each button can be given a custom label, emoji, and Discord button style (Primary, Secondary, Success, Danger).

When a user clicks a button:
1. If **confirmation** is enabled → an ephemeral prompt appears with Confirm / Cancel buttons (auto-opens after 30 seconds)
2. If the category has **questions** → a modal pops up for the user to fill in
3. The ticket channel is created

### Select Panels

Show a single dropdown menu listing all categories. Better for servers with **6+ categories** — keeps the channel clean.

:::tip
Select panels skip the confirmation step entirely — the ticket opens as soon as the user picks a category from the dropdown.
:::

---

## Creating a Panel

1. Go to **Dashboard → Panels → Create Panel**
2. Set a **name**, **description**, and **color**
3. Add categories from your server's category list
4. Configure button styles and emojis per category (optional)
5. Click **Save**

---

## Sending a Panel

From the panel editor, click **Send to Channel** and pick the target channel.

The bot posts the embed and stores the message ID. If you later edit the panel:
- Click **Resend** to refresh the live message
- The old embed is deleted and a new one is posted

:::warning
Deleting the embed message manually from Discord will **not** update the dashboard. Always use **Resend** to refresh a panel.
:::

---

## Limits

| Plan     | Panels | Categories per panel |
|----------|--------|----------------------|
| Free     | 3      | 25                   |
| Starter  | ∞      | 25                   |
| Pro      | ∞      | 25                   |

The 25-category limit per panel is enforced by Discord's component API.

---

## V2 Block Panels (Advanced)

Pro servers can use the Components V2 layout engine for richer panel designs — custom containers, text blocks, and styled action rows. Configure this from the **Panel Builder** in the dashboard.
