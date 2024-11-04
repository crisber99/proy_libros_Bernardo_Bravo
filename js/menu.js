document.addEventListener('DOMContentLoaded', function () {


    const menuData = tipoMenu(1);

    function tipoMenu(rol){
        var arregloMenu;
        switch(rol){
            case 1://administrador
                arregloMenu = [
                    {
                        "text": "Inicio",
                        "href": "Index.html"
                    },
                    {
                        "text": "Quienes Somos",
                        "href": "QuienesSomos.html",
                    },
                    {
                        "text": "Catálogo",
                        "href": "Catalogo.html"
                    },
                    {
                        "text": "Registro",
                        "href": "Registro.html"
                    },
                    {
                        "text": "Admin. Roles",
                        "href": "Roles.html"
                    }
                ];
                break;
            default://los demás roles
                arregloMenu = [
                    {
                        "text": "Inicio",
                        "href": "Index.html"
                    },
                    {
                        "text": "Quienes Somos",
                        "href": "QuienesSomos.html",
                    },
                    {
                        "text": "Catálogo",
                        "href": "Catalogo.html"
                    },
                    {
                        "text": "Registro",
                        "href": "Registro.html"
                    }
                ];
                break;
        }

        return arregloMenu;
    }

    const menuContainer = document.getElementById('dynamic-menu');

    function createMenuItem(item) {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);

        if (item.children) {
            li.className += ' dropdown';
            a.className += ' dropdown-toggle';
            a.setAttribute('data-bs-toggle', 'dropdown');

            const ul = document.createElement('ul');
            ul.className = 'dropdown-menu';

            item.children.forEach(child => {
                const childLi = createMenuItem(child);
                ul.appendChild(childLi);
            });

            li.appendChild(ul);
        }

        return li;
    }

    menuData.forEach(item => {
        const menuItem = createMenuItem(item);
        menuContainer.appendChild(menuItem);
    });


});
