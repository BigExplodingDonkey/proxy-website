const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/proxy', (req, res) => {
    const url = req.query.url; // Get URL from query parameter
    request(url).pipe(res); // Forward the request to the target URL
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
