const incidentCtx = document.getElementById('incidentChart').getContext('2d');
new Chart(incidentCtx, {
  type: 'pie',
  data: {
    labels: [
      'Building Fires',
      'Car Fires',
      'Forest Fires',
      'Grass/Bush Fires',
      'Waste Fires',
      'Other Fires'
    ],
    datasets: [{
      label: 'Incident %',
      data: [12, 7, 1, 34, 21, 25],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Fire Incident Types'
      }
    }
  }
});
const causeCtx = document.getElementById('causeChart').getContext('2d');
new Chart(causeCtx, {
  type: 'doughnut',
  data: {
    labels: [
      'Electrical Faults',
      'Kitchen Fires',
      'Arson',
      'Smoking Materials',
      'Heating Equipment',
      'Others'
    ],
    datasets: [{
      label: 'Cause %',
      data: [30, 25, 15, 10, 12, 8],
      backgroundColor: [
        '#FF6384',
        '#FF9F40',
        '#FFCE56',
        '#36A2EB',
        '#9966FF',
        '#4BC0C0'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Fire Causes Breakdown'
      }
    }
  }
});