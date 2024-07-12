document.addEventListener('DOMContentLoaded', function() { /* waits for the entire page to load before running */
    
    /*get reference to sidebar/toggle by its ID */
    const sidebarToggle = document.getElementById('sidebarToggle'); 
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    let slideIndex = 0; /* float variable */
    showSlides(); /* runs the function here */

    function showSlides() {
        let slides = document.querySelectorAll(".slides .slide"); /* find all elements in the "" */
        for (let i = 0; i < slides.length; i++) { /* looks through the length of the slides */
            slides[i].computedStyleMap.display = "none"; /* make the current element style=none */
        }

        slideIndex++;
        if (slideIndex > slides.length)
            {slideIndex = 1}
        slides[slideIndex - 1].computedStyleMap.display = "block";
        setTimeout(showSlides, 30000); /* call it every 30 seconds */
    }
});

