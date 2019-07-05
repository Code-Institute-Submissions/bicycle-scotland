#**Bicycle Scotland**

## Overview 

Bicycle Scotland is a single page site with links to other external sites that show off the different bike rides around Scotland he has ridden and  the places he plans to go in the future.
The site splits down the different rides into different geographical areas and displays them on an interactive google map.

## UX
This site is designed for leisure cyclists looking to find new destinations and routes to ride their bikes in Scotland.
It can help separate the rides by geographical location and displays exactly where it is. Users can they pick whatever suits them best and it will take them to an external site which will give them extra information about that ride and destination.
There are four rides that are yet to be completed therefore the links aren't active however it does inform the user on the image that the ride is still to be ridden in the future and it informs the user in the about section that not all rides have been completed.
As a user if I wanted to discover a ride near to me I could either click on the location I am in and see what’s available.
I could also look at the google map below to see where I wanted to visit.
Or I could simply fill out the contact form at the bottom and ask questions.
The initial mock drawings for this site were drawn by hand so have been scanned and are stored in the image folder of the site.

## Features

When the user initial opens the site, they will see the title and the Bicycle Scotland logo followed by the different geographical locations.
Once one of the geographical locations have been clicked, an image (taken by Stewart Martin) with a link attached will show. That link will then take the user to another external page in a new tab with more information about that ride.
The user can open more than one geographical location at a time. Each location is clearly labelled and each image makes clear the name of the destination. 
When a location is clicked the about information disappears but can easily be brought back when the about button is clicked and it will remove the location images.
Following on from the location images there is an interactive google map (made with the google my maps application).
the map clearly shows the different locations of the rides, states what geographical location they come under, shows a picture of the place when clicked on and gives either a link to an external site or it will say in the description that the ride is still to be complete.
To finish the page of there is a simple fully functional contact form for the user to ask about any further questions they may have.

Future features could include a most recent ride section when there is a bigger library of rides completed.

## Technologies Used

Google Chrome developer tools (https://www.google.com/chrome/)- I used these to test my site on different device sizes and to receive information from javascript in the console.
Bootstrap (https://getbootstrap.com/)- Bootstrap was used throughout this site for its grid system. It has allowed me to change sizes and features depending on the screen size. This has helped the site look neat and tidy across all devices.
JQuery (https://jquery.com/)- JQuery has made it easier to target specific aspects of the site in javascript by simplifying the DOM.  
Google my maps (https://www.google.co.uk/maps/about/mymaps/)- Google my maps has helped create an interactive map on my site that is fully customized and can be easily changed.
emailJS (https://www.emailjs.com/)- EmailJS is a platform I have used so that any website users can contact me for further questions and has created a smooth and effective communication platform.
W3C validator (https://validator.w3.org/)- The W3C validator allowed to check my code is clean and had no faults.

## Testing

I used multiple methods of testing to be sure my site is complete.

Firstly, I tested the site using Chrome developer tools to display my site on different screen sizes. I tested from a smallest width of 320px to a largest of 3500px. I then continued to modify the size of images and the layout until I was happy with the appearance and the quality.
Following this I continued to use the console to track any errors that were being logged through javascript. I then went onto the javascript file to modify the code so that it would run clean.
I then opened the site and did the best I could to break it by going through it in a way that was never intended. I found no problem and it was easy to navigate back to any point in the site. All links open to a new tab and uncomplete rides had no links attached.
In the contact form I left sections uncomplete, attempted to send it and it wouldn't send without all the information being filled in as it should.
When I had been through the site enough and couldn’t find any bugs I put it through the W3C validator to check both my HTML and CSS code was clean and free of bugs. The validator gave clear feedback on the code which I then went back to fix for example I had a open <div> tag but hadn't closed it.

After testing the site myself I sent links to 5 different people and asked them to use the site and give feedback. I asked them for faults they found, how the images appear on their different screens and if the site was easily navigated.
The feedback I received from everyone was positive and was given no information I could see to then change my site.

When testing the site myself I found an issue with getting the about section to reappear when but when looking deeper into the code I found I was linking the about button to the other geographical locations which was causing issues so I had to create it's own class.

## Deployment
