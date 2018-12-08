# BurgerLogger
Burger App based on Node Mysql MVC principles

Description
Full stack application with HTML/CSS and elements from Bootstrap framework for front end development and the backend implemented with Node.js and Express. HTML templating is done with the usage of Handlebars.

The user may enter any burger name to add into the menu, and this entry gets entered into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then "devour" any burger by clicking on the button, which moves it into the adjacent column and updates its status in the database.

Demo
To use application, click 
![Demo](https://github.com/sbissett/friendfinder/blob/master/app/public/assets/images/FinalPicture.JPG) 



Installation
To run this application locally, first run this command in your git bash or terminal
git clone https://github.com/sbissett/BurgerLogger.git

Next be sure intsall the dependencies
npm install

Also, be sure to add in your password for mysql workbench

Lastly, run the node server locally
node server.js

Now, open the local application on port 3000 at the URL: http://localhost3000/.






