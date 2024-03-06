const colleges = [
    { name: "COEP", branch: "CSE", cap1: 100, cap2:99.7, cap3:99,offsite:"" },
    { name: "COEP", branch: "EnTC", cap1: 100,cap2:98.7, cap3:98 },
    { name: "COEP", branch: "..",cap1: 100,cap2:97.7, cap3:97 },
    { name: "PICT", branch: "..",cap1: 100,cap2:96.7, cap3:96},
    { name: "VIT", branch: "..",cap1: 100,cap2:95.7, cap3:95 },
    
];

const button = document.getElementById("btn");
button.addEventListener('click', function () {
    button.disabled = true;
});

// //to set enter key
// document.querySelector('#scoreInput').addEventListener('keypress',function xyz(e) {
//     if (e.key === 'Enter') {
        
//         button.disabled = true;
//         show().disabled=true;
//     }
// })

function reset() {
    const rstbtn = document.getElementById("rst");
    button.disabled = false;
    location.reload();

}



//Actual Code
function show() {


    const enteredScore = document.getElementById("scoreInput").value;
    const collegeList = document.getElementById("collegelist");
    collegeList.innerHTML += ""; 

    // Filter colleges with score less than entered value
    const filteredcolleges = colleges.filter(abc => abc.cap1 <= enteredScore || abc.cap2<=enteredScore || abc.cap3<=enteredScore);

    if (filteredcolleges.length > 0) {
        // Display college details in a list
        collegeList.innerHTML += "<tr>";
        for (const coll of filteredcolleges) {
            collegeList.innerHTML += `<td>${coll.name}</td>  <td>${coll.branch}</td><td>${coll.cap1}</td><td>${coll.cap2}</td> <td>${coll.cap3}</td> `;
        }
        collegeList.innerHTML += "</tr>";
    } else {
        // No college found
        // collegeList.innerHTML = "No colleges found for the score: " + enteredScore;
        ntfnd()
    }

}

function ntfnd() {
    const collegeList = document.getElementById("container");
    collegeList.innerHTML = "<strong>college not found</strong>";
}


