document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('#tablaphp tbody');
    const paginationContainer = document.querySelector('.pagination');
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');
    
    const pageSize = 10; // Cantidad de registros por página
    let data = []; // Variable para almacenar los datos
    let currentPage = 1; // Página actual, inicialmente 1

    // Declarar y definir la variable currentPage
    /* let currentPage = 1; */

  
    
                // Función para crear un botón de paginación
                function createPaginationButton(page, label, isActive = false) {
                    const button = document.createElement('button');
                    button.textContent = label;
                    button.classList.add('pagination-button');
                    if (isActive) {
                        button.classList.add('active');
                    }
                    button.addEventListener('click', function() {
                        fetchData(page);
                    });
                    return button;
                }



            function fetchData(page) {
                const xhr = new XMLHttpRequest();
               /*  xhr.open('POST', 'http://192.168.252.241:8085/despacho/leyes/obtendatos'); */
                xhr.open('POST', '<?php echo URL; ?>leyes/obtendatos');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        data = JSON.parse(xhr.responseText);
                        const totalPages = Math.ceil(data.length / pageSize);
                        updatePaginator(page, totalPages); // Llamada a la función para actualizar el paginador
                        renderTable(page); // Llamada a la función para renderizar la tabla con los datos de la página actual
                    } else {
                        console.error('Error al obtener los datos:', xhr.statusText);
                    }
                };
                xhr.send();
            }




// Función para actualizar el paginador
function updatePaginator(currentPage, totalPages) {
    paginationContainer.innerHTML = ''; // Limpiamos el paginador antes de agregar los nuevos botones
    //const currentPage = getCurrentPage();
    // Calcular el número de grupos de páginas
    const numGroups = Math.ceil(totalPages / 5);
    // Obtener el grupo actual
    const currentGroup = Math.ceil(currentPage / 5);
    // Calcular el rango de páginas para el grupo actual
    let startPage = (currentGroup - 1) * 5 + 1;
    let endPage = Math.min(startPage + 4, totalPages);
    // Agregar leyenda para la navegación
   const navLegend = document.createElement('div');
   navLegend.textContent = `Página ${currentPage} de ${totalPages}`;
   navLegend.classList.add('nav-legend'); // Agregar la clase CSS para la leyenda
   paginationContainer.appendChild(navLegend); 
    // Agregar botón para retroceder una página
    if (currentPage > 1) {
        paginationContainer.appendChild(createPaginationButton(currentPage - 1, 'Anterior'));
    }
    // Agregar botones para el grupo actual
    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(createPaginationButton(i, i.toString(), currentPage === i));
    }
    // Agregar botón para avanzar una página
    if (currentPage < totalPages) {
        paginationContainer.appendChild(createPaginationButton(currentPage + 1, 'Siguiente'));
    }
}




// Función para buscar registros
function searchRecords() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(function(rowData) {
        // Filtrar los registros que contengan el término de búsqueda en las propiedades NumeroLey o NumeroDecreto
        const numeroLey = rowData.NumeroLey ? rowData.NumeroLey.toLowerCase() : '';
        const NumeroDecreto = rowData.NumeroDecreto ? rowData.NumeroDecreto.toLowerCase() : '';
        return numeroLey.includes(searchTerm) || NumeroDecreto.includes(searchTerm);
    });
         // Verificar si no hay resultados
         if (filteredData.length === 0) {
        // Mostrar mensaje de no hay resultados en el render
        renderNoResultsMessage();
        return;
    }
    // Actualizar la tabla con los datos filtrados
    const totalPages = Math.ceil(filteredData.length / pageSize);
    updatePaginator(1, totalPages); // Ir a la primera página después de una búsqueda
    renderTable(1, filteredData); // Renderizar la tabla con los datos filtrados en la primera página
}

// Función para renderizar la tabla con los datos de la página actual
function renderTable(page, sourceData = data) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, sourceData.length);
    tableBody.innerHTML = ''; // Limpiar el contenido existente de la tabla
    // Construir las filas de la tabla con los datos de la página actual
    for (let i = startIndex; i < endIndex; i++) {
        const rowData = sourceData[i];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rowData.ID_Ley}</td>
            <td>${rowData.NumeroLey}</td>
            <td>${rowData.FechaSancionada}</td>
            <td>${rowData.FechaPromulgada}</td>
            <td>${rowData.NumeroDecreto}</td>
            <td>${rowData.NumeroBoletinOficial}</td>
            <td>${rowData.Ministerio}</td>
            <td>
                <a href="<?php echo URL; ?>leyes/ver/${rowData.ID_Ley}" class="btn btn-primary mx-1">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </a>
            </td>
        `;
        tableBody.appendChild(row);
    }
}


// Función para mostrar un mensaje de no hay resultados en el render
function renderNoResultsMessage() {
    // Limpia el contenido existente de la tabla y el paginador
    tableBody.innerHTML = '';
    paginationContainer.innerHTML = '';

    // Crea un mensaje de no hay resultados
    const messageRow = document.createElement('tr');
    messageRow.innerHTML = `
        <td colspan="8">No se encontraron resultados para la búsqueda.</td>
    `;
    tableBody.appendChild(messageRow);
}



               // Manejar el evento de clic del botón de búsqueda
            /*searchButton.addEventListener('click', function() {
                //console.log(`el valor del click entro`);
                searchRecords();
            }); */
                searchInput.addEventListener("keyup", (e) => {
                //console.log(`el valor del click entro`);
                searchRecords();
               });

                // Limpiar el input cuando se hace clic en el botón de limpieza
                searchInput.addEventListener('click', function() {
                searchInput.value = ''; // Limpiar el contenido del input
                 searchRecords();
                });


            // Cargar la primera página de datos al cargar la página
            fetchData(1);
           
});