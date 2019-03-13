var map;
var searchBtn = document.querySelector(".search-btn");
var searchForm = document.querySelector(".search-form");
var checkInDate = searchForm.querySelector("[name=check-in-date]");
var checkOutDate = searchForm.querySelector("[name=check-out-date]");
var buttonPlusAdults = searchForm.querySelector(".adults-visitors .search-btn-plus");
var buttonMinAdults = searchForm.querySelector(".adults-visitors .search-btn-min");
var plusAdults = document.getElementById('adults-visitors');
var minAdults = document.getElementById('adults-visitors');
var buttonPlusChildren = searchForm.querySelector(".children-visitors .search-btn-plus");
var buttonMinChildren = searchForm.querySelector(".children-visitors .search-btn-min");
var plusChildrens = document.getElementById('children-visitors');
var minChildrens = document.getElementById('children-visitors');

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 34.871002, lng: -111.760826},
    zoom: 9,
    disableDefaultUI: true
  });
}

try {
  storage = localStorage.getItem("checkInDate");
  storage = localStorage.getItem("checkOutDate");
} catch (err) {
  isStorageSupport = false;
}

searchForm.classList.add("form-hide");

searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.remove("form-error");
  searchForm.classList.toggle("form-hide");
  checkInDate.focus();
  checkInDate.select();
});

searchForm.addEventListener("submit", function (evt) {
  if (!checkInDate.value || !checkOutDate.value) {
    evt.preventDefault();
    searchForm.classList.remove("form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("checkInDate", checkInDate.value);
      localStorage.setItem("checkOutDate", checkOutDate.value);
  }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (searchForm.classList.contains("search-form")) {
      searchForm.classList.add("form-hide");
    }
  }
});

buttonPlusAdults.addEventListener("click", function (evt) {
  if (!plusAdults.value > 1 || plusAdults.value < 10) {
  plusAdults.value=parseInt(document.getElementById('adults-visitors').value)+1;
  }
});

buttonMinAdults.addEventListener("click", function (evt) {
  if (minAdults.value > 1) {
  minAdults.value=parseInt(document.getElementById('adults-visitors').value)-1;
  }
});

buttonPlusChildren.addEventListener("click", function (evt) {
  if (! plusChildrens.value > 0 || plusChildrens.value < 10) {
   plusChildrens.value=parseInt(document.getElementById('children-visitors').value)+1;
  }
});

buttonMinChildren.addEventListener("click", function (evt) {
  if (minChildrens.value > 0) {
  minChildrens.value=parseInt(document.getElementById('children-visitors').value)-1;
  }
});
