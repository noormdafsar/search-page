// Function to handle the search form submission
function handleSearch(event) {
  event.preventDefault();

  // Get the search criteria
  var location = document.getElementById("location").value;
  var jobRole = document.getElementById("job-role").value;

  // TODO: Perform search logic based on location and job role
  // Example:
  var candidates = [
    { name: "Nooruddin Md Afsar", location: "Kolkata", jobRole: "Frontend Developer" },
    { name: "Study Monk", location: "Delhi", jobRole: "UI Designer" },
    { name: "Ashutosh Jha", location: "Bangalore", jobRole: "Backend Developer" }
  ];

  displayCandidates(candidates);
}

// Function to display the fetched candidates
function displayCandidates(candidates) {
  var candidatesList = document.getElementById("candidates");
  candidatesList.innerHTML = ""; // Clear previous candidates

  // Loop through the candidates and create list items
  for (var i = 0; i < candidates.length; i++) {
    var candidate = candidates[i];

    var listItem = document.createElement("li");
    listItem.textContent = candidate.name + " - " + candidate.location + " - " + candidate.jobRole;

    candidatesList.appendChild(listItem);
  }
}

// Attach event listener to the search form
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleSearch);
