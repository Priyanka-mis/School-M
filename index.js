function login() {
let email = document.getElementById("email").value.trim().toLowerCase();
let password = document.getElementById("password").value.trim();

console.log("Entered Email:", email);  // 👀 Debugging ke liye
console.log("Entered Password:", password);  // 👀 Debugging ke liye

if (email === "priyankamishra22@navgurukul.org" && password === "priyanka@123") {
document.getElementById("loginPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
} else {
alert("Invalid email or password. Please check again!");
}
}


function logout() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function showSection(sectionId) {
    document.getElementById("studentsSection").classList.add("hidden");
    document.getElementById("teachersSection").classList.add("hidden");
    document.getElementById("attendanceSection").classList.add("hidden");
    document.getElementById(sectionId).classList.remove("hidden");
}

function addStudent() {
    let name = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;

    if (name && studentClass) {
        let listItem = document.createElement("li");
        listItem.textContent = `${name} - Class: ${studentClass}`;
        document.getElementById("studentList").appendChild(listItem);
        document.getElementById("studentName").value = "";
        document.getElementById("studentClass").value = "";
    } else {
        alert("Please fill all fields!");
    }
}

function addTeacher() {
    let name = document.getElementById("teacherName").value;
    let subject = document.getElementById("subject").value;

    if (name && subject) {
        let listItem = document.createElement("li");
        listItem.textContent = `${name} - Subject: ${subject}`;
        document.getElementById("teacherList").appendChild(listItem);
        document.getElementById("teacherName").value = "";
        document.getElementById("subject").value = "";
    } else {
        alert("Please fill all fields!");
    }
}

function markAttendance() {
    let name = document.getElementById("attendeeName").value;
    let status = document.getElementById("attendanceStatus").value;

    if (name) {
        let listItem = document.createElement("li");
        listItem.textContent = `${name} - ${status}`;
        document.getElementById("attendanceList").appendChild(listItem);
        document.getElementById("attendeeName").value = "";
    } else {
        alert("Please enter a student name!");
    }
}
