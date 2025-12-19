/**
 * @swagger
 * paths:
 *   /api/v1/devices:
 *     get:
 *       security:
 *         - bearerAuth: []
 *       summary: List all devices
 *       description: Retrieves a list of all networked devices.
 *       operationId: listDevices
 *       tags:
 *         - Devices
 *       responses:
 *         '200':
 *           description: A list of devices.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Device'
 *         '401':
 *           description: Unauthorized.
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
 *     post:
 *       security:
 *         - bearerAuth: []
 *       summary: Create a new device
 *       description: Adds a new device to the system.
 *       operationId: createDevice
 *       tags:
 *         - Devices
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeviceInput'
 *       responses:
 *         '201':
 *           description: Device created successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Device'
 *         '401':
 *           description: Unauthorized.
 *         '500':
 *           description: Internal server error.
 * 
 *   /api/v1/devices/{id}:
 *     put:
 *       security:
 *         - bearerAuth: []
 *       summary: Update a device
 *       description: Updates an existing device by ID.
 *       operationId: updateDevice
 *       tags:
 *         - Devices
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The device ID.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeviceInput'
 *       responses:
 *         '200':
 *           description: Device updated successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Device'
 *         '401':
 *           description: Unauthorized.
 *         '404':
 *           description: Device not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/DeviceNotFound'
 *         '500':
 *           description: Internal server error.
 *     delete:
 *       security:
 *         - bearerAuth: []
 *       summary: Delete a device
 *       description: Removes a device from the system by ID.
 *       operationId: deleteDevice
 *       tags:
 *         - Devices
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The device ID.
 *       responses:
 *         '200':
 *           description: Device deleted successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Dispositivo eliminado"
 *         '401':
 *           description: Unauthorized.
 *         '404':
 *           description: Device not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/DeviceNotFound'
 *         '500':
 *           description: Internal server error.
 */
