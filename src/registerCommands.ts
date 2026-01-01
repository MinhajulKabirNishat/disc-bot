import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

const commands = [
  {
    name: "amplify",
    description: "AWS Amplify helper commands",
    options: [
      {
        name: "help",
        description: "Show help information",
        type: 1,
      },
      {
        name: "intro",
        description: "What is AWS Amplify?",
        type: 1,
      },
      {
        name: "install",
        description: "Install AWS Amplify CLI",
        type: 1,
      },
      {
        name: "deploy",
        description: "Deploy with Amplify",
        type: 1,
      },
      {
        name: "error",
        description: "Fix common Amplify errors",
        type: 1,
        options: [
          {
            name: "type",
            description: "Error type",
            type: 3,
            required: true,
            choices: [{ name: "push-failed", value: "push-failed" }],
          },
        ],
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN as string
);

(async () => {
  try {
    console.log("🔁 Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID as string),
      { body: commands }
    );

    console.log("✅ Slash commands registered");
  } catch (error) {
    console.error(error);
  }
})();
