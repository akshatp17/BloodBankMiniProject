let Unit1 = document.getElementById('Unit1')
let Unit2 = document.getElementById('Unit2')
let Unit3 = document.getElementById('Unit3')
let Unit4 = document.getElementById('Unit4')
let Unit5 = document.getElementById('Unit5')

const buttons = document.querySelectorAll('button');

// Declare a variable to store the data
let bloodbankData = [];

// Function to fetch data from JSON file
async function fetchBloodbanks() {
    try {
        const response = await fetch('./Files/bloodbanklist.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        bloodbankData = data.bloodbanks; // Store the fetched data

        // Call the function to display data in a table
        displayBloodbanks(bloodbankData);
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}

// Displaying the data
function displayBloodbanks(bloodbanks) {
  bloodbanks.forEach(bloodbank => {
    console.log(bloodbank["Blood Bank List"] + "\t" + bloodbank["Address"] + "\t" + bloodbank["Contact"])
  });
}

fetchBloodbanks();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // when the button is clicked
    window.location.href = "schedule.html";
  });
});