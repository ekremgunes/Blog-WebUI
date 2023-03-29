function filterCountry(countryId) {
    //code
    console.log(countryId)
    var icon = document.querySelector("#worldIcon")
    icon.style.color = "#0392d8eb"
    setTimeout(() => {
        icon.style.color = ""
    }, 2000);
}
function filterTop(params) {
    //code
    console.log("tops")
}
function filterHot(params) { //new
    //code
    console.log("hots")
    
}
function searchPost(e) {
    //code
    var searchValue = e.parentElement.querySelector("#search-input").value
    if (searchValue != "") {
        //searh
    
    }
    toastr.warning("Search input can't be empty")    
}

function LoadMore(element) {
    var hourglassIcon = document.querySelector(".fa-hourglass")
    //code
    element.style.display = "none"
    hourglassIcon.style.display = "inline-block"
    //action is done
    //fake action timing
    setTimeout(() => {
        element.style.display = "inline-block"
        hourglassIcon.style.display = "none"
    }, 2000);

}

function follow(element,userId) {
    //actions
    
}