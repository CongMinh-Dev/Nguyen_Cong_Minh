# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

cài yarn trên windows: npm install yarn
clone project từ dự án
cài đặt: yarn install

problem4:
Có thể chạy các ví dụ : yarn start4

problem5:
cài đặt lại file .env cho phù hợp với hệ cơ sở dữ liệu quan hệ.
DB_DATABASE=db_student
DB_USER=....
DB_PASS=....
DB_HOST=....
DB_PORT=....
DB_DIALECT=...

chạy: yarn start5



problem6: 
Score Update Module Specifications
1. Overview

This module provides an API endpoint to update user scores in a live scoreboard. The goal is to ensure data integrity and prevent fraudulent activities.

2. Functional Requirements

Display Top 10 Scores: Allows users to update their scores via an API endpoint.
Score Update: Allows users to update their scores via an API endpoint.
User Authentication: Authenticates users to ensure only valid users can update their scores.
Fraud Prevention: Implements measures to prevent users from fraudulently increasing their scores.
Live Scoreboard Update: Updates the live scoreboard after a user's score is updated.
3. API Design

3.1. Endpoints

POST /api/user/sign-up
POST /api/user/sign-in
POST /api/user/user-Information
PUT /api/user/update-user
PUT /api/scores/update-scores
GET /api/scores/get10-scores
3.2. Request

Methods: POST, GET, PUT
Format: application/json
Content:
JSON

{
  "userId": "string", // User ID (required)
  "timestamp": "integer", // Action timestamp (required)
  "signature": "string" // Authentication signature (required)
}
3.3. Response

Status Codes:
200 OK: Successful update.
400 Bad Request: Invalid request (e.g., missing parameters, invalid signature).
401 Unauthorized: User not authenticated.
500 Internal Server Error: Server error.
Format: application/json
Content:
JSON

{
  "message": "string" // Result message
}
4. Authentication and Fraud Prevention

Signature:
Use a secret key on the server.
When a user performs an action, create a signature by hashing the userId, score, timestamp, and secret key.
Send this signature in the API request.
The server recalculates the signature and compares it with the sent signature. If they don't match, the request is rejected.
Timestamp Check:
Check if the timestamp is within a valid time range to prevent replay attacks.
Rate Limiting:
Limit the number of score update requests from a user within a certain time period.
5. Live Scoreboard Update

After a successful score update, update the scoreboard in memory or the database.
Use WebSocket or Server-Sent Events (SSE) to send updates to the website and update the live scoreboard.
6. Execution Flow Diagram

User -> Website -> API Server -> Website: Display score ranking scoreboard.
If you want to update, you must log in or register before increasing your score.
User -> Website: Perform action
Website -> API Server: Send score update request (userId, score, timestamp, signature)
API Server -> API Server: Authenticate signature and timestamp
If authentication successful
    API Server -> Database: Update score
    Database -> API Server: Update confirmation
    API Server -> Website: Successful response (200 OK)
    API Server -> Website: Send scoreboard update (WebSocket/SSE)
    Website -> User: Update scoreboard
If authentication fails
    API Server -> Website: Error response (400/401)
    Website -> User: Display error message
7. Additional Comments

Use libraries like joi or express-validator for input data validation.
Use redis for temporary scoreboard storage and rate limiting.
Add logging to track requests and errors.
Write unit tests and integration tests to ensure code quality.
Consider using a microservices architecture for large-scale applications.