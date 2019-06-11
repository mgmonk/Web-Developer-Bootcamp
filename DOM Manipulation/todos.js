var lis = document.querySelectorAll("li");

lis.forEach((li) => {
    li.addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    li.addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    });
});