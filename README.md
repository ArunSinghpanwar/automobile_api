automobile_api API
This Node.js API allows you to manage employees with encrypted sensitive data.

Table of Contents
Installation
Usage
Endpoints
Authentication
Contributing
License
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/ArunSinghpanwar/automobile_api.git
Navigate to the project directory:
bash
Copy code
cd automobile_api
Install dependencies:
bash
Copy code
npm install
Set up environment variables:Create a .env file in the root of the project and add the following variables:
plaintext
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost/automobile_api
ENCRYPTION_KEY=your_encryption_key
SIGNING_KEY=your_signing_key
Start the server in development mode:
bash
Copy code
npm run start-dev
Usage
This API provides endpoints to manage employees. Ensure you have set up the environment variables and MongoDB connection before using the API.

Endpoints
GET /api/employee/getlist: Retrieve a list of all employees.
POST /api/employee/create: Create a new employee.
Requires authentication (JWT token).
Body: { "name": "John Doe", "email": "johndoe@example.com" }
PUT /api/employee/update: Update an existing employee.
Requires authentication (JWT token).
Body: { "id": "employee_id", "name": "Updated Name", "email": "updated@example.com" }
DELETE /api/employee/delete: Delete an employee.
Requires authentication (JWT token).
Body: { "id": "employee_id" }
Authentication
All endpoints (except GET /api/employee/getlist) require authentication using JSON Web Tokens (JWT). Include the JWT token in the Authorization header of your requests.

Example Authorization Header:

makefile
Copy code
Authorization: Bearer your_jwt_token_here
To obtain a JWT token, use the /api/auth/login endpoint with valid credentials.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the ISC License - see the LICENSE file for details.