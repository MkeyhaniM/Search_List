let inputCh = document.querySelector('#inputCheck')
let spanAdd = document.getElementById("spanAdd")
let span = document.getElementById("inputTExt")
let search = document.getElementById("sear");
let books = document.querySelectorAll(".book")

inputCh.addEventListener("click", evt => {
    let footer = document.getElementById("foo")
    if (evt.target.checked) {
        document.getElementById("parentsUl").style.maxHeight = "0";
        document.getElementById("parentsUl").children[0].style.display = "none";
        footer.classList.add("active")
    } else {
        document.getElementById("parentsUl").style.maxHeight = "inherit";
        document.getElementById("parentsUl").children[0].style.display = "block";
        footer.classList.remove("active")
    }
})

spanAdd.addEventListener("click", eAdd => {
    if (span.value != "") {
        let value = span.value;
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
        addToLocalStorage(value);
    }
    removeLi();
})

window.addEventListener("DOMContentLoaded", eContentLoaded => {
    let save;
    if (localStorage.getItem("list") == null) {
        save = [];
    } else {
        save = localStorage.getItem("list").split(",");
    }

    for (let string = 0; string < save.length; string++) {
        let add =
            `<li class="lies">
                    <div class="book">
                        ${save[string]}
                     </div>
                    <div>
                        <button class="deleteCol">حذف</button>
                    </div>
            </li>`;
        document.getElementById("ul").innerHTML += add;
    }
    removeLi();
})

search.addEventListener("keyup", eSearch => {
    let valuseBooks;
    let valueSearch = eSearch.target.value.toUpperCase();
    books = document.querySelectorAll(".book")
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
        eDelete.addEventListener("click", eClickDel => {
            eDelete.parentElement.parentElement.remove();
            removeFromListStorage(eDelete.parentElement.parentElement.children[0].textContent)
        })
    })
}

function addToLocalStorage(addLocal) {
    let save;
    if (localStorage.getItem("list") == null) {
        save = [];
    } else {
        save = localStorage.getItem("list").split(",");
    }
    save.push(addLocal)
    localStorage.setItem("list", save);
}

function removeFromListStorage(nameBook) {
    let save;
    if (localStorage.getItem("list") == null) {
        save = [];
    } else {
        save = localStorage.getItem("list").split(",")
    }
    let meghder = nameBook.matchAll(/a-zA-Z/);
    for (let i = 0; i < save.length; i++) {
        if (save[i] === meghder) {
            save.splice(i, 1)
        } else {
            console.log("123")
        }
    }
    console.log(meghder)
    localStorage.setItem("list", save)
    console.log(save)
}