// Setting up some base properties for all the charts
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

// Setting up variables

const delpos = [14, 25, 21, 17, 12, 13, 11, 19, 14, 25, 21, 17, 12, 13];
const delneu = [11, 17, 15, 15, 21, 14, 15, 13, 11, 17, 15, 15, 21, 14];
const delneg = [16, 18, 25, 19, 29, 19, 25, 23, 15, 16, 18, 19, 29, 24];

const mumpos = [16, 18, 25, 19, 29, 19, 25, 23, 15, 16, 18, 19, 29, 24];
const mumneu = [11, 17, 15, 15, 21, 14, 15, 13, 11, 17, 15, 15, 21, 14];
const mumneg = [14, 25, 21, 17, 12, 13, 11, 19, 14, 25, 21, 17, 12, 13];

const chenpos = [16, 18, 25, 19, 29, 19, 25, 23, 15, 16, 18, 19, 29, 24];
const chenneu = [14, 25, 21, 17, 12, 13, 11, 19, 14, 25, 21, 17, 12, 13];
const chenneg = [11, 17, 15, 15, 21, 14, 15, 13, 11, 17, 15, 15, 21, 14];

const kolpos = [11, 17, 15, 15, 21, 14, 15, 13, 11, 17, 15, 15, 21, 14];
const kolneu = [14, 25, 21, 17, 12, 13, 11, 19, 14, 25, 21, 17, 12, 13];
const kolneg = [16, 18, 25, 19, 29, 19, 25, 23, 15, 16, 18, 19, 29, 24];

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

// Section B: Sparkboxes

var spark4 = {
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
      data: delpos,
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

var spark5 = {
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
      data: delneu,
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

var spark6 = {
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
      data: delneg,
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
const sparks4 = new ApexCharts(document.querySelector("#spark4"), spark4);
const sparks5 = new ApexCharts(document.querySelector("#spark5"), spark5);
const sparks6 = new ApexCharts(document.querySelector("#spark6"), spark6);

sparks4.render();
sparks5.render();
sparks6.render();

// Section C: Datewise analysis of last 14 days BAR GRAPH according to the location
var optionsBarLoco = {
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
      data: delpos,
    },
    {
      name: "NEUTRAL",
      data: delneu,
    },
    {
      name: "NEGATIVE",
      data: delneg,
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

var chartBarLoco = new ApexCharts(
  document.querySelector("#loco-datewise"),
  optionsBarLoco
);
chartBarLoco.render();

// Section D: Datewise analysis of last 14 days LINE GRAPH according to the location

var optionsLocoLinez = {
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
      data: delpos,
    },
    {
      name: "Neutral",
      data: delneu,
    },
    {
      name: "Negative",
      data: delneg,
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

var chartLocoLinez = new ApexCharts(
  document.querySelector("#loco-linez"),
  optionsLocoLinez
);
chartLocoLinez.render();

// Function to change the data to data of Delhi
function changeToDelhi() {
  chartBarLoco.updateSeries([
    {
      name: "POSITIVE",
      data: delpos,
    },
    {
      name: "NEUTRAL",
      data: delneu,
    },
    {
      name: "NEGATIVE",
      data: delneg,
    },
  ]);
  sparks4.updateSeries([
    {
      data: delpos,
    },
  ]);
  sparks5.updateSeries([
    {
      data: delneu,
    },
  ]);
  sparks6.updateSeries([
    {
      data: delneg,
    },
  ]);
  chartLocoLinez.updateSeries([
    {
      name: "Positive",
      data: delpos,
    },
    {
      name: "Neutral",
      data: delneu,
    },
    {
      name: "Negative",
      data: delneg,
    },
  ]);
  document.getElementById("selectedloc").textContent =
    "Selected Location: Delhi";
}

// Function to change the data to data of Mumbai
function changeToMumbai() {
  chartBarLoco.updateSeries([
    {
      name: "POSITIVE",
      data: mumpos,
    },
    {
      name: "NEUTRAL",
      data: mumneu,
    },
    {
      name: "NEGATIVE",
      data: mumneg,
    },
  ]);
  sparks4.updateSeries([
    {
      data: mumpos,
    },
  ]);
  sparks5.updateSeries([
    {
      data: mumneu,
    },
  ]);
  sparks6.updateSeries([
    {
      data: mumneg,
    },
  ]);
  chartLocoLinez.updateSeries([
    {
      name: "Positive",
      data: mumpos,
    },
    {
      name: "Neutral",
      data: mumneu,
    },
    {
      name: "Negative",
      data: mumneg,
    },
  ]);
  document.getElementById("selectedloc").textContent =
    "Selected Location: Mumbai";
}

// Function to change the data to data of Chennai
function changeToChennai() {
  chartBarLoco.updateSeries([
    {
      name: "POSITIVE",
      data: chenpos,
    },
    {
      name: "NEUTRAL",
      data: chenneu,
    },
    {
      name: "NEGATIVE",
      data: chenneg,
    },
  ]);
  sparks4.updateSeries([
    {
      data: chenpos,
    },
  ]);
  sparks5.updateSeries([
    {
      data: chenneu,
    },
  ]);
  sparks6.updateSeries([
    {
      data: chenneg,
    },
  ]);
  chartLocoLinez.updateSeries([
    {
      name: "Positive",
      data: chenpos,
    },
    {
      name: "Neutral",
      data: chenneu,
    },
    {
      name: "Negative",
      data: chenneg,
    },
  ]);
  document.getElementById("selectedloc").textContent =
    "Selected Location: Chennai";
}

// Function to change the data to data of Kolkata
function changeToKolkata() {
  chartBarLoco.updateSeries([
    {
      name: "POSITIVE",
      data: kolpos,
    },
    {
      name: "NEUTRAL",
      data: kolneu,
    },
    {
      name: "NEGATIVE",
      data: kolneg,
    },
  ]);
  sparks4.updateSeries([
    {
      data: kolpos,
    },
  ]);
  sparks5.updateSeries([
    {
      data: kolneu,
    },
  ]);
  sparks6.updateSeries([
    {
      data: kolneg,
    },
  ]);
  chartLocoLinez.updateSeries([
    {
      name: "Positive",
      data: kolpos,
    },
    {
      name: "Neutral",
      data: kolneu,
    },
    {
      name: "Negative",
      data: kolneg,
    },
  ]);
  document.getElementById("selectedloc").textContent =
    "Selected Location: Kolkata";
}
