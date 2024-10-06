
        
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
    item.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach((nav) => {
            nav.classList.remove("active");
        });
        this.classList.add("active");
    });
});



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
   




// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate the increment
        const increment = target / speed;

        // If the count is less than the target, increase the count
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 50); // Adjust the speed of update
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
