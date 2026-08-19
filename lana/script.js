// Put Lana's real Discord links here.
const INVITE_URL =
  "https://discord.com/api/oauth2/authorize?client_id=1539185950159016007&permissions=8&scope=bot%20applications.commands";

const DISCORD_URL = "https://discord.gg/B4SuQfKBTf";

document.querySelectorAll("[data-invite]").forEach((link) => {
  link.href = INVITE_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll("[data-discord]").forEach((link) => {
  link.href = DISCORD_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
