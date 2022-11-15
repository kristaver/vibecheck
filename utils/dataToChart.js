export function dataToChart(entries) {

  // protoype data object for chart component
  const data = {labels: [], datasets: [{data: []}]}

  // creating new chart data object from local database of entries
  entries.forEach((entry) => {
    data.labels.push(entry.time);
    data['datasets'][0]['data'].push(entry.value)
  })
  return data;
}