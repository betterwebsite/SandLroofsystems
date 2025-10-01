module.exports = {
    name: "SandLroofsystems",
    email: "sandlroofing47345@gmail.com",
    phoneForTel: "765-238-8284",
    phoneFormatted: "(765) 238-8284",
    address: {
        lineOne: "3225 Sowers Rd",
        lineTwo: "Second Address Line",
        city: "Greens Fork",
        state: "IN",
        zip: "47345",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.SandLroofsystems.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
