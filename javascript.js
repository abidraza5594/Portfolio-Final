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
  