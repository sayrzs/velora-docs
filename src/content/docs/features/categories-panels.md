---
title: Categories
---

# Categories

Categories define the type of ticket. Each category gets its own questions, welcome message, channel settings, and role configuration.

---

## Creating a Category

Go to **Dashboard → Categories → Create Category**, or use the slash command:

```
/categories create
```

Fill in:
- **Name** — displayed on the button/dropdown and as the ticket channel prefix
- **Emoji** — shown next to the name
- **Color** — used for the ticket embed accent
- **Description** — shown in the panel dropdown (select panels only)
- **Welcome Message** — sent inside the ticket when it opens

---

## Questions

You can add up to **5 questions** that users must answer before their ticket opens. The questions appear in a Discord modal.

Three question types are supported:

| Type   | Description                                         |
|--------|-----------------------------------------------------|
| Text   | Free-form text input (up to 1000 characters)        |
| Number | Numeric input with optional min/max validation      |
| Select | Dropdown with up to 10 predefined options           |

```
/questions add
/questions list
/questions remove
/questions clear
```

:::tip
After the user submits the modal, their answers are displayed in the ticket's welcome message. Use the `{answers}` variable to include them.
:::

---

## Welcome Message Variables

Use these placeholders in your welcome message — they're replaced automatically:

| Variable     | Replaced with                        |
|--------------|--------------------------------------|
| `{user}`     | Mentions the ticket opener           |
| `{ticket-no}`| Formatted ticket number (e.g. #0042) |
| `{category}` | Category name                        |
| `{server}`   | Server name                          |

---

## Required Roles

Users must have **at least one** of the configured required roles to open a ticket in this category. Leave empty to allow everyone.

---

## Ping Roles

Configured roles are mentioned when a ticket opens in this category. Useful for routing different ticket types to different teams.

---

## Per-Category Overrides

Each category can override global settings:

- **Allow User Close** — override the global close permission for this category only
- **Auto-Rename on Close** — rename channel to `closed-XXXX` when ticket closes
- **Closed Category Channel** — move ticket to a specific Discord category when closed
- **Blacklisted Roles** — prevent users with these roles from opening tickets here
- **Max Tickets Per User** — per-category ticket limit

---

## Enabling / Disabling

Disable a category without deleting it:

```
/categories toggle
```

Disabled categories remain in panels but show as unavailable. Users cannot open tickets in a disabled category.
