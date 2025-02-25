const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/webhook", (req, res) => {
    const body = req.body;
    console.log("Webhook Request:", JSON.stringify(body, null, 2));

    // Extract parameter (e.g., city from user input)
    const city = body.sessionInfo.parameters.city || "your location";

    // Create response
    const response = {
        fulfillmentResponse: {
            messages: [{ text: { text: [`Got it! You are from ${city}.`] } }]
        }
    };

    res.json(response);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
