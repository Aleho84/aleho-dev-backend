/**
 * @swagger
 * paths:
 *   /api/v1/users/signin:
 *     post:
 *       summary: Register a new user
 *       description: Creates a new user account
 *       operationId: signin
 *       tags:
 *         - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Signin'
 *       responses:
 *         '201':
 *           description: User created successfully
 *         '400':
 *           description: Bad request - Invalid input data or user already exists
 *         '500':
 *           description: Internal server error
 *   /api/v1/users/login:
 *     post:
 *       summary: Log in an existing user
 *       description: Authenticates a user with email and password
 *       operationId: login
 *       tags:
 *         - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       responses:
 *         '200':
 *           description: Login successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     description: JWT authentication token
 *         '401':
 *           description: Unauthorized - Invalid credentials
 *         '400':
 *           description: Bad request - Missing email or password
 *         '500':
 *           description: Internal server error
 *   /api/v1/users/delete:
 *     delete:
 *       security:
 *         - bearerAuth: []
 *       summary: Delete a user
 *       description: Deletes a user by ID
 *       operationId: delete
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete'
 *       responses:
 *         '204':
 *           description: User deleted successfully
 *         '401':
 *           description: Unauthorized - Missing or invalid token
 *         '404':
 *           description: User not found
 *         '500':
 *           description: Internal server error
 *   /api/v1/users/list:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get all users
 *       description: Retrieves a list of all users
 *       operationId: listUsers
 *       tags:
 *         - Users
 *       responses:
 *         '200':
 *           description: List of users retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         '401':
 *           description: Unauthorized - Missing or invalid token
 *         '500':
 *           description: Internal server error
 *   /api/v1/chatbot/list:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get all chatbots
 *       description: Retrieves a list of all chatbots
 *       operationId: listChatbots
 *       tags:
 *         - Chatbot
 *       responses:
 *         '200':
 *           description: List of chatbots retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Chatbot'
 *         '401':
 *           description: Unauthorized - Missing or invalid token
 *         '500':
 *           description: Internal server error
 *   /api/v1/chatbot/new:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Create a new chatbot
 *       description: Creates a new chatbot instance
 *       operationId: createChatbot 
 *       tags:
 *         - Chatbot
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chatbot'
 *       responses:
 *         '201':
 *           description: Chatbot created successfully
 *         '401':
 *           description: Unauthorized - Missing or invalid token
 *         '400':
 *           description: Bad request - Invalid input data 
 *         '500':
 *           description: Internal server error
 */