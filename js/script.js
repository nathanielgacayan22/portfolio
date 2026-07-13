
fetch("data.json")

.then(response => response.json())

.then(data => {



document.getElementById("name").textContent =
data.personal.name;


document.getElementById("role").textContent =
data.personal.role;


document.getElementById("tagline").textContent =
data.personal.tagline;


document.getElementById("aboutText").textContent =
data.personal.about;





let skills = "";

data.skills.forEach(skill => {

    skills += `

    <div class="card">

        <h3>${skill.name}</h3>

    </div>

    `;

});


document.getElementById("skillsBox").innerHTML = skills;


document.getElementById("skillsBox").innerHTML=skills;







let projects="";


data.projects.forEach(project=>{


projects += `


<div class="card">


<h3>
${project.title}
</h3>


<p>
${project.description}
</p>


<span>
${project.link}
</span>


</div>


`;


});


document.getElementById("projectsBox").innerHTML=projects;







let education="";


data.education.forEach(item=>{


education += `


<div class="timeline">

<h3>
${item.year}
</h3>

<h4>
${item.school}
</h4>

<h5>
${item.title}
</h5>

<p>
${item.description}
</p>


</div>



`;


});


document.getElementById("educationBox").innerHTML=education;



})

.catch(error=>{

console.log(error);

});


const menu =
document.getElementById("menu");


const nav =
document.getElementById("nav");



menu.onclick=function(){

nav.classList.toggle("show");

}
