// Setting up some common properties for all Charts
window.Apex = {
  chart: {
    foreColor: "#ccc",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 3,
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

/*              TIMESERIES STATS                   */

// Setting up variable
const url = "https://api.covid19india.org/data.json";
const totalconfirmed = [];
const totaldeceased = [];
const totalrecovered = [];
const date = [];

// Calling getData function
getData();

// Making a function to fetch data from the API
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < data.cases_time_series.length; i++) {
    totalconfirmed.push(data.cases_time_series[i].totalconfirmed);
    totaldeceased.push(data.cases_time_series[i].totaldeceased);
    totalrecovered.push(data.cases_time_series[i].totalrecovered);
    date.push(data.cases_time_series[i].date);
  }

  let last = data.cases_time_series[data.cases_time_series.length - 1];
  let last2 = data.cases_time_series[data.cases_time_series.length - 2];

  let incD = last.totaldeceased - last2.totaldeceased,
    incR = last.totalrecovered - last2.totalrecovered,
    incC = last.totalconfirmed - last2.totalconfirmed;

  if (incD > 0) {
    document.querySelector(".inc-death").innerText = ` + ${incD}`;
  } else {
    document.querySelector(".inc-death").innerText = ` - ${incD}`;
  }

  if (incR > 0) {
    document.querySelector(".inc-recovery").innerText = ` + ${incR}`;
  } else {
    document.querySelector(".inc-recovery").innerText = ` - ${incR}`;
  }

  if (incC > 0) {
    document.querySelector(".inc-confirm").innerText = ` + ${incC}`;
  } else {
    document.querySelector(".inc-confirm").innerText = ` - ${incC}`;
  }

  // Rendering the Chart
  var chart = new ApexCharts(document.querySelector("#timeseries"), optionnew);
  chart.render();
}

// Making the Time-Series Chart
var optionnew = {
  chart: {
    height: 500,
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
  },
  series: [
    {
      name: "Confirmed",
      data: totalconfirmed,
    },
    {
      name: "Deceased",
      data: totaldeceased,
    },
    {
      name: "Recovered",
      data: totalrecovered,
    },
  ],
  title: {
    text: "Time-Series Stats  (dd/MM HH:mm)",
    align: "left",
    offsetY: 25,
    offsetX: 20,
  },
  subtitle: {
    text: "No. of People",
    offsetY: 55,
    offsetX: 20,
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: date,
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },

  xaxis: {
    type: "datetime",
    categories: date,
  },
  tooltip: {
    x: {
      format: "dd/MM HH:mm",
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

/*              STATEWISE STATS            */

// Setting up Variables
const url1 =
  "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
const confirmed = [];
const deaths = [];
const recovered = [];
const active = [];
const state = [];
const total = [];

// Calling getData1 function
getData1();

// Making a function to fetch data from the 2nd API
async function getData1() {
  const response = await fetch(url1);
  const data = await response.json();
  for (let i = 0; i < 37; i++) {
    confirmed.push(data.data.statewise[i].confirmed);
    deaths.push(data.data.statewise[i].deaths);
    recovered.push(data.data.statewise[i].recovered);
    active.push(data.data.statewise[i].active);
    state.push(data.data.statewise[i].state);
  }
  total.push(data.data.total.confirmed);
  total.push(data.data.total.recovered);
  total.push(data.data.total.deaths);
  total.push(data.data.total.active);

  for (let i = 1; i < state.length + 1; i++) {
    document.getElementById(`${i}`).innerText = state[i - 1];
  }

  getTotal();
}

// Making a function for displaying the stats according to the selected state
function changeText() {
  x = document.getElementById("mySelect");
  document.querySelector(".state").innerHTML = state[x.selectedIndex];
  document.querySelector(".confirmed").innerHTML = confirmed[x.selectedIndex];
  document.querySelector(".deaths").innerHTML = deaths[x.selectedIndex];
  document.querySelector(".recovered").innerHTML = recovered[x.selectedIndex];
  document.querySelector(".active").innerHTML = active[x.selectedIndex];
}

/*                 Total Stats                   */

// Making a function for displaying the overall stats
async function getTotal() {
  document.getElementById("tconfirmed").innerHTML = total[0];
  document.querySelector("#trecovered").innerHTML = total[1];
  document.querySelector("#tdeaths").innerHTML = total[2];
  document.querySelector("#tactive").innerHTML = total[3];
}

/*        Latest News          */

// Setting up variables
titls = [];
imgs = [];
links = [];

// Calling getData2
getData2();

// Making a function to fetch data from a CSV file generated by the newsExtractor python script
async function getData2() {
  const response = await fetch(
    "https://gnews.io/api/v3/search?q=covid%20india&country=in&token=6f351474b542367c3a54736c1576d9e3"
  );
  const data = await response.json();

  console.log(data);

  if (response.status == 200) {
    for (let i = 0; i < data.articles.length; i++) {
      titls.push(data.articles[i].title);
      links.push(data.articles[i].url);
      if (data.articles[i].image == null) {
        imgs.push("public/img/18.png");
      } else {
        imgs.push(data.articles[i].image);
      }
    }
  } else {
    const response1 = await fetch(
      "https://raw.githubusercontent.com/SmartPracticeschool/SBSPS-Challenge-2671-Sentiment-analysis-of-COVID-19-tweets-Visualization-dashboard/master/public/data/news.csv"
    );
    const data1 = await response1.text();
    const table = data1.split("\n").slice(1);
    table.forEach((row) => {
      const columns = row.split(",");
      const titl = columns[1];
      titls.push(titl);
      const link = columns[2];
      links.push(link);
      const imag = columns[3];
      imgs.push(imag);
    });
  }

  getNews();
}

// Embedding the images, titles and links into their respective divs
function getNews() {
  document.getElementById("news1").innerHTML = `<img src="${imgs[0]}">
  <div>
    <h3>
      <a href="${links[0]} target="_blank">${titls[0]}</a>
    </h3>
  </div>`;

  document.getElementById("news2").innerHTML = `<img src="${imgs[1]}">
  <div>
    <h3>
      <a href="${links[1]}" target="_blank">${titls[1]}</a>
    </h3>
  </div>`;

  document.getElementById("news3").innerHTML = `<img src="${imgs[2]}">
  <div>
    <h3>
      <a href="${links[2]}" target="_blank">${titls[2]}</a>
    </h3>
  </div>`;
  document.getElementById("news4").innerHTML = `<img src="${imgs[3]}">
  <div>
    <h3>
      <a href="${links[3]}" target="_blank">${titls[3]}</a>
    </h3>
  </div>`;

  document.getElementById("news5").innerHTML = `<img src="${imgs[4]}">
  <div>
    <h3>
      <a href="${links[4]}" target="_blank">${titls[4]}</a>
    </h3>
  </div>`;

  document.getElementById("news6").innerHTML = `<img src="${imgs[5]}">
  <div>
    <h3>
      <a href="${links[5]}" target="_blank">${titls[5]}</a>
    </h3>
  </div>`;
}
