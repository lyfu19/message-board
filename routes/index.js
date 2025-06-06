const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// 首页显示所有留言
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

// GET /new 显示表单页
router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const msg = messages[req.params.id];
  if (!msg) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message: msg });
});

module.exports = router;