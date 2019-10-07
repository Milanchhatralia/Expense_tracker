var addData = (chart, label, data) => {
  //   console.log(label);
  //   console.log(data);
  chart.data.labels.push(label);
  //   chart.data.labels.push(label);
  chart.data.datasets.forEach(dataset => {
    dataset.data.push(data);
  });
  //   console.log(chart.data.datasets);
  //   console.log(chart.data.labels);
  //   chart.update();
};
var removeData = chart => {
  chart.data.labels.length = 0;
  chart.data.datasets[0].data = [];
  chart.data.datasets[0].backgroundColor = [];
  console.log(chart.data.labels);
  chart.update();
};
