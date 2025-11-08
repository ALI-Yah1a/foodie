const SEARCH_API_URL = "https://www.themaldb.com/api/json/v1/1/search.php?s=";
const RANDOM_API_URL = "https://www.themaldb.com/api/json/v1/1/random.php";
const LOOKUP_API_URL = "https://www.themaldb.com/api/json/v1/1/lookup.php?i=";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("search-results");
const massageArea = document.getElementById("massage-area");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("recipe-details-content");
const modalCloseBtn = document.getElementById("modal-close-btn");
