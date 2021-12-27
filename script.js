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
    const sliceData = data.slice(0, 3);
    console.log(sliceData);

    function create_h3(content) {
      let h3 = document.createElement("h3");
      h3.textContent = element.dba;
      return h3;
    }

    let Arr = [];
    let grade = document.querySelector(".grade");
    let h3 = document.createElement;
    sliceData.forEach((element) => {
      let grade = document.querySelector(".user-display");
      let content = `
        <div class = "sects">
          <p class="address">zipcode: ${element.dba} ${element.zipcode}</p>
        
          <p class="grade">Grade: ${element.grade}</p>
        </div>`;

      grade.insertAdjacentHTML("afterend", content);
    });

    // console.log(
    //   element.dba +
    //     "\n" +
    //     element.building +
    //     " " +
    //     element.street +
    //     " " +
    //     element.zipcode +
    //     "\n" +
    //     "GRADE: " +
    //     element.grade
    // )
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
