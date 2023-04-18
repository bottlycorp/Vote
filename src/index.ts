import { BColors } from "bettercolors";
import { getStringEnv } from "./utils/env-variables";

const fastify = require("fastify")();
const Topgg = require("@top-gg/sdk");

const webhook = new Topgg.Webhook(getStringEnv("TOPGG_TOKEN"));

const colors = new BColors({
  date: {
    enabled: true,
    format: "DD/MM/YYYY HH:mm:ss",
    surrounded: "[]"
  }
});

fastify.post("/dblwebhook", webhook.listener((vote) => {
  colors.info(`User ${vote.user} voted for the bot!`);
  return "Thanks for the vote!";
}));

fastify.post("/test", (req, res) => {
  colors.success("Test");
  res.send("Test");
});

fastify.listen({ port: 3000, host: "0.0.0.0" }, err => {
  if (err) throw err;
  colors.success("Server listening at http://0.0.0.0:3000");
});