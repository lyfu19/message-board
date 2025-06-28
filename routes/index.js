const express = require("express");
const router = express.Router();
const db = require("../db/queries");

// 首页显示所有留言
router.get("/", async (req, res) => {
  const messages  = await db.getAllMessages();
  console.log("All msgs:", messages);
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

// GET /new 显示表单页
router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", async (req, res) => {
  const { messageUser, messageText } = req.body;
  await db.addMessage(messageUser, messageText);
  res.redirect("/");
});

router.get("/message/:id", async (req, res) => {
  const msg = await db.getMessageWithId(req.params.id);
  if (!msg) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message: msg });
});

module.exports = router;