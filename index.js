// var forms = document.getElementById("form")

function obj(n, c, u, i, b) {
    this.name = n
    this.course = c
    this.unit = u
    this.image = i
    this.batch = b
}

var arr = JSON.parse(localStorage.getItem("student")) || [];

function submitData(e) {
    event.preventDefault()
    var forms = document.getElementById("form")
    // console.log(forms)
    var name = forms.name.value
    var course = forms.course.value
    var unit = forms.unit.value
    var image = forms.image.value
    var batch = forms.batch.value

    var data = new obj(name, course, unit, image, batch)

    arr.push(data)
    // console.log(arr)

    localStorage.setItem("student", JSON.stringify(arr))

    window.location.reload()
}


function calculate() {
    var batchData = JSON.parse(localStorage.getItem("student")) || [];
    var obj = {};
    for (var i = 0; i < batchData.length; i++) {
        if (obj[batchData[i].batch] == undefined) {
            obj[batchData[i].batch] = 1;
        }
        else {
            obj[batchData[i].batch]++;
        }
    }

    console.log(obj)
    for (var key in obj) {
        if (key == 15) {
            var fw15 = read("web_15a")
            fw15.innerText = obj[key]
        }
        else if (key == 16) {
            var fw16 = read("web_16a")
            fw16.innerText = obj[key]
        }
        else if (key == 17) {
            var fw17 = read("web_17a")
            fw17.innerText = obj[key]
        }
        else if (key == 18) {
            var fw18 = read("web_18a")
            fw18.innerText = obj[key]
        }
        else if (key == 19) {
            var fw19 = read("web_19a")
            fw19.innerText = obj[key]
        }
        else
            continue;
    }
}

calculate()

function read(id) {
    return document.getElementById(id)
}