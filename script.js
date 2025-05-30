const jobs = [
  { title: "Frontend Developer", company: "Tata Consultancy Services", location: "Mumbai" },
  { title: "Backend Developer", company: "Infosys", location: "Bengaluru" },
  { title: "UI/UX Designer", company: "Zoho Corporation", location: "Chennai" },
  { title: "Full Stack Developer", company: "Wipro", location: "Hyderabad" },
  { title: "Mobile Developer", company: "Flipkart", location: "Bengaluru" },
  { title: "Data Analyst", company: "Reliance Jio", location: "Navi Mumbai" },
  { title: "Cloud Engineer", company: "Tech Mahindra", location: "Pune" },
  { title: "DevOps Engineer", company: "HCLTech", location: "Noida" },
  { title: "Software Tester", company: "Mindtree", location: "Kolkata" },
  { title: "React Developer", company: "Freshworks", location: "Chennai" }
];

const jobList = document.getElementById("job-list");
const titleInput = document.getElementById("search-title");
const locationInput = document.getElementById("search-location");

function displayJobs(filteredJobs) {
  jobList.innerHTML = "";
  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
  }
  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h2>${job.title}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
    `;
    jobList.appendChild(jobCard);
  });
}

function filterJobs() {
  const titleFilter = titleInput.value.toLowerCase();
  const locationFilter = locationInput.value.toLowerCase();

  const filtered = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(titleFilter) &&
      job.location.toLowerCase().includes(locationFilter)
    );
  });

  displayJobs(filtered);
}

titleInput.addEventListener("input", filterJobs);
locationInput.addEventListener("input", filterJobs);

// Initial display
displayJobs(jobs);
