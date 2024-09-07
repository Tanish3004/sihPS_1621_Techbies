# sihPS_1621_Techbies
# Medicine and Consumables Quality Monitoring Backend

This project is the backend system for testing and monitoring the quality of medicines and consumables received in hospitals. The system ensures compliance, rejects low-quality supplies, and performs testing automatically without manual intervention.

## Features
- Automatic testing of supplies.
- Compliance checks based on quality score.
- Easy API endpoints to create, update, and manage supplies.
- MongoDB for database management.

## Technologies Used
- **Node.js** - Server-side JavaScript runtime.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database.
- **Mongoose** - MongoDB object modeling for Node.js.
- **Postman** - For testing API endpoints.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:
- **Node.js** (version 12+)
- **MongoDB** (running locally or using MongoDB Atlas)
- **Github Desktop**- the desktop app must be running locally on your machine so thhat it is easy to commit changes from your code editor.

  ## Files Information

  ### Supply.js

  - it contains all the input schema required to enter data inside the mongodb database .
  - it requires the mongoose library
 
    ### supplies.js

    -it contains al the routes and performs quality check functions .

    ### db.js

    - it contians MongoDB connections url

      ### server.js

      -it imports all he exported files 
      - the express app is started here 
