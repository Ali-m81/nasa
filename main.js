const body = document.querySelector('body');

let ham = document.querySelector('#ham')
let close = document.querySelector('#close')

let nav = document.querySelector('nav')

let home= document.querySelector('#home');
let destination = document.querySelector('#destination');
let crew = document.querySelector('#crew')
let technology = document.querySelector('#technology')

let HomePage = document.querySelector('#home-page');
let DestinationPage = document.querySelector('#destination-page');
let TechnologyPage = document.querySelector('#technology-page');
let CrewPage = document.querySelector('#crew-page');

let moon = document.querySelector('#moon');
let mars = document.querySelector('#mars');
let europa = document.querySelector('#europa');
let titan = document.querySelector('#titan');



let ImgItem = document.querySelector('#img-item');
let h3= document.querySelector('#title h3');
let p= document.querySelector('#title-p p');
let year= document.querySelector('#year');
let chY= document.querySelector('#d-y');

let one = document.querySelector('#one');
let two= document.querySelector('#two');
let three= document.querySelector('#three');

let DesCS= document.querySelector('#description-cs');
let DesCH= document.querySelector('#description-ch');
let DesCP= document.querySelector('#description-cp');
let ImgCT= document.querySelector('#img-c');

let DesS= document.querySelector('#description-s');
let DesH= document.querySelector('#description-h');
let DesP= document.querySelector('#description-p');
let ImgT= document.querySelector('#img-t');


let CRepageOne = document.querySelector('#iteam1')
let CRepageTwo = document.querySelector('#iteam2')
let CRepageThree = document.querySelector('#iteam3')
let CRepageFour = document.querySelector('#iteam4')

let CDesS= document.querySelector('#description-cs');
let CDesH= document.querySelector('#description-ch');
let CDesP= document.querySelector('#description-cp');
let CImgT= document.querySelector('#img-c');

// code for hamburger menu and close menu
ham.addEventListener('click' , ()=>{
  nav.style.display = 'flex'
  ham.style.display = 'none'
  close.style.display = 'flex'
})

close.addEventListener('click' , ()=>{
  nav.style.display = 'none'
  ham.style.display = 'flex'
  close.style.display = 'none'
})
// code for select page on the navar 
home.addEventListener('click' , ()=>{
    HomePage.style.display = 'flex'
    DestinationPage.style.display = 'none'
    TechnologyPage.style.display = 'none'
    CrewPage.style.display = 'none'
    if(window.innerWidth>1080){
    body.style.background = 'url(./d/home/background-home-desktop.jpg)'}
    else if(window.innerWidth<1080){
      body.style.background = 'url(d/home/background-home-tablet.jpg)'
        nav.style.display = 'none'
      close.style.display = 'none'
      ham.style.display = 'flex'
      
    }
})

destination.addEventListener('click' , ()=>{
    DestinationPage.style.display = 'flex'
    HomePage.style.display = 'none'
    TechnologyPage.style.display = 'none'
    CrewPage.style.display = 'none'
    if(window.innerWidth>1080){
    body.style.background =  'url(d/destination/background-destination-desktop.jpg)'}
    else if(window.innerWidth<1080){
      body.style.background = 'url(d/destination/background-destination-tablet.jpg)'
      nav.style.display = 'none'
      close.style.display = 'none'
      ham.style.display = 'flex'
    }
})

crew.addEventListener('click' , ()=>{
 CrewPage.style.display = 'flex'
  TechnologyPage.style.display = 'none'
  DestinationPage.style.display = 'none'
  HomePage.style.display = 'none'
  if(window.innerWidth>1080){
  body.style.background ='url(./d/crew/background-crew-desktop.jpg)'}
  else if(window.innerWidth<1080){
    body.style.background = 'url(d/crew/background-crew-tablet.jpg)'
    nav.style.display = 'none'
    close.style.display = 'none'
    ham.style.display = 'flex'
  }
})

technology.addEventListener('click' , ()=>{
  TechnologyPage.style.display = 'flex'
  DestinationPage.style.display = 'none'
  HomePage.style.display = 'none'
  CrewPage.style.display = 'none'
  if(window.innerWidth>1080){
  body.style.background ='  url(./d/technology/background-technology-desktop.jpg)'}
  else if(window.innerWidth<1080){
    body.style.background = 'url(d/technology/background-technology-tablet.jpg)'
    nav.style.display = 'none'
    close.style.display = 'none'
    ham.style.display = 'flex'
  }
})

