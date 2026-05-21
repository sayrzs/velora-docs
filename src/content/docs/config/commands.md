# Commands Reference

All slash commands available in Velora Tickets. Every command enforces permissions server-side — Discord's Integrations settings cannot override them.

---

## Setup & Configuration

| Command               | Permission    | Description                                                              |
|-----------------------|---------------|--------------------------------------------------------------------------|
| `/setup`              | Administrator | Run the interactive setup wizard                                         |
| `/categories list`    | Administrator | View and manage all ticket categories                                    |
| `/categories create`  | Administrator | Create a new category via a modal                                        |
| `/categories delete`  | Administrator | Delete a category by name                                                |
| `/categories toggle`  | Administrator | Enable or disable a category without deleting it                         |
| `/questions add`      | Administrator | Add a question to a category (max 5)                                     |
| `/questions remove`   | Administrator | Remove a question from a category                                        |
| `/questions list`     | Administrator | List all questions for a category                                        |
| `/questions clear`    | Administrator | Remove all questions from a category                                     |
| `/shiftpanel`         | Manage Server | Post a persistent shift panel in the current channel                     |

---

## Ticket Actions

| Command                  | Permission | Description                                                         |
|--------------------------|------------|---------------------------------------------------------------------|
| `/ticket close [reason]` | Staff      | Close the current ticket with an optional reason                    |
| `/ticket claim`          | Staff      | Claim the current ticket                                            |
| `/ticket add @user`      | Staff      | Add a user to the current ticket channel                            |
| `/ticket remove @user`   | Staff      | Remove a user from the current ticket channel                       |
| `/ticket rename <name>`  | Staff      | Rename the ticket channel                                           |

---

## Priority *(Premium)*

| Command                | Permission | Description                                                        |
|------------------------|------------|--------------------------------------------------------------------|
| `/priority set <level>`| Staff      | Set priority: `low`, `normal`, `medium`, `high`, `urgent`          |
| `/priority view`       | Staff      | View the current priority level                                    |
| `/priority escalate`   | Staff      | Escalate priority by one level, pings admins at high/urgent        |

---

## Notes & Archive

| Command                    | Permission | Description                                                    |
|----------------------------|------------|----------------------------------------------------------------|
| `/note add <text>`         | Staff      | Add an internal staff note (not visible to ticket opener)      |
| `/note list`               | Staff      | View all notes for the current ticket                          |
| `/archive ticket`          | Staff      | Archive a closed ticket                                        |
| `/archive restore <number>`| Staff      | Restore an archived ticket                                     |
| `/archive list`            | Staff      | List all archived tickets                                      |

---

## Tags

| Command          | Permission | Description                                              |
|------------------|------------|----------------------------------------------------------|
| `/tag <name>`    | Staff      | Send a quick-response tag in the current ticket          |
| `/tags use`      | Staff      | Send a tag by name                                       |
| `/tags list`     | Staff      | List all available tags for this server                  |

---

## Shifts

| Command         | Permission | Description                                              |
|-----------------|------------|----------------------------------------------------------|
| `/shift start`  | Staff      | Clock in and begin your shift                            |
| `/shift end`    | Staff      | Clock out and end your active shift                      |
| `/shift status` | Staff      | Check current shift status and today's total hours       |

---

## Stats & Utility

| Command                   | Permission    | Description                                         |
|---------------------------|---------------|-----------------------------------------------------|
| `/stats`                  | Everyone      | Your personal ticket statistics                     |
| `/leaderboard`            | Everyone      | Staff points leaderboard for this server            |
| `/points`                 | Everyone      | Check your current points balance                   |
| `/points set @user <n>`   | Administrator | Manually set a staff member's points                |
| `/help`                   | Everyone      | Summary of all commands and dashboard link          |
| `/ping`                   | Everyone      | Check bot latency and API response time             |

---

:::note
All permission checks happen inside the bot at runtime. Even if a server admin grants a command to everyone via Discord's Integrations settings, the bot still verifies the user's actual roles before executing anything.
:::
