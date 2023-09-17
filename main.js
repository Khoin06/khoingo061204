
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let tabItems = $$(".tab__item");
// const tabList = $(".tab__list");

let paneItems = $$(".pane__item");



tabItems.forEach((item, index) => {
   

    item.onclick = function () {
        // console.log(index);

        $(".tab__item.active").classList.remove("active");
        $(".pane__item.active").classList.remove("active");

        this.classList.add("active");
        paneItems[index].classList.add("active");
    }
});