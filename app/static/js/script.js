document.addEventListener('DOMContentLoaded', function() {
    const exitButton = document.querySelector('.exit-button');
    const menuToggle = document.querySelector('.menu-toggle');
    const slidebar = document.querySelector('.slidebar');

    exitButton.addEventListener('click', function() {
        exitButton.classList.add('shrink');
        setTimeout(function() {
            window.location.href = '/';
        }, 300); // Aguarda a transição antes de redirecionar
    });

    menuToggle.addEventListener('click', function() {
        slidebar.classList.toggle('active'); // Alterna a visibilidade da slidebar
    });

    var menuItems = document.querySelectorAll('.menu-item > a');
    
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var submenu = this.nextElementSibling;

            // Alterna a classe 'active' para exibir/ocultar o submenu
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Remove 'active' de todos os outros menus
                menuItems.forEach(function(i) {
                    i.classList.remove('active');
                    i.nextElementSibling.style.display = 'none';
                });

                this.classList.add('active');
            }

            // Alternar visibilidade do submenu
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});
