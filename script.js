

document.addEventListener("DOMContentLoaded", function() {

    var i = 0;
    var txt = 'Joey\'s Jungle Daycare'; 
    var speed = 150; 

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); 
    
    function removeActiveClass() {
        document.querySelectorAll('nav ul li a').forEach(function(link) {
            link.classList.remove('active');
        });
    }

    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            removeActiveClass();
            e.target.classList.add('active');

            const sectionId = e.target.getAttribute('href').substring(1);
            const contentDiv = document.getElementById('content');

            const isHomePage = sectionId === '' || sectionId === 'home';
            document.getElementById('branding').style.display = isHomePage ? 'block' : 'none';

          
            if(sectionId !== 'home') {
                const pdfPath = `pdf/${sectionId}.pdf`; 
                contentDiv.innerHTML = `<iframe src="${pdfPath}" style="width:100%; height:100vh;" frameborder="0"></iframe>`;
            } else {
            }

            if(history.pushState) {
                history.pushState(null, null, '#' + sectionId);
            } else {
                window.location.hash = sectionId; 
            }

            
        });
    });


    document.getElementById('logoHome').addEventListener('click', function(e) {
        e.preventDefault();
        removeActiveClass();
        const contentDiv = document.getElementById('content');
        document.getElementById('branding').style.display = 'block';
    if (window.location.hash && window.location.hash !== '#home') {
        document.getElementById('branding').style.display = 'none';
    }   
    
        
        window.location.href = '/';
    });
    
});