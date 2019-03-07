var map;
var searchBtn = document.querySelector(".search-btn");
var searchForm = document.querySelector(".search-form");
var checkInDate = searchForm.querySelector("[name=check-in-date]");
var checkOutDate = searchForm.querySelector("[name=check-out-date]");
var buttonPlusAduits = searchForm.querySelector(".aduits-visitors .search-btn-plus");
var buttonMinAduits = searchForm.querySelector(".aduits-visitors .search-btn-min");
var plusAduits = document.getElementById('aduits-visitors');
var minAduits = document.getElementById('aduits-visitors');
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

searchForm.classList.add("form-show");

searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-show");
  checkInDate.focus();
  checkInDate.select();
});

buttonPlusAduits.addEventListener("click", function (evt) {
  if (!plusAduits.value > 1 || plusAduits.value < 10) {
  plusAduits.value=parseInt(document.getElementById('aduits-visitors').value)+1;
  }
});

buttonMinAduits.addEventListener("click", function (evt) {
  if (minAduits.value > 1) {
  minAduits.value=parseInt(document.getElementById('aduits-visitors').value)-1;
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
