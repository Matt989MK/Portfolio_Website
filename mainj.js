// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
  selectElement(".nav-list").classList.toggle("active");
  selectElement(".burger-menu-icon").classList.toggle("toggle")

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ""
    } else {
      link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
      console.log(index / 7 + 0.5)
    }
  })
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
        console.log(index / 7 + 0.5)
      }
    })
  })
});

/*

  P1 100%, P2, P3 opacity 0%
  P1 80% P2 100, P3 0
  P1 0, P2 80, P3 100
  P1 P2 0 P3 100
  P1 P2 P3 0


 */


/* THis is so image stays still for project 1 */

window.addEventListener("scroll", () => {
  //  console.log(document.documentElement.scrollTop);

  const image = document.getElementById("project-Image1");
  const image2 = document.getElementById("project-Image2");
  const imageWraper = document.getElementById("imageWraper");
  const test = document.getElementById("Project-text");
  const p1 = document.getElementById("project1_p1");
  const p2 = document.getElementById("project1_p2");
  const p3 = document.getElementById("project1_p3");
  p1.style.opacity = "0%";
  p2.style.opacity = "0%";
  p3.style.opacity = "0%";
  var documentHeight=document.body.scrollHeight;
   var project1_1min =document.getElementById("project1").scrollHeight*0.2;
   var project1_1max =document.getElementById("project1").scrollHeight*0.4;




  const minScroll = 4000; // add 1430 for each
  const maxScroll = 8300; //limit
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > minScroll && scrollTop <= maxScroll) {

    if (scrollTop >= minScroll && scrollTop <= 5430) {

      let test = (5500 - scrollTop) / (5500 - minScroll);
      p1.style.opacity = 1 - test;

    } else if (scrollTop >= 5430 && scrollTop <= 6860) {
      let test2 = (6000 - scrollTop) / (6000 - minScroll);
      p1.style.opacity = test2;
      p2.style.opacity = 1 - test2;

    } else if (scrollTop >= 6860 && scrollTop <= maxScroll) {
      let test3 = (maxScroll - scrollTop) / (maxScroll - minScroll);
      p2.style.opacity = test3;

      p3.style.opacity = 1 - test3;

    }

    test.style.position = "fixed";
    imageWraper.style.position = "fixed";
    imageWraper.style.marginLeft = "50px";
    imageWraper.style.top = 0;
    imageWraper.style.marginTop = "140px"

    let imageOpacity = (maxScroll - scrollTop) / (maxScroll - minScroll);

    image.style.opacity = 1 - imageOpacity;

  } else if(scrollTop > maxScroll ) {

    image.style.opacity = 1;

    imageWraper.style.position = "absolute";
    imageWraper.style.marginLeft = "";
    imageWraper.style.top =maxScroll+100+"px";
    imageWraper.style.marginTop = ""
  
    test.style.position = "relative";

    //console.log("RELATIVE");
  } else if (scrollTop<minScroll){
    imageWraper.style.top =0+"px";
    imageWraper.style.position = "absolute";
  }
});
