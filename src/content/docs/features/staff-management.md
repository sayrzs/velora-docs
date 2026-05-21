# Staff Management

Configure who counts as staff, how claims work, and how points are tracked.

---

## Role Hierarchy

Ticket-v2 uses four permission levels configured in **Settings → Staff & Roles**:

| Role               | Can do                                                      |
|--------------------|-------------------------------------------------------------|
| Staff Role         | See tickets, respond, claim, use staff commands             |
| Support Roles      | Same as Staff Role — supports multiple roles simultaneously |
| Ticket Manager     | Force-unclaim any ticket, manage all tickets                |
| Admin Roles        | Full access including dashboard configuration               |

:::tip
Discord **Administrators** and the **guild owner** always bypass all role checks regardless of configuration.
:::

All role checks are enforced at runtime inside the bot — they cannot be bypassed via Discord's Server Settings → Integrations.

---

## Claiming Tickets

When the **Claim System** is enabled, staff can click **Claim** on any open ticket. Rules:

- Only one staff member can hold a claim at a time
- The claimer's name appears in the ticket header
- Only the claimer (or a Ticket Manager) can unclaim
- Staff who lose their role cannot unclaim tickets they previously claimed

---

## Points System

Staff earn points for ticket activity:

| Action      | Default Points |
|-------------|---------------|
| Claim       | 10            |
| Close       | configurable  |

Configure the points per action in **Settings → Points System**.

```
/leaderboard         — server leaderboard ranked by points
/points              — your own points balance
/points set @user 50 — manually set a staff member's points (Admin only)
```

---

## Staff Leaderboard

The `/leaderboard` command and the **Staff** page in the dashboard show a ranked list of staff sorted by points. Only users with actual staff roles appear — regular members cannot appear in the leaderboard regardless of past activity.

---

## Staff Statistics

The Staff dashboard page shows per-member stats:

- **Claimed** — total tickets claimed
- **Closed** — total tickets closed
- **Points** — current points balance
- **Avg Rating** — average star rating received from users
- **Shift Hours** — total hours on shift (requires Shifts feature)
- **Last Active** — timestamp of last staff action
