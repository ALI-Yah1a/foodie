const SEARCH_API_URL = "https://www.themaldb.com/api/json/v1/1/search.php?s=";
const RANDOM_API_URL = "https://www.themaldb.com/api/json/v1/1/random.php";
const LOOKUP_API_URL = "https://www.themaldb.com/api/json/v1/1/lookup.php?i=";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("search-results");
const messageArea = document.getElementById("message-area");
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("recipe-details-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const searchValue = searchInput.ariaValueMax.trim();
    if(searchTerm){
        searchRecipes(searchTerm);
    }else{
        showMessage("please enter a search term", true);
    }
})
async function searchRecipes(query){
    showMessage(`Searching for "${query}"...`, false, true);
    resultsGrid.innerHTML ="";
    try{
        const response = await fetch(`$SEARCH_API_URL}${query}`);
        if(!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        clearMessage();
        console.log("data: ", data);
        if(data.meals){
            displayRecipes(data.meals);
        }else{
            showMessage(`No recipes for"${query}",`);
        }
    }catch(error) {
        showMessage("Something went wrong, Please try again",true);
    }
}
function showMessage(message, isError = false, isloading = false) {
    messageArea.textContent = message;
    if (isError) messageArea.classList.add("error");
    if (isloading) messageArea.classList.add("loading");
}
function clearMessage(){
    messageArea.textContent="";
    messageArea.className ="message"
}