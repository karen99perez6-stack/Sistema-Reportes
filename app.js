// Obtener el contexto del canvas
const ctx = document.getElementById('graficaReporte').getContext('2d');

// Datos para el reporte (Simulados para el sistema)
const datosReporte = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Citas / Servicios Atendidos',
        data: [25, 40, 18, 35, 50, 42],
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

// Crear la instancia de la gráfica con Chart.js
let miGrafica = new Chart(ctx, {
    type: 'bar', // Tipo de gráfica de barras
    data: datosReporte,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Función básica para cambiar datos cuando el usuario cambia el año en el filtro
function actualizarReporte() {
    const anioSeleccionado = document.getElementById('filtroAnio').value;
    
    if (anioSeleccionado === '2025') {
        miGrafica.data.datasets[0].data = [15, 22, 30, 28, 19, 33];
    } else {
        miGrafica.data.datasets[0].data = [25, 40, 18, 35, 50, 42];
    }
    
    // Actualizar la gráfica en pantalla
    miGrafica.update();
}