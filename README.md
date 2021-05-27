# ContactsApp


## Environment

Angular CLI: 8.3.29
Node: 12.18.0
NPM - 6.14.4

## Folder structure

app
 |-- app-constants          ( Contains the api-names file which will contain api end points  )
 |-- component              ( Contains the major components such as view-contact, delete-contact & common-contact )
 |     |-- common-contact
 |     |-- delete-contact
 |     |-- view-contact
 |
 |-- model                  ( Contains the contact file which contains the interfaces used within application )
 |-- shared                 ( Contains the shared components such as header & footer as well as shared services )
       |-- footer
       |-- header
       |-- services         ( Contains the shared services Snackbar & Contact-api )
             |-- contact-api
             |-- snack-bar
             
## Running the application

Clone the repository
In the project directory run following commands ( Make sure the environment is setup in advance)
1. npm i
2. ng serve -o

This will run the application locally
For deployment ready below points are needed to be kept in mind -
1. ApiUrl needs to be configured in environment file
2. ApiEnd points needs to be checked as per back-end endpoints
3. After configuring the above, one needs to uncomment the required lines in the components that are using the api.

For more details reach me at anishbalmuchu@gmail.com, +91-7004992744
