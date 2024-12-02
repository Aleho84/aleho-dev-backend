/**
 * @swagger
 * paths:
 *   /api/v1/users/signin:
 *     post:
 *       summary: User signin.
 *       description: Register a user.
 *       operationId: "signin"
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Signin'
 *       produces:
 *         - application/json
 *       responses:
 *         "201":
 *           description: Signin successfully.
 *         "400":
 *           description: Bad request. Signin failed.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/login:
 *     post:
 *       summary: User login.
 *       description: Authentication for an user.
 *       operationId: "login"
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Login successfully.
 *         "401":
 *           description: Unauthorized. Login failed.
 *         "400":
 *           description: Bad request. Login failed.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/delete:
 *     delete:
 *       security:
 *         - bearerAuth: [] 
 *       summary: Delete user.
 *       description: Delete a user by ID.
 *       operationId: "delete"
 *       tags:
 *         - Users
 *       parameters: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete'
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. User deleted successfully.
 *         "401":
 *           description: Unauthorized. deleted failed.
 *         "400":
 *           description: Bad request. deleted failed.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/list:
 *     get:
 *       security:
 *         - bearerAuth: [] 
 *       summary: Get users.
 *       description: Get a list of all users.
 *       operationId: "list"
 *       tags:
 *         - Users
 *       parameters: []
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Get users list successfully.
 *         "401":
 *           description: Unauthorized. deleted failed.
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/v1/chatbot/list:
 *     get:
 *       security:
 *         - bearerAuth: [] 
 *       summary: Get chatbot List.
 *       description: Get a list of all users.
 *       operationId: "list"
 *       tags:
 *         - Chatbots
 *       parameters: []
 *       produces:
 *         - application/json
 *       responses:
 *         "200":
 *           description: OK. Get chatbot list successfully.
 *         "401":
 *           description: Unauthorized. get chatbot list failed.
 *         "500":
 *           description: Internal Server Error.
 */