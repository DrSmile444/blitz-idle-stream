# WOT Blitz Idle Stream Bot

This bot logins into your WarGaming account and opens the stream.
It supports several accounts and streams.

## Start

1) Fill `config.example.json` and copy into `config.json`:

```json
{
  "users": [
    {
      "login": "email@gmail.com",
      "password": "your_password"
    }
  ],
  "streams": [
    "https://eu.wotblitz.com/en/tournaments/streams/554/#/",
    "https://eu.wotblitz.com/en/tournaments/streams/555/#/"
  ]
}
```

2) Run `npm start`
