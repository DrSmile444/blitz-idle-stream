# WOT Blitz Idle Stream Bot

This bot logins into your WarGaming account and opens the stream.
It supports several accounts and streams.

## Start

1) Fill `config.example.json`:

```json
{
  "users": [
    {
      "login": "email@gmail.com",
      "password": "your_password"
    }
  ],
  "streams": [
    "https://ru.wotblitz.com/en/tournaments/streams/220/#/",
    "https://ru.wotblitz.com/en/tournaments/streams/221/#/"
  ]
}
```

2) Run `npm start`
