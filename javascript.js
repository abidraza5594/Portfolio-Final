const hamburgercontainer=document.querySelector("#header__main-nav")
const hamburger=document.querySelector(".header__main-nav--hamburger")
const links=document.querySelector(".header__main-nav--links li")

hamburger.addEventListener("click",()=>{
  hamburgercontainer.classList.toggle("clicked")
})

function AboutSection(ids){
    const aboutSection = document.getElementById(ids);
    const sectionTop = aboutSection.offsetTop;
    const scrollStep = Math.PI / (500 / 15);
    let count = 0;
    let scrollPos = window.pageYOffset;
    const scrollToSection = setInterval(function() {
      if (window.pageYOffset === sectionTop) {
        clearInterval(scrollToSection);
      }
      if (count >= 1.0) {
        clearInterval(scrollToSection);
      }
      const scrollStepSize = Math.round(scrollPos + sectionTop * easeInOut(count));
      window.scrollTo(0, scrollStepSize);
      count += scrollStep;
    }, 15);
function easeInOut(t) {
  return (1 - Math.cos(Math.PI * t)) / 2;
}}


function FormSubmitHandler(event) {
    event.preventDefault();
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const subject=document.getElementById("subject").value
    const message=document.getElementById("message").value
    
    const Message =`
    Thank You ${name} for Contacting me!
    please check my resume for my email and contact number 
    `
    if(!name){
        return
    }else{
        showAlert(Message)
    }
  };




  // _______________________________ Alert _______________________________

  function showAlert(message, callback) {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('okButton').addEventListener('click', function() {
      document.getElementById('customAlert').style.display = 'none';
      callback();
    });
  }
  
  document.getElementById('openAlertButton').addEventListener('click', function() {
    showAlert('This is the alert message.', function() {
      console.log('User clicked OK');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  

  const musicImage = document.getElementById("meusic");
  const audio = new Audio("free-juice-wrld-type-beat-imperfect-y2bs.com.mp3");
  let isPlaying = false;
  
  function playAudio() {
    audio.play();
    isPlaying = true;
  }
  
  function pauseAudio() {
    audio.pause();
    isPlaying = false;
  }
  
  function toggleAudio() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }
  
  musicImage.addEventListener("onmouseover", playAudio);
  musicImage.addEventListener("click", toggleAudio);
  musicImage.addEventListener("dblclick", toggleAudio);
  
  

  document.getElementById("meusic").addEventListener("mouseenter",()=>{
    playAudio()
    document.getElementById("meusic_para").style.display="block"
  })

  document.getElementById("meusic").addEventListener("mouseleave",()=>{
    document.getElementById("meusic_para").style.display="none"
  })



  function speakText(text) {
    // Create a new SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  
  // Example usage
  
  
  document.getElementById("about").addEventListener("click",()=>{
    speakText("about me")
    return
  })
  document.getElementById("skills").addEventListener("click",()=>{
    speakText("my skills")
    return
  })
  document.getElementById("Project").addEventListener("click",()=>{
    speakText("my all project")
    return
  })
  
  document.getElementById("service").addEventListener("click",()=>{
    speakText("my services")
    return
  })
  document.getElementById("hireme").addEventListener("click",()=>{
    speakText("hire me")
    return
  })
  document.getElementById("contact").addEventListener("click",()=>{
    speakText("contact us")
    return
  })
  document.getElementById("resume").addEventListener("click",()=>{
    speakText("thank you for downloading my resume")
  })

  document.getElementById("openAlertButton").addEventListener("click",()=>{
    speakText("Click Resume PDF Button TO Get Email and Contact Number.")
  })

  document.getElementById("okButton").addEventListener("click",()=>{
    speakText("Thank You")
  })