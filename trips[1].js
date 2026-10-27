/*
 TS TRAVEL SOLUTIONS — EASY EDIT FILE
 Change the WhatsApp number below to your mum's number, including country code,
 digits only (for example UK 07700 900123 becomes 447700900123).
 Add or edit trips by copying an object inside upcomingTrips or pastTrips.
 Dates use YYYY-MM-DD. Photos can be an image URL or a filename uploaded to GitHub.
 All trips and reviews below are DEMONSTRATION CONTENT. Replace before publishing.
*/
const travelData = {
  whatsappNumber: "447837828754", // WhatsApp enquiries
  businessName: "TS Travel Solutions",
  tagline: "Good company. Great places. Wonderful memories.",
  upcomingTrips: [
    {
      id: "york-2027", destination: "York City Escape", region: "United Kingdom",
      date: "2027-05-22", endDate: "2027-05-22", duration: "Day trip",
      price: "£55", priceNote: "Estimated per person",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85",
      description: "Explore historic streets, independent shops and the charm of York at your own pace.",
      included: ["Return coach travel", "Free time to explore", "Friendly group atmosphere"],
      notes: "Example trip — replace with confirmed details before publishing.", status: "Enquiries open"
    },
    {
      id: "lisbon-2027", destination: "Lisbon Getaway", region: "Portugal",
      date: "2027-09-14", endDate: "2027-09-18", duration: "5 days",
      price: "£495", priceNote: "Estimated per person",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85",
      description: "Colourful streets, waterfront views and delicious food in Portugal's vibrant capital.",
      included: ["Return flights", "Hotel accommodation", "Trip planning support"],
      notes: "Example trip — flights and hotel costs change. Request a current quote.", status: "Enquiries open"
    }
  ],
  pastTrips: [
    { destination: "Past adventure gallery", region: "Your previous destinations", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85", description: "Replace this example with a genuine previous trip and your own photos." }
  ],
  reviews: [
    // Add genuine, permission-approved reviews here. Example:
    // { quote: "We had a lovely day out!", name: "Customer first name", trip: "York" }
  ]
};
