
        function toggleMenu() {
            const navContainer = document.getElementById('navContainer');
            navContainer.classList.toggle('show');

            // Toggle visibility of other nav items
            const navItems = navContainer.querySelectorAll('.nav-item.hidden');
            navItems.forEach(item => {
                item.classList.toggle('hidden');
            });
        }

        document.querySelectorAll(".nav-item").forEach((item) => {
            console.log(item)
            item.addEventListener("click", function () {
                document.querySelectorAll(".nav-item").forEach((nav) => {
                   
                    nav.classList.remove("active");
                });
                this.classList.add("active");
            });
        });
    


        // Image slider 
        
        let slideIndex = 0;
        showSlides();

        function currentSlide(n) {
            slideIndex = n - 1;
            showSlides();
        }

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";

            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }
    


        // services function

      
        // Toggle Services Dropdown
        const servicesLink = document.getElementById('services-link');
        const servicesContainer = document.getElementById('services-container');

        servicesLink.addEventListener('click', (e) => {
            e.preventDefault();
            servicesContainer.style.display = servicesContainer.style.display === 'block' ? 'none' : 'block';
        });

        // Detect clicks outside the services-container to close it
        document.addEventListener('click', function (event) {
            const isClickInside = servicesLink.contains(event.target) || servicesContainer.contains(event.target);

            if (!isClickInside) {
                servicesContainer.style.display = 'none';
            }
        });

        // Navigate function for each service item
        function navigateTo(page) {
            window.location.href = page;
        }
   


        // active section
       
        const contents = [
            `We provide a variety of employment solutions to suit your staffing requirements. Our team is committed to identifying the perfect candidates for your company, making sure you have the necessary skills and knowledge to reach your objectives. With our employment solutions, you can concentrate on your core activities while we handle your staffing needs.`,
            `Our consulting services help businesses overcome challenges, optimize operations, and improve performance. We collaborate closely with our clients to understand their needs and offer customized solutions that drive success.`,
            `Our product development services span the entire product lifecycle. We help you design, develop, and launch innovative products that meet market demands and drive growth.`,
            `Outsourcing services allow you to delegate non-core activities to our team, freeing up your time and resources to focus on what truly matters to your business.`,
            `We offer comprehensive lead management services to help you capture, nurture, and convert leads into customers, improving your sales efficiency and effectiveness.`,
            `Our hybrid platform solutions blend the best of both on-premise and cloud-based technologies to deliver seamless, scalable, and secure systems for your business.`
        ];

        const menuButtons = document.querySelectorAll('.menu-btn');
        const contentText = document.getElementById('content-text');

        function showContent(index) {
            // Remove active class from all buttons
            menuButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            menuButtons[index].classList.add('active');
            // Update content text
            contentText.innerText = contents[index];
        }
   