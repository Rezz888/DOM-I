const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = siteContent["nav"]["img-src"];

/**Header + Nav */

const nav = document.querySelectorAll("nav a");

nav.forEach(el => {
  el.style.color = "green";
})

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

/**  Create two new elements in nav */
let newItemNav = document.querySelector('nav');

let newItem1 = document.createElement('a');
newItem1.textContent = 'Concept';
newItem1.href = '#';
newItem1.style.color = 'green';

// Stretch
newItem1.addEventListener("click", ()=> {
  newItem1.style.transform = 'scale(1.5)';
  newItem1.style.transition = 'transform .7s';
  newItem1.style.color = 'black';
  
  
})
newItem1.addEventListener('mouseleave', ()=>{
  newItem1.style.transform = 'scale(1)';
  newItem1.style.color = 'green';
  
})


let newItem2 = document.createElement('a');
newItem2.textContent = 'Blog';
newItem2.href = '#';
newItem2.style.color = 'green';
// Stretch
newItem2.addEventListener("click", ()=> {
  newItem2.style.transform = 'scale(1.5)';
  newItem2.style.transition = 'transform .7s';
  newItem2.style.color = 'black';
})
newItem2.addEventListener('mouseleave', ()=>{
  newItem2.style.transform = 'scale(1)';
  newItem2.style.color = 'green';
})

newItemNav.prepend(newItem1);
newItemNav.appendChild(newItem2);


/**Section_cta */
let mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent['cta']['h1'];
// mainHeader.style.width = "20vw";

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

mainHeader.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "</br>");

/**Section_Main-Content */

let sectionHeaders = document.querySelectorAll(".main-content h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]

let sectionContent = document.querySelectorAll(".main-content p");
sectionContent[0].textContent = siteContent["main-content"]["features-content"];
sectionContent[1].textContent = siteContent["main-content"]["about-content"];
sectionContent[2].textContent = siteContent["main-content"]["services-content"];
sectionContent[3].textContent = siteContent["main-content"]["product-content"];
sectionContent[4].textContent = siteContent["main-content"]["vision-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

/**Contact */
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent.contact["address"];
contactContent[1].textContent = siteContent.contact["phone"];
contactContent[2].textContent = siteContent.contact["email"];

/**Footer */

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer["copyright"];

/**Stretch */
// All the anchor tags in the nav bar are selected as 'nav' above.
nav.forEach(el => {
  el.addEventListener('click', (event) => {
    console.log(event);
    el.style.transform = 'scale(1.5)';
    el.style.transition = 'transform .7s';
    el.style.color = "black";
    
    })

    el.addEventListener('mouseleave', (event) => {
      el.style.transform = 'scale(1)';
      el.style.color = "green";
  })
  
})
