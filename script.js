setInterval(function(){ 

    let x = document.querySelector('.web_developer');
    let y = document.querySelector('.ruby_developer');
    let  z = document.querySelector('.java_script');
    let  r = document.querySelector('.react');
    let  red = document.querySelector('.redux');
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";

    } else if (y.style.display === "block"){
      y.style.display = "none";
      z.style.display = "block";
    } else if (z.style.display === "block"){
      r.style.display = "block";
      z.style.display = "none";
    }
    else if (r.style.display === "block") {
      r.style.display = "none";
      red.style.display = "block";
    }

    else {
      red.style.display = "none";
      x.style.display = "block";
    }

}, 4000);


function hideShow() {
    let x = document.getElementById("skills");
    let y = document.getElementById("projects_content");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";

    }
  }

  function showSkills() {
    document.getElementById("skills").style.display = 'block';
    document.getElementById("projects_content").style.display = 'none';
  }

  function showSkillsMobile() {
    document.querySelector(".cards_mobile").style.display = 'flex';
    document.getElementById("projects_content").style.display = 'none';
    document.querySelector('.side_bar').style.display = 'none';
  }

  function showProjectsMobile() {
    document.querySelector(".cards_mobile").style.display = 'none';
    document.getElementById("projects_content").style.display = 'flex';
    document.querySelector('.side_bar').style.display = 'none';
  }



  function showProjects() {
    document.getElementById("skills").style.display = 'none';
    document.getElementById("projects_content").style.display = 'block';
    document.querySelector('.side_bar').style.display('none');
  }


  function showSideBar() {
    document.getElementById("skills").style.display = 'none';
    document.getElementById("projects_content").style.display = 'none';
    document.querySelector('.side_bar').style.display = 'block';
  }



  setInterval(function(){ hideShow(); }, 50000);

var x = window.matchMedia("(min-width: 768px)")
var y = window.matchMedia("(max-width: 768px)")

if (x.matches) { // If media query matches
    document.getElementById('show_skills').addEventListener("click", showSkills);
    document.getElementById('show_projects').addEventListener("click", showProjects);
}




function changeDivsMobile() {
   x =  document.querySelector('.side_bar');
   y =  document.querySelector('.cards_mobile');
   z =  document.getElementById('projects_content');
   if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "flex";

  } else if (y.style.display === "flex"){
    y.style.display = "none";
    z.style.display = "block";
  } else {
    z.style.display = "none";
    x.style.display = "block";
  }

  }



if (y.matches) { // If media query matches
    document.getElementById('show_skills').addEventListener("click", showSkillsMobile);
    document.getElementById('show_projects').addEventListener("click", showProjectsMobile);
    document.querySelector('.show_side').addEventListener("click", showSideBar);
    setInterval(function(){ changeDivsMobile(); }, 10000);
}

























