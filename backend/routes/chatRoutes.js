const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');

// Get chat by participants
router.post('/get', async (req, res) => {
    const { userId1, userId2 } = req.body;
    let chat = await Chat.findOne({
        participants: { $all: [userId1, userId2] },
    });
    if (!chat) {
        chat = new Chat({ participants: [userId1, userId2], messages: [] });
        await chat.save();
    }
    res.json(chat);
});

// Save new message
router.post('/message', async (req, res) => {
    const { senderId, receiverId, text } = req.body;
    let chat = await Chat.findOne({
        participants: { $all: [senderId, receiverId] },
    });
    if (!chat) {
        chat = new Chat({ participants: [senderId, receiverId], messages: [] });
    }
    chat.messages.push({ senderId, text });
    await chat.save();
    res.status(200).json(chat);
});

module.exports = router;
