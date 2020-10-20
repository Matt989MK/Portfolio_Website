// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
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

window.addEventListener("scroll",()=>{
//  console.log(document.documentElement.scrollTop);

  const  image =document.getElementById("project-Image1");
  const test = document.getElementById("Project-text");
  const  p1 =document.getElementById("project1_p1");
  const  p2 =document.getElementById("project1_p2");
  const  p3 =document.getElementById("project1_p3");
  p1.style.opacity ="100%";
  p2.style.opacity ="0%";
  p3.style.opacity ="0%";


 const minScroll=4250;
 const maxScroll=5890; //limit
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(scrollTop> minScroll && scrollTop<maxScroll){
    p1.style.opacity= 1-scrollTop/maxScroll;
    test.style.position="fixed";
  //  p1.style.left="60%";
    image.style.position ="fixed";
    //image.style.marginLeft: "40px";
  //  image.style.marginTop: "120px";
    p1.style.opacity
  //  console.log("FIXED");
  }else {
    image.style.position ="relative";
  p1.style.position="relative";
    //console.log("RELATIVE");
  }
});
