# AWS Amplify Discord Bot

A professional Discord bot built with **TypeScript** and **discord.js** that helps users learn and use **AWS Amplify** directly from a Discord server. The bot provides modern **slash commands**, auto-complete, and structured responses following Discord’s latest interaction model.

This project is designed as a **serious foundation-level project** that demonstrates real-world tooling, APIs, and clean project structure.

---

##  What This Project Does

The bot acts as an **AWS Amplify helper** inside Discord. Users can run slash commands to:

* Learn what AWS Amplify is
* Get installation instructions for Amplify CLI
* See deployment steps
* Get help with common Amplify errors

All interactions are handled using **Discord Slash Commands** (not message-based commands).

---

## Features

* ✅ Discord Slash Commands (`/amplify ...`)
* ✅ Auto-complete and command discovery
* ✅ Built with TypeScript
* ✅ Uses discord.js v14 (modern API)
* ✅ Secure token handling with environment variables
* ✅ Clean and beginner-friendly project structure

### Available Commands

```
/amplify help
/amplify intro
/amplify install
/amplify deploy
/amplify error push-failed
```

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Runtime:** Node.js
* **Library:** discord.js v14
* **API:** Discord Interactions (Slash Commands)
* **Tooling:** ts-node, dotenv

---

## 📁 Project Structure

```
project-root/
│
├── src/
│   ├── index.ts              # Bot logic & interaction handling
│   ├── registerCommands.ts   # Slash command registration
│
├── .env                      # Environment variables (not committed)
├── package.json
├── tsconfig.json
├── README.md
```

---

##  Environment Variables

Create a `.env` file in the project root:

```
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_discord_application_id
```

⚠️ Never commit `.env` to GitHub.

---

## ▶️ How to Run Locally

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Register slash commands (one time)

```bash
npx ts-node src/registerCommands.ts
```

### 3️⃣ Start the bot

```bash
npx ts-node src/index.ts
```

If successful, you will see:

```
✅ Logged in as <BotName>#1234
```

---

##  What This Project Demonstrates

This project shows understanding of:

* Event-driven programming
* Discord API & interactions
* Slash command architecture
* Secure credential handling
* Professional project setup

It is **not a toy project**, but also **not a large-scale system**. It serves as a **strong foundation** for more advanced cloud or backend features.

---

##  Current Limitations

* No database or persistent storage
* No cloud deployment (runs locally)
* No CI/CD pipeline
* No role-based permissions

These are intentional and left as future improvements.

---

##  Possible Future Improvements

* Deploy bot to AWS (EC2 / Docker)
* Add database (DynamoDB / PostgreSQL)
* Fetch live AWS Amplify documentation
* Add AI-powered answers
* Add logging & monitoring
* Add per-server configuration

---

##  Learning Status

This project represents a **mid-level foundation milestone**:

* Beyond beginner tutorials
* Uses real-world tools and patterns
* Ready to be expanded into a larger system

This project is for learning and educational purposes.

---

## Acknowledgement

Built as a guided learning project to understand **modern Discord bot development** and **real-world TypeScript usage**.
