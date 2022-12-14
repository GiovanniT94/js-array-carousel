const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

for (let i = 0; i < items.length; i++) {

    const image = document.createElement("div");
    image.classList.add("selector-image-" + i);

    if (i == 0) {
        image.classList.add("selected");
    } else {
        image.classList.add("unselected");
    }

    image.style.backgroundImage = "url(" + items[i] + ")";
    document.querySelector(".images-list").append(image);
}

document.querySelector(".showing-image").style.backgroundImage = "url(" + items[0] + ")";

document.querySelector(".showing-image-title").innerHTML = title[0];

document.querySelector(".showing-image-text").innerHTML = text[0];

let currentItemIndex = 0;

document.querySelector(".arrow.up").addEventListener("click", function () {

    const oldItem = document.querySelector(".selector-image-" + currentItemIndex);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    currentItemIndex--;
    if (currentItemIndex < 0) {
        currentItemIndex = items.length - 1;
    }

    const newItem = document.querySelector(".selector-image-" + currentItemIndex);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItemIndex] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItemIndex];

    document.querySelector(".showing-image-text").innerHTML = text[currentItemIndex];
});

document.querySelector(".arrow.down").addEventListener("click", function () {

    const oldItem = document.querySelector(".selector-image-" + currentItemIndex);

    oldItem.classList.remove("selected");
    oldItem.classList.add("unselected");

    currentItemIndex++;
    if (currentItemIndex > items.length - 1) {
        currentItemIndex = 0;
    }

    const newItem = document.querySelector(".selector-image-" + currentItemIndex);

    newItem.classList.remove("unselected");
    newItem.classList.add("selected");

    document.querySelector(".showing-image").style.backgroundImage = "url(" + items[currentItemIndex] + ")";

    document.querySelector(".showing-image-title").innerHTML = title[currentItemIndex];

    document.querySelector(".showing-image-text").innerHTML = text[currentItemIndex];
});