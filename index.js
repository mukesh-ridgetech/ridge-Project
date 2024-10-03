
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
    