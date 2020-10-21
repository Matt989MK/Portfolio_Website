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
  p1.style.opacity = "100%";
  p2.style.opacity = "100%";
  p3.style.opacity = "100%";


  const minScroll = 4050;
  const maxScroll = 5890; //limit
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > minScroll && scrollTop <= maxScroll) {

    if (scrollTop >= minScroll && scrollTop <= 4578) {
      p1.style.opacity = 1 - scrollTop / 4578;

    } else if (scrollTop >= 4578 && scrollTop <= 4906) {
      p2.style.opacity = 1 - scrollTop / 4906;

    } else if (scrollTop >= 4906 && scrollTop <= 5890) {
      p3.style.opacity = 1 - scrollTop / 5890;

    } else {
      p1.style.opacity = 0;
      p2.style.opacity = 0;
      p3.style.opacity = 0;

    }


    test.style.position = "fixed";
    imageWraper.style.position="fixed";
    imageWraper.style.marginLeft="50px";
    imageWraper.style.top=0;
    imageWraper.style.marginTop="140px"

    //  p1.style.left="60%";
    //image.style.position = "fixed";
    //image2.style.position = "fixed";

    image.style.opacity = 1-scrollTop/maxScroll;

    //image.style.marginLeft: "40px";
    //  image.style.marginTop: "120px";

    //  console.log("FIXED");
  } else {
  //  image.style.position = "absolute";
  //image2.style.position = "absolute";
  image.style.opacity = 1;

imageWraper.style.position="absolute  ";
imageWraper.style.marginLeft="";
imageWraper.style.top="";
imageWraper.style.marginTop=""
    test.style.position = "relative";
    //console.log("RELATIVE");
  }
});
