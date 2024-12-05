function filterColleges() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const collegeBoxes = document.querySelectorAll(".college-box");
    let matchFound = false;

    collegeBoxes.forEach(box => {
        const collegeName = box.textContent.toLowerCase();
        if (collegeName.includes(searchInput)) {
            box.style.display = "block";
            matchFound = true;
        } else {
            box.style.display = "none";
        }
    });

    const noResultsMessage = document.getElementById("no-results");
    noResultsMessage.style.display = matchFound ? "none" : "block";
}

let button = document.querySelector(".toTop");
button.addEventListener("click" ,()=>{
    window.scrollTo(0,0);
});
