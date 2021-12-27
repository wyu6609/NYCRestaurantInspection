let app = {
  apiURL: "2efac6464a3c82a53742c450a59a383d",
  //fetch api
  fetchAPI: function (restaurantName) {
    restaurantName = restaurantName.toUpperCase();
    console.log(restaurantName);
    fetch(
      `https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=${restaurantName}`
    )
      .then((response) => response.json())
      .then((data) => this.displayAPI(data));

    this.displayAPI();
  },
  // display data

  displayAPI: function (data) {
    // take json and store to js variables
    console.log(data);
    for (i = 0; i < 5; i++) {
      console.log(data[i].phone);
    }
  },
  // data to frontend (query selectors)

  search: function () {
    this.fetchAPI(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  app.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      app.search();
    }
  });
