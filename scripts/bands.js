//import relevant array functions from database module
import { getBands, getBookings, getVenues, getBandMembers} from "./database.js";
//store arrays
const bands = getBands()
const bandMembers = getBandMembers()
const venues = getVenues()
const bookings = getBookings()

//click event. when user clicks band name, window alert all venues band is playing at
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {

            const [, bandPrimaryKey] = itemClicked.id.split("--")

            let bandBookings = []
            for (const booking of bookings) {
                if (parseInt(bandPrimaryKey) === booking.bandId) {
                    bandBookings.push(booking)
                }
            }

            let bandVenues = "Booked venues:\n"
            for (const bandBooking of bandBookings) {
                for (const venue of venues) {
                    if (bandBooking.venueId === venue.id) {
                        bandVenues += `${venue.name}\n`
                    }
                }
            }

            //build list of band members to display

            //loop through bandMembers
            //compare bandId to bandPrimaryKey. If a match, add bandMember to array
            //Build another array with name and position 
            //join 
            const matchingBandMembers = bandMembers.filter(member =>  member.bandId === parseInt(bandPrimaryKey))
            const memberNamesAndPositions = matchingBandMembers.map(member => {
                return `${member.firstName} ${member.lastName} (${member.position})\n`
            })

            window.alert(`${memberNamesAndPositions}
                ${bandVenues}`)
        }
    }
)

//export function to create bands HTML
export const bandList = () => {
    const bands = getBands()
    let bandsHTML = "<ul>"

    for (const band of bands) {
        bandsHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandsHTML += "</ul>"
    return bandsHTML
}