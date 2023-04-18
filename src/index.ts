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
  colors.info(`User ${vote.user} voted for the bot!`);
}));

fastify.listen({ port: 3000, host: "0.0.0.0" }, err => {
  if (err) throw err;
  colors.success("Server listening at http://0.0.0.0:3000");
});