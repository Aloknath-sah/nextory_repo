window.onload = () => {
    var btn = document.getElementById("btn")
    btn.addEventListener("click", handleAdd)
}

handleAdd = (e) => {
    e.preventDefault()
    var no = document.getElementById("no").value
    var name = document.getElementById("name").value
    var price = document.getElementById("price").value
    var qty = document.getElementById("qty").value
    var reason = document.getElementById("reason").value

    var tbody = document.getElementById("tbody")
    var tr = document.createElement("tr")
    tr.className = "border border-dark del1"
    var no1 = document.createElement("td")
    no1.textContent = no
    no1.className = "border border-dark"
    tr.append(no1)

    var name1 = document.createElement("td")
    name1.textContent = name
    name1.className = "border border-dark"
    tr.append(name1)

    var price1 = document.createElement("td")
    price1.textContent = price
    price1.className = "border border-dark"
    tr.append(price1)

    var qty1 = document.createElement("td")
    qty1.textContent = qty
    qty1.className = "border border-dark"
    tr.append(qty1)

    var reason1 = document.createElement("td")
    reason1.textContent = reason
    reason1.className = "border border-dark"
    tr.append(reason1)

    var pris = document.createElement("td")
    pris.textContent = "9"
    pris.className = "border border-dark"
    tr.append(pris)

    var priskod = document.createElement("td")
    priskod.textContent = "0"
    priskod.className = "border border-dark"
    tr.append(priskod)

    var type = document.createElement("td")
    type.textContent = "DEF"
    type.className = "border border-dark"
    tr.append(type)

    var bunt = document.createElement("td")
    bunt.textContent = "www"
    bunt.className = "border border-dark"
    tr.append(bunt)

    var delete1 = document.createElement("button")
    delete1.textContent = "delete"
    delete1.className = "border border-dark"
    tr.append(delete1)
    tbody.append(tr)
    delete1.setAttribute('onclick', "func()");

    //logic for 2nd box in the form
    var no2_val = document.getElementById("no2").value
    var name2_val = document.getElementById("name2").value
    var qty2_val = document.getElementById("qty2").value
    var reason2_val = document.getElementById("reason2").value

    var tbody2 = document.getElementById("tbody2")
    var tr = document.createElement("tr")
    tr.className = "border border-dark del2"
    var no2 = document.createElement("td")
    no2.textContent = no2_val
    no2.className = "border border-dark"
    tr.append(no2)

    var name2 = document.createElement("td")
    name2.textContent = name2_val
    name2.className = "border border-dark"
    tr.append(name2)

    var qty2 = document.createElement("td")
    qty2.textContent = qty2_val
    qty2.className = "border border-dark"
    tr.append(qty2)

    var reason2 = document.createElement("td")
    reason2.textContent = reason2_val
    reason2.className = "border border-dark"
    tr.append(reason2)

    var pris2 = document.createElement("td")
    pris2.textContent = "9"
    pris2.className = "border border-dark"
    tr.append(pris2)

    var priskod2 = document.createElement("td")
    priskod2.textContent = "0"
    priskod2.className = "border border-dark"
    tr.append(priskod2)

    var type2 = document.createElement("td")
    type2.textContent = "DEF"
    type2.className = "border border-dark"
    tr.append(type2)

    var bunt2 = document.createElement("td")
    bunt2.textContent = "www"
    bunt2.className = "border border-dark"
    tr.append(bunt2)

    var delete2 = document.createElement("button")
    delete2.textContent = "delete"
    delete2.className = "border border-dark"
    tr.append(delete2)
    tbody2.append(tr)
    delete2.setAttribute('onclick', "func1()");

    //logic for 3rd box in the form
    var no3_val = document.getElementById("no3").value
    var name3_val = document.getElementById("name3").value
    var qty3_val = document.getElementById("qty3").value
    var reason3_val = document.getElementById("reason3").value

    var tbody3 = document.getElementById("tbody3")
    var tr = document.createElement("tr")
    tr.className = "border border-dark del3"
    var no3 = document.createElement("td")
    no3.textContent = no3_val
    no3.className = "border border-dark"
    tr.append(no3)

    var name3 = document.createElement("td")
    name3.textContent = name3_val
    name3.className = "border border-dark"
    tr.append(name3)

    var qty3 = document.createElement("td")
    qty3.textContent = qty3_val
    qty3.className = "border border-dark"
    tr.append(qty3)

    var reason3 = document.createElement("td")
    reason3.textContent = reason3_val
    reason3.className = "border border-dark"
    tr.append(reason3)

    var pris3 = document.createElement("td")
    pris3.textContent = "9"
    pris3.className = "border border-dark"
    tr.append(pris3)

    var priskod3 = document.createElement("td")
    priskod3.textContent = "0"
    priskod3.className = "border border-dark"
    tr.append(priskod3)

    var type3 = document.createElement("td")
    type3.textContent = "DEF"
    type3.className = "border border-dark"
    tr.append(type3)

    var bunt3 = document.createElement("td")
    bunt3.textContent = "www"
    bunt3.className = "border border-dark"
    tr.append(bunt3)

    var delete3 = document.createElement("button")
    delete3.textContent = "delete"
    delete3.className = "border border-dark"
    tr.append(delete3)
    tbody3.append(tr)
    delete3.setAttribute('onclick', "func2()");

}

func = () => {
    document.getElementsByClassName("del1").remove()
}

func1 = () => {
    document.getElementsByClassName("del2").remove()
}

func2 = () => {
    document.getElementsByClassName("del3").remove()
}