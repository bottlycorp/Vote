import { BColors } from "bettercolors";
import { getStringEnv } from "./utils/env-variables";
import Topgg from "@top-gg/sdk";
import express from "express";

const app = express();

const colors = new BColors({
  date: {
    enabled: true,
    format: "DD/MM/YYYY - HH:mm:ss",
    surrounded: "[]"
  }
});

const webhook = new Topgg.Webhook(getStringEnv("TOPGG_TOKEN"));

app.post(
  "/dblwebhook",
  webhook.listener((vote) => {
    console.log(vote.user);
  })
);

app.listen(3000);
colors.info("Webhook server is now listening on port http://0.0.0.0:3000");