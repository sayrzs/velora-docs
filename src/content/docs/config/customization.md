# Customization *(Premium)*

Make the bot look like it belongs to your server. All visual customization options require a Premium or Pro plan.

---

## Embed Colors

Set a custom hex color for all ticket embeds. The default is Discord blurple (`#5865F2`).

Change it in **Dashboard → Customization → Embed Color**.

---

## Button Styles

Choose the default style for ticket action buttons:

| Style     | Color  | Use case                       |
|-----------|--------|-------------------------------|
| Primary   | Blue   | Default, most visible          |
| Secondary | Gray   | Subtle, less emphasis          |
| Success   | Green  | Positive actions (e.g. reopen) |
| Danger    | Red    | Destructive actions (e.g. delete) |

---

## Custom Emojis

Replace default Unicode emojis with your server's custom emojis in ticket messages. Use the emoji picker in the dashboard to browse your server's emoji list.

Format reference:
- Static emoji: `<:name:id>`
- Animated emoji: `<a:name:id>`

:::note
Custom emojis must belong to a server the bot is in. Application emojis (owned by the bot) always work regardless of server.
:::

---

## Welcome Message

Each category has its own welcome message sent when the ticket opens. Supports all placeholder variables:

| Variable      | Value                                  |
|---------------|----------------------------------------|
| `{user}`      | Mentions the ticket opener             |
| `{ticket-no}` | Formatted ticket number (e.g. `#0042`) |
| `{category}`  | Category name                          |
| `{server}`    | Server name                            |

---

## Close Message

A custom message sent to the ticket channel when it's closed. Configured in **Settings → Close Message**.

---

## Transcript Footer

Customize the footer text in HTML transcripts. Defaults to `Velora Tickets • {server}`.

---

## Bot Profile *(Pro only)*

Pro plan users can customize the bot's appearance per server:

| Setting  | Description                                                 |
|----------|-------------------------------------------------------------|
| Nickname | Server-specific nickname applied instantly                  |
| Avatar   | Custom bot avatar *(applies globally to the bot account)*   |
| Banner   | Profile banner image *(global)*                             |
| Bio      | Up to 190 characters shown on the bot's Discord profile     |

:::warning
Avatar and banner changes apply **globally** to the bot account, not per-server. If multiple servers customize the avatar, the last one to save wins. Nickname is always per-server.
:::
