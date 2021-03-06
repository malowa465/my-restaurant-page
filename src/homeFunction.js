import removeAllChildNodes from './removeAllChildNodes'
import menuFunction from './menuFunction'
import contactFunction from './contactFunction'
import galleryFunction from './galleryFunction';

let space = '&#8287;'


const homeFunction = () => {



    let home = document.querySelector("#content");
    let nav = document.createElement("div");
    nav.classList.add("topnavHome");
    home.appendChild(nav);

    let homeButton = document.createElement("button");
    homeButton.id = "homeButton"
    homeButton.classList.add("buttonHomeActive");
    homeButton.innerHTML = "Home"

    let menuButton = document.createElement("button");
    menuButton.id = "menuButton"
    menuButton.classList.add("buttonHome");

    menuButton.innerHTML = "Menu"

    let contactButton = document.createElement("button");
    contactButton.id = "contactButton"
    contactButton.classList.add("buttonHome");

    contactButton.innerHTML = "Contact"

    let galleryButton = document.createElement("button");
    galleryButton.id = "galleryButton"
    galleryButton.classList.add("buttonHome");

    galleryButton.innerHTML = "Gallery"

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    nav.appendChild(galleryButton);

    let menu = document.createElement("div");
    menu.id = "menu"

    home.appendChild(menu)
    let homeContent = document.createElement("div");
    homeContent.id = "home"
    menu.appendChild(homeContent);

    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logoDiv")
    homeContent.appendChild(logoDiv)
    let logo = document.createElement("img");
    logo.classList.add("logoHome")
    logo.src = "./images/logo.png"
    logoDiv.appendChild(logo)

    let address = document.createElement("p");
    address.classList.add("addressFront")
    address.innerHTML = "savannah St, donholm, EMB 033"
    logoDiv.appendChild(address)

    let boxContainer = document.createElement("div");
    homeContent.appendChild(boxContainer)



    let featuredFood = document.createElement("div");
    featuredFood.classList.add("featuredFood");
    featuredFood.id = "featuredFood";
    // featuredFood.src = "./images/buffet.jpg"
    boxContainer.appendChild(featuredFood)

    let delivery = document.createElement("div");
    delivery.classList.add("callToAction")
    delivery.innerHTML = `
    <br>
    <br>
    <p>Please call <a href="tel:0742021232">(254) 742261901</a> to place an order</p>
    <br>
    <p>Click below to order delivery with Grubhub</p>
    <br>
    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">
    <img src="./images/grub.png" alt="Grubhub Logo" class="grub-contact"></a>
    <br>

    <br>
    `

    boxContainer.appendChild(delivery)

    let hours = document.createElement("p");
    let hoursTable = document.createElement("table");
    hoursTable.classList.add("hours")
    hoursTable.innerHTML = `
    <table>
        <tr><th>Monday  -${space}</th><td>Closed</td></tr>
        <tr><th>Tuesday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Wednesday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Thursday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Friday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Saturday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Sunday  -${space}</th><td>Closed</td></tr>
    </table>
    `


    boxContainer.appendChild(hours)
    hours.appendChild(hoursTable)

    // let address = document.createElement("p");
    // address.classList.add("address")
    // address.innerHTML = "savannah St, donholm, EMB 033"
    // boxContainer.appendChild(address)






    let featuredFood2 = document.createElement("div");
    featuredFood2.classList.add("featuredFood2");
    featuredFood2.id = "featuredFood2"

    // featuredFood2.src = "./images/smoothies.jpg"
    boxContainer.appendChild(featuredFood2)

    let p1 = document.createElement("p");
    p1.classList.add("copy")
    p1.classList.add("first")
    p1.innerHTML = "Serving the community since 2019 in the four corners neighborhood of donholm."
    boxContainer.appendChild(p1)

    let p2 = document.createElement("p");
    p2.classList.add("copy")
    p2.innerHTML = "The consciousness is expanded on health — health and wellness. It’s up to us to take care of our bodies, mind, and spirit. This is our focus: to help with the community and ourselves as well."
    boxContainer.appendChild(p2)

    let p3 = document.createElement("p");
    p3.classList.add("copy")
    p3.classList.add("last")
    p3.innerHTML = "Come by and enjoy one of our fresh dishes or one of our juices, smoothies, or shakes. Visit our menu section to see our combo meals, wraps, and grain bowl choices."
    boxContainer.appendChild(p3)

    let footer = document.createElement("div");
    footer.classList.add("footer");
    boxContainer.appendChild(footer)

    let stopBy = document.createElement("p");
    stopBy.classList.add("social")
    stopBy.innerHTML = 
    `
    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">
    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">
    </a>
    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">
    <img src="./images/facebook.png" alt="facebook Logo" class="grub">
    </a>
    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">
    <img src="./images/insta.png" alt="instagram Logo" class="grub">
    </a>
    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">
    <img src="./images/yelp.png" alt="yelp Logo" class="grub">
    </a>
    `
    footer.appendChild(stopBy)

    let copyright = document.createElement("p");
    copyright.classList.add("copyright");
    copyright.innerHTML = `© 2020 kula na me`
    footer.appendChild(copyright)

    let image1 = document.getElementById("featuredFood")
    let image2 = document.getElementById("featuredFood2")


    document.getElementById("homeButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        homeFunction();
    })
    
    document.getElementById("menuButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        menuFunction();
    })
    
    document.getElementById("contactButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        contactFunction();
    })

    document.getElementById("galleryButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        galleryFunction();
    })
}

export default homeFunction



