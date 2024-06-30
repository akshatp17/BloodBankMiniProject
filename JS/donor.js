let donorData = [];

// Function to fetch data from JSON file
async function fetchDonors() {
    try {
        const response = JSON.parse(localStorage.getItem('donorsData'));
        const data = response;
        donorData = data.donors; // Store the fetched data
        // Call the function to display data in a table
        displayDonors(donorData);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}

// Displaying the data
function displayDonors(donors) {

    const element = donors[3];

    document.getElementById("name").innerHTML = element["Name"];
    document.getElementById("num").innerHTML = element["Phone"];
    document.getElementById("date").innerHTML = element["Date"];
    document.getElementById("bank").innerHTML = element["BloodBank"];
    document.getElementById("bld").innerHTML = element["BloodGroup"];

}

fetchDonors();