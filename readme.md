
## Demo Link :
Watch testing in my link: https://youtu.be/insEW-p1IhM
  

# Clone my code
**1. Install Yarn (Windows):**  
  Open Command Prompt or PowerShell as administrator.  
  Run the command: npm install yarn  
  
**2. Clone the project from Git:**  
  Use the command git clone <repository_url> to clone the project to your computer.  
  
**3. Install dependencies:**  
  Navigate to the root directory of the project.  
  Run the command: yarn install  
  
  
# Problem 4 
Run the command: yarn start4  
  

# Problem 5   
**1. Install MySQL:**  
Download and install MySQL from the official MySQL website.  
  
**2. Install Postman:**  
Download and install Postman from the official Postman website.  

**3. Create and config .env file:**  
Create a .env file in the root directory of the project.  
Add the following environment variables to the .env file, replacing the values with your MySQL configuration:  
<code>DB_DATABASE=<database_name>(e.g., db_student)  
DB_USER=<db_username>  (e.g., root)  
DB_PASS=<db_password>  (e.g., 1234)  
DB_HOST=<db_host_address> (e.g., localhost)  
DB_PORT=<db_port> (e.g., 3306)  
DB_DIALECT=<db_dialect> (e.g., mysql)</code>  
  
**4. Use resources files:**  
Use file in resources folder to import mySQL and Postman  
  
**5. Run Problem 5:**  
Run the command: yarn start5  
Test APIs with Postman:  
Use Postman to send requests to the API endpoints defined in Problem 5.  
  
  
# Problem6:  
**Score Update Module Specifications**  
  
**1. Overview**  
This module provides an API endpoint to update user scores in a live leaderboard. The goal is to ensure data integrity and prevent fraudulent activities.  
  
**2. Functional Requirements**  
Display Top 10 Scores: Allows users to view the top 10 scores.  
Score Update: Allows users to update their scores via an API endpoint.  
User Authentication: Authenticates users to ensure only valid users can update their scores.  
Fraud Prevention: Implements measures to prevent users from fraudulently increasing their scores.  
Live Leaderboard Update: While logged in, users can see leaderboard updates if there are changes.  
  
**3. API Design**  
  **3.1. Endpoints**  
  <pre>
  POST /api/user/sign-up  
  POST /api/user/sign-in  
  POST /api/user/user-Information  
  PUT /api/user/update-user  
  GET /api/user/get-top10-user  
  GET /api/user/find-user  
  GET /api/user/type-of-user  
  GET /api/user/pagination-user  
  DELETE /api/user/del-user  
  PUT /api/scores/update-scores  
  </pre>
    
  **3.2. Request**  
  Method: POST, GET, PUT, DELETE  
  Format: application/json  
  Content:  
  {  
  "userId": "string", // User ID (required)  
  "timestamp": "integer", // Action timestamp (required)  
  "signature": "string" // Authentication signature (required)  
  }  
    
  **3.3. Response**  
  Status Codes:  
  200 OK: Successful update.  
  400 Bad Request: Invalid request (e.g., missing parameters, invalid signature).  
  401 Unauthorized: User not authenticated.  
  500 Internal Server Error: Server error.  
  Format: application/json  
  Content:  
  {  
  "message": "string" // Result message  
  }  
    
**4. Authentication and Fraud Prevention**  
**Signature:**  
Use a secret key on the server.  
When a user performs an action, create a signature by hashing the userId, score, timestamp, and secret key parameters.  
Send this signature in the API request.  
The server recalculates the signature and compares it to the sent signature. If they don't match, the request is rejected.  
  
**Timestamp Check:**  
Check if the timestamp is within a valid time range to prevent replay attacks.  
  
**Rate Limiting:**  
Limit the number of score update requests from a user within a specific time period.  
  
**5. Live Leaderboard Update**  
After a successful score update, update the leaderboard in memory or the database.  
Use WebSocket or Server-Sent Events (SSE) to send updates to the website and update the leaderboard live.  
    
**6. Execution Flow Diagram**  
<pre>
User -> Website -> API Server -> Website: Display score leaderboard.
If want to update, increase score or other actions, requiring login or registration.
User -> Website: Perform action.
Website -> API Server: Send score update request (userId, score, timestamp, signature).
API Server -> API Server: Verify signature and timestamp.
If Authentication Successful:
    API Server -> Database: Update score.
    Database --> API Server: Confirm update.
    API Server -> Website: Success response (200 OK).
    API Server -> Website: Send leaderboard update (WebSocket/SSE).
    Website -> User: Update leaderboard.
If Authentication Failed:
    API Server -> Website: Error response (400/401).
    Website -> User: Display error message.
</pre>
  
**7. Additional Comments**  
Use the joi or express-validator library to validate input data.  
Use redis to temporarily store the leaderboard and implement rate limiting.  
Add logging to track requests and errors.  
Write unit tests and integration tests to ensure code quality.  
Consider using a microservices architecture for large-scale applications.  

