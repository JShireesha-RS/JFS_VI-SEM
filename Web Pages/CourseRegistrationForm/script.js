let subjects = document.querySelectAll(".subject");
let totalBox = document.getElementById("total");

subjetcs.forEach(item => {
item.addEventListener("change", ()=> {
let total = 0;

subjects.forEach(sub=> {
if (sub.checked) {
total += parseInt(sub.value);
}
});
totalBox.innerText = "$" + total;
});
});

//optional
document.getElementById("regForm").addEventListener("submit",function(e){
e.preventDefault();
e.preventDefault();

let selectedSubjects = [];
let totalFee = 0;

subjects.forEach(sub => {
if (sub.checked) {

//Get subjects name from the label text
let subjectName = sub.parentElement.innerText.trim();
selectedSubjects.push(subjectName);

totalFee + = parseInt(sub.value);
}
});

if(selectedSubjects.length ===0) {
alert("Please select at least one subjects.");
return;
}

let studentName = document.getElementById("name").value;

let message = 
"Student Name: " + studentName + "\n\n" +
"Selected Subjects:\n- " + selectedSubjects.join("n- ") + "\n\n" + 
"Total Fee: $" + totalFee;

alert(message);
});






<Doctype html>
<html>
<head>
<title>Course Registration Form</title>
<link rel="stylesheet" href="style.css">
<style>
 body {
 font-family: Timesnew Roman;
 background:green;
 padding: 40px;
 }
 .container {
 max-width: 450px;
 margin: auto;
 background: pink;
 padding: 25px;
 border-radius:6px;
 
 box-shadow: 0 0 15px rgba(,0,0,0.1);
 }
 
h2 {
text-align:centre;
margin-bottom:20px;
color:pink;

}
.subject
 
 button  {
 width : 100%;
 
 
 </style>
</head>
<body>


<div class="container">
<h2>Course Registration Form</h2>

<form id="regForm">
<label>Student Name:</label>
<input type :"Text" id="name" placeholder="Enter your name" >
<br>

<label>Select Subjets:</label>
<div class="subjet-list">






<label>
    <input type="checkbox" required>
    Data Structures($1200)
</label>

<label>
    <input type="checkbox" required>
    DBMS($1300)
</label>

<label>
    <input type="checkbox" required>
    Computer Networks($1400)
</label>

<label>
    <input type="checkbox" required>
    JFS($900)
</label>

<label>
    <input type="checkbox" required>
   Cp($2200)
</label>

<label>
    <input type="checkbox" required>
    Java Programming($1200)
</label>


</div>

<div class="total-box">
Total Registration Fee:
<span id = "total">$0</span>
</div>


<button type="submit">Submit Registration</button>
</form>
</div>

<script src="scrpt.js"></script>
</body>
</html>
