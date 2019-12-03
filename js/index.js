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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navbar = document.querySelectorAll(`nav a`);
// Array.from(navbar).forEach( a => {
//   a.textContent = siteContent.nav
// } )

// Array.from(navbar);

// const navbar = document.querySelectorAll('a')
// navbar.forEach((element, i) => {
//   element.textContent = siteContent['nav'][`nav-item-${i+1}`];
// });

navbar[0].textContent = siteContent.nav[`nav-item-1`];
navbar[1].textContent = siteContent.nav[`nav-item-2`];
navbar[2].textContent = siteContent.nav[`nav-item-3`];
navbar[3].textContent = siteContent.nav[`nav-item-4`];
navbar[4].textContent = siteContent.nav[`nav-item-5`];
navbar[5].textContent = siteContent.nav[`nav-item-6`];

navbar.forEach( a => {
    a.style.color = `green`;
  } );
  
  
navbar[2].style.color = 'red';

navbar[5].style.color = 'red';

// end nav


let appnav = document.createElement(`a`);
appnav.textContent = `Finish`
appnav.style.color = `green`

let prenav = document.createElement(`a`);
prenav.textContent = `Start`
prenav.style.color = `green`;

const newnav = document.querySelector(`nav`)
newnav.append(appnav);

newnav.prepend(prenav);

//end nav cont

let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;
h1.style.color = `blue`

// end H1 

let button = document.querySelector(`.cta button`);
button.textContent = siteContent.cta.button;

//end button

let ctaimg = document.querySelector(`#cta-img`);
ctaimg.src = siteContent.cta["img-src"];

//end ctaimg

let midimg = document.querySelector(`#middle-img`);
midimg.src = siteContent[`main-content`][`middle-img-src`];

let h4 = document.querySelectorAll(`h4`)
//main content h4
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];
//Contact h4
h4[5].textContent = siteContent["contact"]["contact-h4"];

let content = document.querySelectorAll(`p`)
//main-content content
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];
//contact content
content[5].textContent = siteContent["contact"]["address"];
content[6].textContent = siteContent["contact"]["phone"];
content[7].textContent = siteContent["contact"]["email"];
content[8].textContent = siteContent["footer"]["copyright"];