// code for select iteam on the destination page
moon.addEventListener('click' , ()=>{
  ImgItem.setAttribute('src' ,'d/destination/image-moon.png')
  h3.innerHTML = 'moon'
  year.innerHTML = '11 MIL.KM'
    chY.innerHTML = '1 MONTHS'
    p.innerHTML = 'The Moon is Earth s only natural satellite. It orbits at an average distance of 384400 km (238900 mi), about 30 times the planet s diameter. Being tidally locked, it always faces Earth with its near side. This results in the lunar month of 29.5 days matching the lunar day. Exerting gravitational force on Earth, it and to a lesser extent the Sun are the main drivers of the tides'
    h3.style.margin = '5rem 0 0 -1rem'
})

mars.addEventListener('click' , ()=>{
    ImgItem.setAttribute('src' ,'d/destination/image-mars.png')
    h3.innerHTML = 'mars'
    year.innerHTML = '225 MIL.KM'
    chY.innerHTML = '9 MONTHS'
    p.innerHTML =' Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname the Red Planet.[21][22] Marss radius is second smallest among the planets in the Solar System at 3,389.5 km (2,106 mi)'
    h3.style.margin = '5rem 0 0 -1rem'
  })

  europa.addEventListener('click' , ()=>{
    ImgItem.setAttribute('src' ,'d/destination/image-europa.png')
    h3.innerHTML = 'europa'
    year.innerHTML = '325 MIL.KM'
    chY.innerHTML = '84 MONTHS'
    p.innerHTML = 'Europa , or Jupiter II, is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 95 known moons of Jupiter. It is also the sixth-largest moon in the Solar System. Europa was discovered independently by Simon Marius and Galileo Galilei[1] and was named (by Marius) after Europa'
    h3.style.margin = '5rem 0 0 -3rem'
  })

  titan.addEventListener('click' , ()=>{
    ImgItem.setAttribute('src' ,'d/destination/image-titan.png')
    h3.innerHTML = 'titan'
    year.innerHTML = '670 MIL.KM'
    chY.innerHTML = '160 MONTHS'
    p.innerHTML = 'Titan is the largest moon of Saturn, the second-largest in the Solar System and larger than any of the dwarf planets of the Solar System. It is the only moon known to have a dense atmosphere'
    h3.style.margin = '5rem 0 0 -1rem'
  })
//  code for repage on Crew by radio

CRepageOne.addEventListener('click' , ()=>{
CDesH.innerHTML = 'ANOUSHEH ANSARI';
CDesP.innerHTML = 'A launch vehicle is typically a rocket-powered vehicle designed to carry a payload (a crewed spacecraft or satellites) from Earths surface or lower atmosphere to outer space. The most common form is the ballistic missile-shaped multistage rocket, but the term is more general and also encompasses vehicles like the Space Shuttle. Most launch vehicles operate from a launch pad, supported by a launch control center and systems such as vehicle assembly and fueling.[1] Launch vehicles are engineered with advanced aerodynamics and technologies, which contribute to high operating costs.';
if(window.innerWidth>1080){
CImgT.setAttribute('src' , 'd/crew/image-anousheh-ansari.png')}
if(window.innerWidth<1080){CImgT.setAttribute('src' , 'd/crew/image-anousheh-ansari.png')}
})


CRepageTwo.addEventListener('click' , ()=>{
  CDesH.innerHTML = 'VICTOR GLOVER';
  CDesP.innerHTML = 'In August 2018, Glover was introduced as one of the Commercial Crew astronauts, assigned to fly on the first operational flight, and the second crewed flight overall, of SpaceX s Crew Dragon.[14] As part of that mission, he was a crew member on ISS Expeditions 64 and 65 for more than six months.[15] Glover is the first African American ISS Expedition crewmember to live on the ISS, not only visit the ISS for a short stay like on the Space Shuttle as an ISS assembly astronaut. According to The New York Times:[6';
  if(window.innerWidth>1080){
  CImgT.setAttribute('src' , 'd/crew/image-victor-glover.webp')}
if(window.innerWidth<1080){CImgT.setAttribute('src' , 'd/crew/image-victor-glover.png')}
  })

  CRepageThree.addEventListener('click' , ()=>{
    CDesH.innerHTML = 'MARK SHUTTLEWORTH';
    CDesP.innerHTML = 'Shuttleworth gained worldwide fame on 25 April 2002, as the second self-funded space tourist and the first South African in space.[a] Flying through Space Adventures, he launched aboard the Russian Soyuz TM-34 mission as a spaceflight participant,[30] paying approximately US$20 million[31] for the voyage (equivalent to $29.22 million in 2021). Two days later, the Soyuz spacecraft arrived at the International Space Station, where he spent eight days participating in experiments related to AIDS and genome research. On 5 May 2002, he returned to Earth on Soyuz TM-33. In order to participate in the flight.';
    if(window.innerWidth>1080){
    CImgT.setAttribute('src' , 'd/crew/image-mark-shuttleworth.webp')}
    if(window.innerWidth<1080){CImgT.setAttribute('src' , 'd/crew/image-mark-shuttleworth.png')}
    })

    CRepageFour.addEventListener('click' , ()=>{
      CDesH.innerHTML = 'DOUGLAS HURLEY';
  CDesP.innerHTML = 'Selected as a pilot by NASA in July 2000, Hurley reported for training in August 2000. Following the completion of two years of training and evaluation, he was assigned technical duties in the Astronaut Office which included Kennedy Operations Support as a "Cape Crusader," where he was the lead ASP (Astronaut Support Personnel) for Space Shuttle missions STS-107 and STS-121. He also worked shuttle landing and rollout, served on the Columbia Reconstruction Team at Kennedy Space Center and in the Exploration Branch in support of the selection of the Orion crew exploration vehicle.[6]';
  if(window.innerWidth>1080){
  CImgT.setAttribute('src' , 'd/crew/image-douglas-hurley.webp')}
if(window.innerWidth<1080){CImgT.setAttribute('src' , 'd/crew/image-douglas-hurley.png')}
      })

        // code for select num onn the technology
