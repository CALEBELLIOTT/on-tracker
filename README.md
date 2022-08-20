# on-tracker

On Tracker is a project management designed to help contractors keep track of job logistics and employees.

The app is somewhat complicated so follow these steps and read the readme to explore its features.


### Features

Users can login and apun first time login, are prompted to select whether they are an employee or a business owner. Business owners are asked to specify some information about their business and have unlimited access to information on the app. Employees are limited to view information on projects that they have been assigned to by their employer. 

Employers have the ability to create projects. Projects have a location attached to them and a pin will appear on the homepage map at the specified location. These pins are clickable and will show some information about the project they are associated with.

Employers have the ability to assign employees to projects. Once assigned to a project, employees will be able to see that project's details and a pin will appear on their home page map.

From the project page, business owners and employees (with some limitations) are able to add tasks for a project, create notes for a project, and edit information for that project. 

There is an additional "client view" page that is meant to be sent to the client in which the contract job is for. This page shows basic information about the project, the employees working on the project, and what tasks are being done. 


### Test the app

To test the app and explore its features, follow these steps

- Create an account and set it to a business account. Fill out all forms that are associated with this. Create a project and sign out of the business account.
- Create another account but mark this account as an employee. Log out and log back into the business account.
- Assign the employee account you just created to the project either from the employee page or the project page. 
- You are now able to explore features both from employee or business account perspectives.


### Creating the project

This project was created over the course of 2 weeks in a group of 5 developers. It is built using Vue.js, Node.js with mongoose and express, and MongoDB. We implemented features using a google API for auto filling locations and geolocating and the Mapbox library for rendering the front end dynamic map. These features proved to be challenging to implement, but resulted in a very impressive app that we were all very proud of. 
