import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Command map (clean structure)
const commands: Record<string, string> = {
  "/amplify hello": "👋 Hello! I am your AWS Amplify helper bot.",

  "/amplify intro":
    "📦 **AWS Amplify** helps you build full-stack web and mobile apps easily using AWS.",

  "/amplify help": `
📘 **Amplify Bot – Help**

Available commands:

/amplify hello → Greet the bot  
/amplify intro → What is AWS Amplify?  
/amplify help  → Show this help message  
`,
  "/amplify install":
    "🛠️ **Install AWS Amplify CLI**\n\n1️⃣ Install Node.js (v18+)\n2️⃣ Run:\n```bash\nnpm install -g @aws-amplify/cli\n```\n3️⃣ Verify:\n```bash\namplify --version\n```",

  "/amplify deploy":
    "🚀 **Deploy with AWS Amplify**\n\n1️⃣ Configure AWS:\n```bash\namplify configure\n```\n2️⃣ Initialize project:\n```bash\namplify init\n```\n3️⃣ Push backend:\n```bash\namplify push\n```",

  "/amplify error push-failed":
    "❌ **Amplify Push Failed – Common Fixes**\n\n✅ Check AWS credentials\n✅ Run `amplify status`\n✅ Try `amplify pull`\n✅ Ensure correct region\n\nIf still failing, delete `#current-cloud-backend` and retry.",

  "/amplify docs auth":
    "🔐 **Amplify Auth (Authentication)**\n\nSupports:\n• Email/Password\n• Social login\n• MFA\n\nDocs:\nhttps://docs.amplify.aws/react/build-a-backend/auth/",
};

// Bot ready
client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user?.tag}`);
});

// Message listener
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const reply = commands[message.content];

  if (reply) {
    message.reply(reply);
  }
});

// Login
client.login(process.env.DISCORD_TOKEN);
