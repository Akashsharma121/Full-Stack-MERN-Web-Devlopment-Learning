function creatCard(title, cName, views, monthsold, duration, Thumbnail){
    // Finish This function
    let viewStr;
    if (views<1000000){
        viewStr = views/1000 + "K";
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M";
    }
    else {
        viewStr = views/1000 + "K";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${Thumbnail}"
                    alt="">
                 <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} . ${monthsold} Months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html;
}


creatCard("Introduction to backend | Sigma web dev video #2 ", "CodeWithHarry", 560000, 7, "31:22","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")