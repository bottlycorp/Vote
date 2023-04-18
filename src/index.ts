import { BColors } from "bettercolors";

const fastify = require("fastify")();
const Topgg = require("@top-gg/sdk");

const webhook = new Topgg.Webhook("topggauth123");

const colors = new BColors({
  date: {
    enabled: true,
    format: "DD/MM/YYYY HH:mm:ss",
    surrounded: "[]"
  }
});

fastify.post("/dblwebhook", webhook.listener((vote) => {
  colors.log(`User ${vote.user} voted for the bot!`);
}));

fastify.listen(3000, (err: any) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  colors.log("Server listening on port 3000");
});