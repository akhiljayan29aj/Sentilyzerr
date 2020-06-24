// Setting up some common properties for all the charts
window.Apex = {
  chart: {
    foreColor: "#ccc",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    theme: "dark",
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

// Setting Up Variables
const dwpositive = [14, 25, 21, 17, 12, 13, 11, 19, 14, 25, 21, 17, 12, 13];
const dwneutral = [13, 23, 20, 8, 13, 27, 33, 12, 13, 23, 20, 8, 13, 27];
const dwsad = [11, 17, 15, 15, 21, 14, 15, 13, 11, 17, 15, 15, 21, 14];
const avgsent = [
  0.45,
  0.42,
  0.9,
  -0.42,
  -0.6,
  -0.1,
  -0.2,
  -0.16,
  -0.1,
  -0.09,
  0.34,
  0.88,
  0.07,
  0.8,
];
const dates = [
  "2011-01-01",
  "2011-01-02",
  "2011-01-03",
  "2011-01-04",
  "2011-01-05",
  "2011-01-06",
  "2011-01-07",
  "2011-01-08",
  "2011-01-09",
  "2011-01-10",
  "2011-01-11",
  "2011-01-12",
  "2012-01-13",
  "2012-01-14",
];

// SECTION A: SPARKBOXES
var spark1 = {
  chart: {
    id: "spark1",
    group: "spark",
    type: "line",
    height: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  yaxis: {
    labels: {
      minWidth: 40,
    },
  },
  series: [
    {
      data: dwpositive,
    },
  ],
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          height: 90,
        },
      },
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

var spark2 = {
  chart: {
    id: "spark2",
    group: "spark",
    type: "line",
    height: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  yaxis: {
    labels: {
      minWidth: 40,
    },
  },
  series: [
    {
      data: dwneutral,
    },
  ],
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          height: 90,
        },
      },
    },
  ],
  stroke: {
    curve: "smooth",
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  markers: {
    size: 0,
  },
  colors: ["#fff"],
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};

var spark3 = {
  chart: {
    id: "spark3",
    group: "spark",
    type: "line",
    height: 160,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
  },
  yaxis: {
    labels: {
      minWidth: 40,
    },
  },
  series: [
    {
      data: dwsad,
    },
  ],
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          height: 90,
        },
      },
    },
  ],
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110,
    },
  },
  colors: ["#fff"],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return "";
        },
      },
    },
  },
};
new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();

// SECTION B: BAR GRAPH
var optionsBar = {
  chart: {
    height: 380,
    type: "bar",
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      horizontal: false,
    },
  },
  series: [
    {
      name: "POSITIVE",
      data: dwpositive,
    },
    {
      name: "NEUTRAL",
      data: dwneutral,
    },
    {
      name: "NEGATIVE",
      data: dwsad,
    },
  ],
  title: {
    text: "Datewise Analysis of past 14 days ( yyyy/MM/dd )",
    align: "left",
    offsetY: 0,
  },
  xaxis: {
    categories: dates,
  },
  fill: {
    opacity: 1,
  },
};

var chartBar = new ApexCharts(document.querySelector("#datewise"), optionsBar);
chartBar.render();

// Section C: Average Sentiments Datewise
var optionsavg = {
  series: [
    {
      name: "Sentiment",
      data: avgsent,
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: 0,
            color: "#FEB019",
          },
        ],
      },
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: "Average Sentiment Date-wise",
    },
    tickAmount: 2,
    min: -1,
    max: 1,
  },
  xaxis: {
    categories: dates,
    labels: {
      rotate: -90,
    },
  },
  tooltip: {
    x: {
      format: "yyyy/MM/dd HH:mm",
    },
  },
};

var chart3 = new ApexCharts(document.querySelector("#average"), optionsavg);
chart3.render();

// Section D: Datewise analysis of last 14 days LINE GRAPH
var optionsLinez = {
  chart: {
    height: 328,
    type: "line",
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },

  //colors: ["#3F51B5", '#2196F3'],
  series: [
    {
      name: "Positive",
      data: dwpositive,
    },
    {
      name: "Neutral",
      data: dwneutral,
    },
    {
      name: "Negative",
      data: dwsad,
    },
  ],
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: dates,
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetY: -20,
  },
};

var chartLinez = new ApexCharts(document.querySelector("#linez"), optionsLinez);
chartLinez.render();
