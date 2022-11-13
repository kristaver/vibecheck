const data = {
  labels: [],
  datasets: [
    {
      data: [
      ]
    }
  ]
}

export function dataToChart(entries) {
  entries.forEach((entry) => {
    data.labels.push(entry.time);
    data['datasets'][0]['data'].push(entry.value)
  })
  console.log('data after foreach', data)
  return data;
}