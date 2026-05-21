# Webhooks

Configure external webhooks to receive ticket events.

---

## Overview

Ticket-v2 can send HTTP POST requests to external URLs when specific events occur. This is useful for:
- Integrating with external systems
- Sending notifications to other services
- Logging events to external databases
- Custom automation workflows

---

## Configuration

Webhooks are configured per-guild in the dashboard under **Settings → Webhooks**.

### Webhook Fields

- **URL** - The endpoint to send events to
- **Events** - Which events to trigger this webhook
- **Secret** - Optional secret for signature verification
- **Active** - Enable/disable the webhook

---

## Supported Events

| Event | Description |
|---|---|
| `ticket.opened` | A new ticket is created |
| `ticket.closed` | A ticket is closed |
| `ticket.claimed` | A ticket is claimed by staff |
| `ticket.message` | A message is sent in a ticket |
| `staff.shift.start` | A staff member starts their shift |
| `staff.shift.end` | A staff member ends their shift |

---

## Webhook Payload

All webhook payloads follow this structure:

```json
{
  "event": "ticket.opened",
  "timestamp": "2024-01-15T10:30:00Z",
  "guildId": "guild-123",
  "data": {
    "ticketId": "ticket-456",
    "channelId": "channel-789",
    "userId": "user-101",
    "categoryId": "cat-1"
  },
  "signature": "sha256=..."
}
```

### Event-Specific Data

#### ticket.opened
```json
{
  "ticketId": "ticket-456",
  "channelId": "channel-789",
  "userId": "user-101",
  "categoryId": "cat-1",
  "answers": [
    {
      "question": "What is your issue?",
      "answer": "I need help with..."
    }
  ]
}
```

#### ticket.closed
```json
{
  "ticketId": "ticket-456",
  "closedBy": "user-202",
  "reason": "Resolved",
  "duration": 3600
}
```

#### ticket.claimed
```json
{
  "ticketId": "ticket-456",
  "claimedBy": "user-202",
  "claimedAt": "2024-01-15T10:35:00Z"
}
```

---

## Signature Verification

If you configure a secret for your webhook, Ticket-v2 includes a signature header:

```
X-Ticket-Signature: sha256=abc123...
```

To verify the signature:

```javascript
const crypto = require('crypto');

const verifySignature = (payload, signature, secret) => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = `sha256=${hmac.digest('hex')}`;
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
};
```

---

## Retry Policy

If a webhook endpoint returns a non-2xx status code or times out, Ticket-v2 will retry:

- **Retry attempts:** 3
- **Retry delay:** Exponential backoff (1s, 5s, 15s)
- **Timeout:** 10 seconds per request

After 3 failed attempts, the webhook is marked as failed and can be retried manually from the dashboard.

---

## Best Practices

1. **Use HTTPS** - Always use HTTPS endpoints for webhooks
2. **Verify signatures** - Always verify webhook signatures if configured
3. **Respond quickly** - Your endpoint should respond within 5 seconds
4. **Return 2xx on success** - Return any 2xx status code to acknowledge receipt
5. **Handle duplicates** - Implement idempotency to handle duplicate webhook deliveries

---

## Example Implementation

```javascript
const express = require('express');
const crypto = require('crypto');

const app = express();
const WEBHOOK_SECRET = 'your-secret-here';

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-ticket-signature'];
  
  // Verify signature
  if (WEBHOOK_SECRET) {
    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
    hmac.update(req.body);
    const expectedSignature = `sha256=${hmac.digest('hex')}`;
    
    if (signature !== expectedSignature) {
      return res.status(401).send('Invalid signature');
    }
  }
  
  const payload = JSON.parse(req.body.toString());
  
  // Handle event
  switch (payload.event) {
    case 'ticket.opened':
      console.log('New ticket opened:', payload.data.ticketId);
      break;
    case 'ticket.closed':
      console.log('Ticket closed:', payload.data.ticketId);
      break;
  }
  
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```
