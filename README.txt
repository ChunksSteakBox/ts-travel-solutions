TS TRAVEL SOLUTIONS — WEBSITE SETUP

FILES
index.html = website design (usually no need to edit)
trips.js = change WhatsApp number, add upcoming/past trips and reviews
site.js = handles cards, countdowns and WhatsApp buttons

IMPORTANT: The trips, prices and past trip are EXAMPLES, not actual offers.
Replace them with accurate details before sharing the website publicly.
Only add reviews from real customers with permission.

TO SET UP ON GITHUB (PHONE)
1. Sign into github.com and create a NEW public repository, e.g. ts-travel-solutions.
2. Upload index.html, trips.js and site.js into the repository ROOT (not inside a folder).
3. Go to repository Settings > Pages > Build and deployment.
4. Select Deploy from a branch, choose main and / (root), then Save.
5. GitHub will show your new website address once published.

TO UPDATE TRIPS
1. Open trips.js in your new GitHub repository and tap the pencil/Edit button.
2. Set whatsappNumber to the UK country-code number with no plus sign or spaces.
   Example: 07700 900123 -> 447700900123 (example number only).
3. Edit the objects in upcomingTrips. Keep commas and quote marks intact.
4. Set date and endDate in YYYY-MM-DD format.
5. Set price to a string like "From £249" and priceNote to "Estimated per person".
6. Edit included items, image and description.
7. For a completed trip, move its information into pastTrips, with a genuine photo.
8. Add reviews to reviews array ONLY if they are genuine and permission-approved.
9. Commit changes. The website updates after GitHub Pages deploys.

PHOTOS
You can upload photos into the repository and refer to them by filename, e.g. "york.jpg".
Use only photos you have permission to publish. Current stock images are placeholders.

CONTACT
WhatsApp buttons won't send enquiries until you add the number in trips.js.
Messages automatically mention the trip and ask for up-to-date pricing.

IMPORTANT TRAVEL BUSINESS NOTE
If the organiser sells or arranges packages (e.g. flights + hotel), check applicable
UK Package Travel Regulations and ATOL obligations before accepting bookings.
Add clear terms, cancellation/refund policies and financial protection information
appropriate to the actual service. Avoid promising included items until confirmed.

The site is static and free to host on GitHub Pages. No backend or paid booking
system is required for enquiry-only use.
