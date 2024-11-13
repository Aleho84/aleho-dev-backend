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
 *         "500":
 *           description: Internal Server Error.
 */

/**
 * @swagger
 * paths:
 *   /api/v1/users/test/:
 *     get:
 *       summary: Test access.
 *       description: Test secure endpoint access.
 *       operationId: "test"
 *       tags:
 *         - Users
 *       produces:
 *         - application/json
 *       parameters: []
 *       responses:
 *         "200":
 *           description: OK.
 *         "401":
 *           description: Unauthorized.
 *         "500":
 *           description: Internal Server Error.
 */