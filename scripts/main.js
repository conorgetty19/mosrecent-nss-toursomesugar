//import relevant functions
import { bandList } from "./bands.js"
import { Bookings } from "./bookings.js"
import { venuesList } from "./venues.js"


//search document for container (to insert HTML) and store location
const mainContainer = document.querySelector("#container")

//variable to hold assembled HTML
const applicationHTML = `
<h1> Tour Some Sugar On Me</h1>
<article>
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>

<article class="availabilities">
    <section>
        <h2>Available Venues</h2>
        ${venuesList()}
    </section>
    <section>
        <h2>Available Acts</h2>
        ${bandList()}
</article>`

//place assembled HTML in relevant container
mainContainer.innerHTML = applicationHTML