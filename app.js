
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

  
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            
            console.log('Form submitted:', formObject);
            
           
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.color = '#7e7ceb';
            successMessage.style.marginTop = '20px';
            successMessage.style.fontWeight = 'bold';
            
           
            this.reset();
            
           
            this.appendChild(successMessage);
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }

    
    const skillBoxes = document.querySelectorAll('.skill-box');
    const projectBoxes = document.querySelectorAll('.project');
    
    function checkScroll() {
        skillBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (boxTop < windowHeight - 100) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
        
        projectBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (boxTop < windowHeight - 100) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    }
    
   
    skillBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    projectBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);


    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Resume download functionality would be implemented here. For now, this is a placeholder.');
        });
    }

    
    projectBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(126, 124, 235, 0.3)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

   
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.fontSize = '24px';
    menuToggle.style.color = '#f6b6b6';
    document.querySelector('header').prepend(menuToggle);

    const navMenu = document.querySelector('.box2 ul');
    
    function toggleMenu() {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            navMenu.style.display = 'none';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.backgroundColor = 'black';
            navMenu.style.padding = '20px 0';
        } else {
            menuToggle.style.display = 'none';
            navMenu.style.display = 'flex';
        }
    }
    
    window.addEventListener('load', checkScreenSize);
    window.addEventListener('resize', checkScreenSize);
});