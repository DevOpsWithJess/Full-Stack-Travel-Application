# CS 465 Full Stack Application - Portfolio Reflection
# Jessica Johnson

## Overview
This project involved building a full stack web application that supports both customer-facing and administrative functionality. In the final iteration, I added secure authentication for the admin login and refined both the frontend and backend to create a more complete and polished application.

---

## Architecture

In this project, I worked with both traditional frontend development using Express HTML and a single-page application (SPA) using Angular, and they each felt pretty different. The Express side was more basic and rendered full pages from the server. It worked fine, but every time something changed, the whole page had to reload, which didn’t feel very modern.

The Angular SPA, on the other hand, was a lot smoother. Instead of reloading everything, it only updated what actually changed on the screen. That made the app feel faster and more user-friendly. It also let me build reusable components, like the trip cards, which made my code cleaner and easier to manage.

For the backend, MongoDB made the most sense because it works really well with JSON-style data. Since the trip data was already structured like JavaScript objects, it was easy to store and pull it back out without having to deal with a strict schema. That flexibility was really helpful as I made changes throughout the project.

---

## Functionality

JSON and JavaScript are related, but they’re not the same thing. JSON is just a format for storing and sending data, while JavaScript is what actually uses and manipulates that data. In this project, JSON was basically the middleman between the frontend and backend. The backend sent data in JSON format, and the frontend used it to display everything dynamically.

One thing I improved along the way was how the trip data was displayed. Instead of hardcoding everything, I refactored it so trips could be loaded dynamically. That made the app way more flexible and easier to update.

Using reusable UI components was a big win too. It cut down on duplicate code, made updates easier, and kept everything consistent across the app. It also made debugging less overwhelming because I could focus on one component at a time instead of digging through everything.

---

## Testing

Testing this project really came down to working with API endpoints and understanding how different request types work. I used GET to pull data, and POST, PUT, and DELETE to create, update, and remove data. Each one had to be tested to make sure it worked correctly and handled errors the way it should.

Postman was super helpful for this because I could test everything without needing the frontend. Once I added authentication, things got a little more complex since I had to include a token to access certain routes. It definitely added some extra steps, but it also made the app more secure.

Overall, this helped me understand how endpoints, requests, and security all connect. It’s not just about making things work, it’s also about making sure they’re protected and reliable.

---

## Reflection

This course really helped everything click for me when it comes to full stack development. Before this, I understood pieces of it, but now I actually see how it all fits together — frontend, backend, database, and everything in between.

I’ve gotten more comfortable working with APIs, handling JSON data, building reusable components, and adding authentication for security. I also spent a lot of time troubleshooting, which honestly helped me learn the most.

This project made me feel a lot more confident in my ability to build and explain a full application. It ties directly into my career goals, especially with roles like application analyst or HRIS, where understanding systems, data, and user experience all come together.
