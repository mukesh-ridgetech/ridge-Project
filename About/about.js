
        
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
