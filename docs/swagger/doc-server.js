/**
 * @swagger
 * paths:
 *   /api/v1/server/systemInfo:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get system hardware information
 *       description: Retrieves detailed information about the server's hardware, including memory, uptime, and CPU details.
 *       operationId: getSystemInfo
 *       tags:
 *         - Server
 *       responses:
 *         '200':
 *           description: System information retrieved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/SystemInfo'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/server/systemProcess:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: Get running system processes
 *       description: Retrieves a list of currently running processes on the server. The command used is `ps aux` for Linux/macOS and `tasklist` for Windows.
 *       operationId: getSystemProcess
 *       tags:
 *         - Server
 *       responses:
 *         '200':
 *           description: System process list retrieved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 description: An object where each key is a process identifier and the value is the raw process information string.
 *                 example:
 *                   process_1: "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND"
 *                   process_2: "root         1  0.0  0.1  16892  9876 ?        Ss   May29   0:02 /sbin/init"
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /api/v1/server/isOnline:
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Check if an IP address is online
 *       description: Checks the status of a specific port on a given IP address to determine if it's online.
 *       operationId: isIpOnline
 *       tags:
 *         - Server
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IsOnlineRequest'
 *       responses:
 *         '200':
 *           description: Status of the IP address retrieved successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/IsOnlineResponse'
 *         '401':
 *           description: Unauthorized - Missing or invalid token.
 *           content:
 *             text/plain:
 *               schema:
 *                 type: string
 *                 example: "Unauthorized"
 *         '500':
 *           description: Internal server error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 */