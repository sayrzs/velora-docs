# Analytics *(Premium)*

Track ticket volume, staff performance, and user feedback with real-time charts and exportable data.

---

## Ticket Analytics

Available in **Dashboard → Analytics**:

- **Ticket Volume** — daily/weekly/monthly ticket count over time
- **Open vs Closed** — ratio of open vs closed tickets
- **Peak Hours** — heatmap showing the busiest hours for tickets
- **Category Distribution** — breakdown of tickets by category
- **Priority Distribution** — breakdown by priority level *(if priority system is enabled)*

---

## Staff Performance

Per-staff metrics shown on the **Staff** analytics tab:

| Metric             | Description                                              |
|--------------------|----------------------------------------------------------|
| Claimed            | Total tickets claimed by this staff member               |
| Closed             | Total tickets closed by this staff member                |
| Avg Response Time  | Average time from ticket open to first staff message     |
| Avg Resolution Time| Average time from ticket open to ticket close            |
| Points             | Current points balance                                   |
| Avg Rating         | Average star rating received from users (1–5)            |

---

## Feedback & Ratings

When a ticket closes, the opener receives a **1–5 star rating prompt** via DM. The Feedback tab shows:

- **Average Rating** — server-wide average
- **Rating Distribution** — bar chart of 1–5 star breakdown
- **Trends** — rating trend over the selected time period
- **Per-Staff Ratings** — average ratings received by each staff member

:::note
Users can only rate once per ticket. Ratings are anonymous — the staff member doesn't see who rated them.
:::

---

## SLA Metrics *(Premium)*

The SLA tab tracks how well your team meets response and resolution time targets:

- **Response Rate** — percentage of tickets with first response before target
- **Resolution Rate** — percentage of tickets resolved before target
- **Breach Events** — list of tickets that exceeded SLA targets
- **Per-Category SLA** — performance breakdown by ticket category

---

## AI Analytics *(Pro)*

Pro plan users get AI-generated staff performance reports powered by NVIDIA AI models:

- **Performance Summary** — natural language summary of the period
- **Improvement Suggestions** — AI recommendations for reducing response times
- **Anomaly Detection** — flags unusual patterns in ticket volume or response times
- **Staff Coaching Insights** — per-staff improvement areas

:::note
AI Analytics requires the NVIDIA API integration to be enabled on your server. Go to **Analytics → AI Setup** to configure it.
:::

---

## Exporting Data

All analytics data can be exported as **CSV** from the dashboard. Shift data, ticket logs, and staff performance exports are available under their respective pages.
