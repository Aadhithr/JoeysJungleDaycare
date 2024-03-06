

document.addEventListener("DOMContentLoaded", function() {
    
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

          
            if(sectionId !== 'home') {
                const pdfPath = `pdf/${sectionId}.pdf`; 
                contentDiv.innerHTML = `<iframe src="${pdfPath}" style="width:100%; height:100vh;" frameborder="0"></iframe>`;
            } else {
                contentDiv.innerHTML = 'Home content will be displayed here.'; 
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
        contentDiv.innerHTML = 'Home content will be displayed here.'; 

        if(history.pushState) {
            history.pushState(null, null, '#home');
        } else {
            window.location.hash = 'home'; 
        }
    });
});
