**Project Overview**

The project consists of a web application and a RESTful API built with Node.js and Express.js. 
The application allows users to register information about lost pets, such as name, location where they were found, and additional details. 
The API provides endpoints for creating, listing, updating, and deleting records of lost pets.


**File Structure**

The project has the following file structure:

    The "backend" folder contains files related to the Node.js server, including the main file "index.js" and 
    the npm configuration file "package.json". 
    Additionally, the "pets.json" file is used to store pet data in JSON format.

    The "frontend" folder contains files related to the web application, 
    including the main HTML page "index.html", the CSS file "style.css" for styling, 
    and the JavaScript file "script.js" for API interaction and DOM manipulation.

    
    
**Backend (API)**

**Key Technologies Used**

    Node.js
    Express.js
    UUID

**Features**

    Creation of a new lost pet record: Allows registering a new lost pet.
    Listing of all lost pet records: Returns a list of all registered lost pets.
    Updating information of an existing lost pet record: Allows updating the information of a specific lost pet.
    Deletion of a lost pet record: Allows deleting a specific lost pet.

**API Endpoints**

    POST /pets: Registers a new lost pet.
    GET /pets: Returns all registered lost pets.
    PUT /pets/:id: Updates the information of a specific lost pet.
    DELETE /pets/:id: Deletes a specific lost pet.



**Frontend (Web Application)**
**Features**

    Form for registering new lost pets: Allows users to fill in information about lost pets.
    List of all registered lost pets: Displays a list of all registered lost pets.
    Buttons for editing and deleting lost pet records: Provides options for editing or deleting lost pet records.

**Key Technologies Used**

    HTML
    CSS
    JavaScript
    Axios (for making HTTP requests)

**Additional Features**

    Validation of user-provided data: 
    Ensures that the data entered by the user is valid before registering a new lost pet.
    Display of error and success messages: 
    Provides clear feedback to the user about the outcome of operations.
    Use of UUID: Ensures the assignment of unique identifiers for each lost pet, avoiding duplicates.

