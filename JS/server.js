// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/add-donor', (req, res) => {
    const newDonor = req.body;
    const filePath = 'donor.json';

    // Read the existing JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading file' });
        }

        // Parse the JSON data
        let donorsData = JSON.parse(data);

        // Add the new donor to the list
        donorsData.donors.push(newDonor);

        // Write the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(donorsData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error writing file' });
            }
            res.status(200).json({ message: 'Donor added successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
