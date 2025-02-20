document.addEventListener('DOMContentLoaded', () => {
    const descripcion = document.getElementById('descripcion');
    const cantidad = document.getElementById('cantidad');
    const precio = document.getElementById('precio');
    const agregar = document.getElementById('agregar');
    const tabla = document.getElementById('inventario').getElementsByTagName('tbody')[0];
    const exportar = document.getElementById('exportar');
    let contador = 1;

    agregar.addEventListener('click', () => {
        const desc = descripcion.value.trim();
        const cant = cantidad.value.trim();
        const prec = precio.value.trim();

        if (desc && cant && prec) {
            const fila = tabla.insertRow();
            const codigo = `INMD-${String(contador).padStart(3, '0')}`;
            fila.insertCell(0).textContent = codigo;
            fila.insertCell(1).textContent = desc;
            fila.insertCell(2).textContent = cant;
            fila.insertCell(3).textContent = prec;
            contador++;
            descripcion.value = '';
            cantidad.value = '';
            precio.value = '';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    exportar.addEventListener('click', () => {
        const wb = XLSX.utils.table_to_book(tabla.parentElement);
        XLSX.writeFile(wb, 'Inventario.xlsx');
    });
});