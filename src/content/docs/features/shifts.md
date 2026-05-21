---
title: Shifts
---

# Shifts

Track when staff are actively on duty. Shifts record start/end times and help you understand coverage, hours worked, and staff availability.

:::note
Shifts is a **Premium** feature.
:::

---

## Starting & Ending Shifts

Staff can manage shifts in two ways:

### Via Shift Panel (recommended)

Send a persistent shift panel to a staff-only channel from **Dashboard → Settings → Shift Panel**. Staff use the dropdown to start or end their shift — no commands needed.

### Via Slash Commands

```
/shift start    — clock in and begin your shift
/shift end      — clock out and end your active shift
/shift status   — check current shift status and today's hours
```

:::warning
Minimum shift duration is **1 hour**. Shifts shorter than 1 hour are not recorded in analytics.
:::

---

## Availability Status

Staff can set their availability status during a shift:

- **Available** — ready to take tickets
- **Busy** — on a ticket, less available
- **Away** — stepped away temporarily

The status is shown in the shift panel UI and available via the `/shift status` command.

---

## Shift Analytics

The **Shifts** dashboard page shows:

- **Active Now** — staff currently on shift with start time
- **Shift History** — past shifts with duration and timestamps
- **Hours per Staff** — total hours worked per staff member
- **Coverage Chart** — heatmap of shift coverage by hour of day

:::tip
Export shift data as CSV from the Shifts dashboard for payroll or reporting.
:::

---

## Shift Panel Security

The shift panel only responds to users with configured staff roles. Non-staff members who see the panel (if it's in a public channel) cannot start or end shifts — the bot verifies permissions before every action.
