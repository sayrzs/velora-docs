---
title: Error Reference
---

# Error Reference

All error codes the bot can return, what they mean, and how to fix them.

---

## Tickets

| Code              | Message                                   | Trigger                              | Fix                                                   |
|-------------------|-------------------------------------------|--------------------------------------|-------------------------------------------------------|
| `ticketLimit`     | You've reached the max open tickets       | User already has max open tickets    | Close existing tickets or raise the limit in settings |
| `alreadyClaimed`  | This ticket is already claimed by X       | Claim on an already-claimed ticket   | Unclaim first, or wait for the claimer to release it  |
| `ownTicket`       | You can't claim your own ticket           | Staff claiming their own ticket      | Have another staff member claim it                    |
| `alreadyClosed`   | This ticket is already closed             | Action on a closed ticket            | Reopen the ticket first                               |
| `notInChannel`    | This command can only be used in a ticket | Command used outside a ticket        | Run the command inside a ticket channel               |

---

## Permissions

| Code        | Message                                | Trigger                                       | Fix                                                |
|-------------|----------------------------------------|-----------------------------------------------|----------------------------------------------------|
| `noPermission` | You don't have permission           | Non-staff trying a staff action               | Assign the correct staff role in Settings          |
| `staffOnly` | Only staff can do this                 | Action requires staff role                    | Assign the correct staff role in Settings          |
| `adminOnly` | Only administrators can do this        | Action requires Administrator permission      | Ensure the user has Administrator in Discord       |
| `blacklisted` | You are not allowed to open tickets  | User has a blacklisted role for this category | Remove the blacklisted role or change the settings |

---

## Panels

| Code             | Message                          | Trigger                              | Fix                                                        |
|------------------|----------------------------------|--------------------------------------|------------------------------------------------------------|
| `categoryDisabled` | This category is currently disabled | Category has been toggled off   | Enable the category from Dashboard → Categories             |
| `noCategory`     | Category not found               | Category was deleted after panel sent | Reassign categories to the panel and resend                |
| `panelSendFailed`| Failed to send panel             | Bot missing channel permissions      | Give bot `Send Messages` and `Embed Links` in that channel |

---

## Shifts

| Code           | Message                                            | Trigger                    | Fix                                                |
|----------------|----------------------------------------------------|----------------------------|----------------------------------------------------|
| `alreadyShift` | You already have an active shift running           | `/shift start` twice       | End your current shift first with `/shift end`     |
| `minimumShift` | You need to be on shift for at least 1 hour        | `/shift end` too early     | Wait until you've been on shift for 1 hour         |
| `shiftNoActive`| You don't have an active shift to end              | `/shift end` with no shift | Start a shift first with `/shift start`            |

---

## Priority

| Code                | Message                                          | Trigger                             | Fix                                                     |
|---------------------|--------------------------------------------------|-------------------------------------|---------------------------------------------------------|
| `alreadyMaxPriority`| This ticket is already set to Urgent             | Escalating an already-urgent ticket | No action needed — already at maximum                  |
| `priorityInvalid`   | Invalid priority level                           | Unsupported priority value entered  | Use: `low`, `normal`, `medium`, `high`, or `urgent`     |

---

## Notes & Tags

| Code        | Message                     | Trigger                              | Fix                                             |
|-------------|-----------------------------|--------------------------------------|-------------------------------------------------|
| `noteFailed`| Failed to save note         | Database write error                 | Try again; if persistent, contact support       |
| `tagNotFound`| Tag not found              | Tag name doesn't match any saved tag | Check tag name with `/tags list`                |

---

## Archive

| Code              | Message                          | Trigger                              | Fix                                                  |
|-------------------|----------------------------------|--------------------------------------|------------------------------------------------------|
| `alreadyArchived` | This ticket is already archived  | Archiving an already-archived ticket | Use `/archive restore` if you need to un-archive it  |
| `archiveNotFound` | Archived ticket not found        | Restore with wrong ticket number     | Check the number with `/archive list`                |

---

:::tip
Most errors include the exact issue in the message itself. If you see a persistent error not listed here, join the [support server](https://discord.gg/tHwtjXhUHf) and share the error code and context.
:::
