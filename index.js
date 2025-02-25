const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
    const city = req.body.sessionInfo?.parameters?.["geo-city"] || "your location";

    res.json({
        fulfillmentResponse: {
            messages: [
                { text: { text: [`Got it! You are from ${city}.`] } }
            ]
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
