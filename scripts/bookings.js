//import relevant array functions from database module
import { getVenues, getBands, getBookings } from "./database.js";


//click event. when user clicks booking, window alert all band info
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {

            const [, bookingPrimaryKey] = itemClicked.id.split("--")

            let currentBooking = null
            for (const booking of bookings) {
                if (parseInt(bookingPrimaryKey) === booking.id) {
                    currentBooking = booking
                }
            }

            let bandInfo = ""
            for (const band of bands) {
                if (currentBooking.bandId === band.id) {
                    bandInfo += `${band.name}\n${band.genre}\nFormed in ${band.formed}\n${band.members} members`
                }
            }
            window.alert(`${bandInfo}`)
        }
    }
)


//invoke and store in variable(s)
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

//function iterates through venues. Finds booked venue
const findBookedVenue = (booking, allVenues) => {
    let bookedVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookedVenue = venue
        }
    }

    return bookedVenue
}

//function to find booked band at venue
const findBookedBand = (booking, allBands) => {
    let bookedBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookedBand = band
        }
    }

    return bookedBand
}

//export function to create bookings HTML. 
//must invoke bookedVenue and bookedBand functions
//iterates through all bookings to find a match. adds all matches to HTML.
export const Bookings = () => {
    let bookingHTML = "<ul>"

    for (const booking of bookings) {
        const bookingBand = findBookedBand(booking, bands)
        const bookingVenue = findBookedVenue(booking, venues)

        bookingHTML += `
            <li id="booking--${booking.id}">
                ${bookingBand.name} is playing at ${bookingVenue.name} on ${booking.date}.
            </li>`
    }
    bookingHTML += "</ul>"

    return bookingHTML
}