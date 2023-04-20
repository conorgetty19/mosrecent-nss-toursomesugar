//import relevant array functions from database module
import { getBookings, getVenues, getBands } from "./database.js";

const bookings = getBookings()
const bands = getBands()
//click event. when user clicks venue, displays list of bands that have booked venue
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {

            const [, venuePrimaryKey] = itemClicked.id.split("--")

            let venueBookings = []
            for (const booking of bookings) {
                if (parseInt(venuePrimaryKey) === booking.venueId) {
                    venueBookings.push(booking)
                }
            }

            let venueBands = "Booked Bands:\n"
            for (const venueBooking of venueBookings) {
                for (const band of bands) {
                    if (venueBooking.bandId === band.id) {
                        venueBands += `${band.name}\n`
                    }
                }
            }
            window.alert(`${venueBands}`)
        }
    }
)

//export function to create venues HTML
export const venuesList = () => {
    const venues = getVenues()
    let venuesHTML = "<ul>"

    for (const venue of venues) {
        venuesHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venuesHTML += "</ul>"
    return venuesHTML
}