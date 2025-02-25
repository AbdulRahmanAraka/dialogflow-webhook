const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    const tag = req.body.fulfillmentInfo.tag;
    
    let responseText = "Sorry, I don't understand that.";
    
    if (tag === "get_weather") {
        responseText = "Let me check the weather for you...";
    }

    res.json({
        fulfillmentResponse: {
            messages: [{ text: { text: [responseText] } }]
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
