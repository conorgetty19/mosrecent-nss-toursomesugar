//define database object
//will have properties with values equal to an array
//array will contain individual objects (ex: band objects) with their own properties
const database = {

    bands: [
        { id: 1, name: "Mosaic Witch", members: 8, genre: "rock", formed: "2012" },
        { id: 2, name: "Scheduling Movement", members: 5, genre: "soft metal", formed: "2009" },
        { id: 3, name: "Braid Unlike", members: 3, genre: "landscape metal", formed: "2007" },
        { id: 4, name: "Guide Beagle", members: 2, genre: "hardscape metal", formed: "2006" },
        { id: 5, name: "Oneself Fumble", members: 1, genre: "elevator music", formed: "2021" },
        { id: 6, name: "Stroker Blister", members: 4, genre: "escalator music", formed: "2020" },
        { id: 7, name: "Mathematics Lawn", members: 2, genre: "deescalator music", formed: "2001" },
        { id: 8, name: "Parakeet Mangler", members: 2, genre: "da escalator music", formed: "2001" },
        { id: 9, name: "Sleigh Hop", members: 2, genre: "dad rock", formed: "2001" },
        { id: 10, name: "The Relentless And", members: 2, genre: "jazz", formed: "1776" },
        { id: 11, name: "The Artist Formerly Known as Cassius Clay", members: 2, genre: "jazz", formed: "1999" },
        { id: 12, name: "Womp", members: 2, genre: "jazz", formed: "a few days" }
    ],
    bandMembers: [
        {id: 1, bandId: 1, firstName: "Chad", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 2, bandId: 1, firstName: "Chad", lastName: "Chad", birthyear: 1999, position: "singer"},
        {id: 3, bandId: 1, firstName: "Chad", lastName: "Steve", birthyear: 1999, position: "singer"},
        {id: 4, bandId: 1, firstName: "Chad", lastName: "Bryan", birthyear: 1999, position: "singer"},
        {id: 5, bandId: 1, firstName: "Wollump", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 6, bandId: 1, firstName: "Steve", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 7, bandId: 1, firstName: "Bryan", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 8, bandId: 1, firstName: "Wollump", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 9, bandId: 2, firstName: "Chad", lastName: "Wollump", birthyear: 1999, position: "singer"},
        {id: 10, bandId: 2, firstName: "Chad", lastName: "Brad", birthyear: 1999, position: "singer"},
        {id: 11, bandId: 2, firstName: "Chad", lastName: "Brock", birthyear: 1999, position: "singer"},
        {id: 12, bandId: 2, firstName: "Chad", lastName: "Joe", birthyear: 1999, position: "singer"},
        {id: 13, bandId: 2, firstName: "Chad", lastName: "Tim", birthyear: 1999, position: "singer"},
        {id: 14, bandId: 3, firstName: "Chad", lastName: "Tom", birthyear: 1999, position: "singer"},
        {id: 15, bandId: 3, firstName: "Chad", lastName: "Thomas", birthyear: 1999, position: "singer"},
        {id: 16, bandId: 3, firstName: "Chad", lastName: "Stanley", birthyear: 1999, position: "singer"},
        {id: 17, bandId: 4, firstName: "Chad", lastName: "Charles", birthyear: 1999, position: "singer"},
        {id: 18, bandId: 4, firstName: "Chad", lastName: "A", birthyear: 1999, position: "singer"},
        {id: 19, bandId: 5, firstName: "Chad", lastName: "B", birthyear: 1999, position: "singer"},
        {id: 20, bandId: 6, firstName: "Chad", lastName: "W", birthyear: 1999, position: "singer"},
        {id: 21, bandId: 6, firstName: "Chad", lastName: "C", birthyear: 1999, position: "singer"},
        {id: 22, bandId: 6, firstName: "Chad", lastName: "ollump", birthyear: 1999, position: "singer"},
        {id: 23, bandId: 6, firstName: "Chad", lastName: "lump", birthyear: 1999, position: "singer"},
        {id: 24, bandId: 7, firstName: "Chad", lastName: "ump", birthyear: 1999, position: "singer"},
        {id: 25, bandId: 7, firstName: "Chad", lastName: "Womp", birthyear: 1999, position: "singer"},
        {id: 26, bandId: 8, firstName: "Chad", lastName: "Woump", birthyear: 1999, position: "singer"},
        {id: 27, bandId: 8, firstName: "Chad", lastName: "Wump", birthyear: 1999, position: "singer"},
        {id: 28, bandId: 9, firstName: "Chad", lastName: "Wollup", birthyear: 1999, position: "singer"},
        {id: 29, bandId: 9, firstName: "Chad", lastName: "Wolump", birthyear: 1999, position: "singer"},
        {id: 30, bandId: 10, firstName: "Chad", lastName: "ollump", birthyear: 1999, position: "singer"},
        {id: 31, bandId: 10, firstName: "Chad", lastName: "llump", birthyear: 1999, position: "singer"},
        {id: 32, bandId: 11, firstName: "Chad", lastName: "Wollu", birthyear: 1999, position: "singer"},
        {id: 33, bandId: 11, firstName: "Chad", lastName: "Joe", birthyear: 1999, position: "singer"},
        {id: 34, bandId: 12, firstName: "Chad", lastName: "John", birthyear: 1999, position: "singer"},
        {id: 35, bandId: 12, firstName: "Chad", lastName: "Brian", birthyear: 1999, position: "singer"},
    ],

    venues: [
        { id: 1, name: "The Womping Willow", address: "right here, right now", squareFootage: 10, maxOccupancy: 9 },
        { id: 2, name: "Two", address: "my house", squareFootage: 1000, maxOccupancy: 13 },
        { id: 3, name: "Low", address: "your house", squareFootage: 1000, maxOccupancy: 21 },
        { id: 4, name: "The Wow", address: "124 area boulevard", squareFootage: 1120, maxOccupancy: 1 },
        { id: 5, name: "The Wompillow", address: "1212 miami place", squareFootage: 1230, maxOccupancy: 20 },
        { id: 6, name: "The Wompow", address: "back that way", squareFootage: 932032, maxOccupancy: 10000 },
        { id: 7, name: "The Wom", address: "1010 Narnia Circle", squareFootage: 7, maxOccupancy: 9 }
    ],

    bookings: [
        { id: 1, bandId: 2, venueId: 7, date: "1/5/2005" },
        { id: 2, bandId: 2, venueId: 6, date: "11/11/1111" },
        { id: 3, bandId: 2, venueId: 5, date: "12/20/1999" },
        { id: 4, bandId: 7, venueId: 4, date: "12/12/2012" },
        { id: 5, bandId: 1, venueId: 3, date: "1/11/2121" },
        { id: 6, bandId: 9, venueId: 2, date: "1/12/2121" },
        { id: 7, bandId: 2, venueId: 1, date: "1/5/2005" },
        { id: 8, bandId: 2, venueId: 2, date: "11/11/1111" },
        { id: 9, bandId: 2, venueId: 3, date: "12/20/1999" },
        { id: 10, bandId: 7, venueId: 1, date: "12/12/2012" },
        { id: 11, bandId: 1, venueId: 4, date: "1/11/2121" },
        { id: 12, bandId: 9, venueId: 5, date: "1/12/2121" },
    ]
}

//functions to export copy of state
export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

export const getBandMembers = () => {
    return database.bandMembers.map(bandMember => ({...bandMember}))
}