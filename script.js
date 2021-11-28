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

}, 3000);


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


setInterval(function(){ hideShow(); }, 10000);
