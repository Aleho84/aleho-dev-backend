/**
 * @swagger
 * paths:
 *   /api/v1/users/signin:
 *     post:
 *       summary: Register a new user
 *       description: Creates a new user account and returns a JWT token.
 *       operationId: signin
 *       tags:
 *         - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SigninRequest'
 *       responses:
 *         '201':
 *           description: User created successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/AuthSuccessResponse'
 *         '400':
 *           description: Bad request - Invalid input data or user already exists.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/AuthFailResponse'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/users/login:
 *     post:
 *       summary: Log in an existing user
 *       description: Authenticates a user and returns a JWT token.
 *       operationId: login
 *       tags:
 *         - Users
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginRequest'
 *       responses:
 *         '200':
 *           description: Login successful.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/AuthSuccessResponse'
 *         '401':
 *           description: Unauthorized - Invalid credentials.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/LoginRequestUnautorized'
 *         '400':
 *           description: Bad request - Missing email or password.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/LoginRequestBadRequest'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/users/{userId}:
 *     delete:
 *       security:
 *         - bearerAuth: []
 *       summary: Delete a user by ID
 *       description: Deletes a specific user using their unique ID.
 *       operationId: deleteUserById
 *       tags:
 *         - Users
 *       parameters:
 *         - in: path
 *           name: userId
 *           required: true
 *           schema:
 *             type: string
 *           description: The unique ID of the user to delete.
 *       responses:
 *         '204':
 *           description: User deleted successfully.
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '404':
 *           description: User not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/DeleteUserNotFound'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *     put:
 *       security:
 *         - bearerAuth: []
 *       summary: Update a user by ID
 *       description: Updates a specific user using their unique ID.
 *       operationId: updateUserById
 *       tags:
 *         - Users
 *       parameters:
 *         - in: path
 *           name: userId
 *           required: true
 *           schema:
 *             type: string
 *           description: The unique ID of the user to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         '200':
 *           description: User updated successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '404':
 *           description: User not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/UpdateUserNotFound'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/users/list:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get all users
 *       description: Retrieves a list of all users.
 *       operationId: listUsers
 *       tags:
 *         - Users
 *       responses:
 *         '200':
 *           description: List of users retrieved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/chatbot/list:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get all chatbots
 *       description: Retrieves a list of all chatbots.
 *       operationId: listChatbots
 *       tags:
 *         - Chatbots
 *       responses:
 *         '200':
 *           description: List of chatbots retrieved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Chatbot'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/chatbot/new:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Create a new chatbot
 *       description: Creates a new chatbot instance.
 *       operationId: createChatbot 
 *       tags:
 *         - Chatbots
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chatbot'
 *       responses:
 *         '201':
 *           description: Chatbot created successfully. Returns the newly created chatbot object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Chatbot'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '400':
 *           description: Bad request - Invalid input data.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ChatBotBadRequest'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/users/{userId}/activation-code:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Request a new activation code
 *       description: Generates and sends a new activation code to the user's email.
 *       operationId: requestActivationCode
 *       tags:
 *         - Users
 *       parameters:
 *         - in: path
 *           name: userId
 *           required: true
 *           schema:
 *             type: string
 *           description: The unique ID of the user requesting the code.
 *       responses:
 *         '200':
 *           description: Activation code sent successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: number
 *                     description: The activation code sent to the user.
 *                     example: 123456
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '400':
 *           description: Bad request - Missing or invalid user ID.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ActivationCodeUserNotFound'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/chatbot/{chatbotId}:
 *     delete:
 *       security:
 *         - bearerAuth: []
 *       summary: Delete a chatbot by ID
 *       description: Deletes a specific chatbot using its unique ID.
 *       operationId: deleteChatbotById
 *       tags:
 *         - Chatbots
 *       parameters:
 *         - in: path
 *           name: chatbotId
 *           required: true
 *           schema:
 *             type: string
 *           description: The unique ID of the chatbot to delete.
 *       responses:
 *         '204':
 *           description: Chatbot deleted successfully.
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '404':
 *           description: Chatbot not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/DeleteChatbotNotFound'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *     put:
 *       security:
 *         - bearerAuth: []
 *       summary: Update a chatbot by ID
 *       description: Updates a specific chatbot using its unique ID.
 *       operationId: updateChatbotById
 *       tags:
 *         - Chatbots
 *       parameters:
 *         - in: path
 *           name: chatbotId
 *           required: true
 *           schema:
 *             type: string
 *           description: The unique ID of the chatbot to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chatbot'
 *       responses:
 *         '200':
 *           description: Chatbot updated successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Chatbot'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '404':
 *           description: Chatbot not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/UpdateChatbotNotFound'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 */