one.addEventListener('click' , ()=>{
  if(window.innerWidth>1080){
    ImgT.setAttribute('src' , 'd/technology/image-launch-vehicle-portrait.jpg')}
    else if(window.innerWidth<1080){
          ImgT.setAttribute('src' , 'd/technology/image-launch-vehicle-landscape.jpg')
    
  }
  DesH.innerHTML = 'LAUNCH VEHICLE'
  DesP.innerHTML = 'A launch vehicle is typically a rocket-powered vehicle designed to carry a payload (a crewed spacecraft or satellites) from Earth s surface or lower atmosphere to outer space. The most common form is the ballistic missile-shaped multistage rocket, but the term is more general and also encompasses vehicles like the Space Shuttle. Most launch vehicles operate from a launch pad, supported by a launch control center and systems such as vehicle assembly and fueling.[1] Launch vehicles are engineered with advanced aerodynamics and technologies, which contribute to high operating costs.';
  one.style.background = '#fff'
  one.style.color = 'black'
  two.style.background = ''
  three.style.background = ''
  two.style.color = '#fff'
  three.style.color = '#fff'
  })
  
  two.addEventListener('click' , ()=>{
    if(window.innerWidth>1080){
      ImgT.setAttribute('src' , 'd/technology/image-space-capsule-portrait.jpg')}
      else if(window.innerWidth<1080){
          ImgT.setAttribute('src' , 'd/technology/image-space-capsule-landscape.jpg')
      
    }
    
    DesH.innerHTML = 'SPACE CAPSULE'
    DesP.innerHTML = 'A space capsule is a spacecraft designed to transport cargo, scientific experiments, and/or astronauts to and from space.[1] Capsules are distinguished from other spacecraft by the ability to survive reentry and return a payload to the Earth s surface from orbit, and are distinguished from other types of recoverable spacecraft by their blunt shape, not having wings and often containing little fuel other than what is necessary for a safe return. Capsule-based crewed spacecraft such as Soyuz or Orion are often supported by a service or adapter module, and sometimes augmented with an extra module for extended space operations. Capsules make up the majority of crewed spacecraft designs, although one crewed spaceplane, the Space Shuttle, has flown in orbit.';
    two.style.background = '#fff'
    two.style.color = 'black'
    one.style.background = ''
    three.style.background = ''
    one.style.color = '#fff'
    three.style.color = '#fff'
    })
  
  
    three.addEventListener('click' , ()=>{
      if(window.innerWidth>1080){
        ImgT.setAttribute('src' , 'd/technology/image-spaceport-portrait.jpg')}
        else if(window.innerWidth<1080){
          ImgT.setAttribute('src' , 'd/technology/image-spaceport-landscape.jpg')
        
      }
      
      DesH.innerHTML = 'SPACEPORT PORTRAIT'
      DesP.innerHTML = 'A spaceport or cosmodrome is a site for launching or receiving spacecraft, by analogy to a seaport for ships or an airport for aircraft. The word spaceport, and even more so cosmodrome, has traditionally been used for sites capable of launching spacecraft into orbit around Earth or on interplanetary trajectories.[1] However, rocket launch sites for purely sub-orbital flights are sometimes called spaceports, as in recent years new and proposed sites for suborbital human flights have been frequently referred to or named "spaceports". Space stations and proposed future bases on the Moon are sometimes called spaceports, in particular if intended as a base for further journeys'
     three.style.background = '#fff'
     three.style.color = 'black'
     one.style.background = ''
     two.style.background = ''
     one.style.color = '#fff'
     two.style.color = '#fff'
      })