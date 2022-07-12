let inputCh = document.querySelector('#inputCheck')
let spanAdd = document.getElementById("spanAdd")
let span = document.getElementById("inputTExt")
let search = document.getElementById("sear");


inputCh.addEventListener("click", evt => {
    let footer = document.getElementById("foo")
    if (evt.target.checked) {
        document.getElementById("parentsUl").style.maxHeight = "0";
        document.getElementById("parentsUl").children[0].style.display = "none";
        footer.classList.add("active")
        console.log(footer)
    } else {
        document.getElementById("parentsUl").style.maxHeight = "inherit";
        document.getElementById("parentsUl").children[0].style.display = "block";
        footer.classList.remove("active")
    }
})


spanAdd.addEventListener("click", eAdd => {
    console.log()
    if (span.value != "") {
        let add =
            `<li class="lies">
                    <div class="book">
                        ${document.getElementById("inputTExt").value}
                     </div>
                    <div>
                        <button class="deleteCol" >حذف</button>
                    </div>
            </li>`;

        document.getElementById("inputTExt").value = ""
        document.getElementById("ul").innerHTML += add;
        removeLi()
    }
})

search.addEventListener("keyup", eSearch => {
    let valuseBooks;
    let valueSearch = eSearch.target.value.toUpperCase();
    let books = document.querySelectorAll(".book")
    for (let i = 0; i < books.length; i++) {
        valuseBooks = books[i].innerHTML;
        if (valuseBooks.toUpperCase().indexOf(valueSearch) > -1) {
            books[i].parentElement.style.display = "";
        } else {
            books[i].parentElement.style.display = "none";
        }
    }
})

function removeLi() {
    document.querySelectorAll(".deleteCol").forEach(eDelete => {
        console.log("parentsUl")
        eDelete.addEventListener("click", eClickDel => {
            eDelete.parentElement.parentElement.remove()
        })
    })
}

removeLi()

