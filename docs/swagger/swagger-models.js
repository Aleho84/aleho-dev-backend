/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: User ID
 *           example: 67340e283306a14a304b6c28
 *           readOnly: true
 *         name:
 *           type: string
 *           description: User's name
 *           example: Pepe
 *         email:
 *           type: string
 *           description: User's email address
 *           example: pepe@mail.com
 *           format: email
 *         password:
 *           type: string
 *           description: User's password
 *           example: fatiga
 *           writeOnly: true
 *         image:
 *           type: string
 *           description: URL of the user's profile image
 *           example: https://example.com/user.png
 *         account:
 *           type: object
 *           description: User account information
 *           properties:
 *             confirmed:
 *               type: boolean
 *               description: Indicates if the account is confirmed
 *               example: true
 *             code:
 *               type: string
 *               description: Confirmation code
 *               example: 0953
 *             admin:
 *               type: boolean
 *               description: Indicates if the user is an admin
 *               example: false
 *             confirmationDate: 
 *               type: string
 *               format: date-time
 *               description: Date and time when the account was confirmed
 *     SigninRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: User's name
 *           example: Pepe
 *         email:
 *           type: string
 *           description: User's email address
 *           example: pepeargento@mail.com
 *           format: email
 *         password:
 *           type: string
 *           description: User's password
 *           example: FAtiga24 
 *         image:
 *           type: string
 *           description: URL of the user's profile image
 *           example: https://example.com/user.png
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User's email address
 *           example: pepeargento@mail.com
 *           format: email
 *         password:
 *           type: string
 *           description: User's password
 *           example: FAtiga24
 *     LoginRequestBadRequest:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "ValidationError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Error de validación: El campo 'password' es obligatorio."
 *     LoginRequestUnautorized:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "UnauthorizedError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Credenciales invalidas: contraseña incorrecta."
 *     AuthSuccessResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: JWT authentication token
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NWY4ZjcwNWJkYjdhZTMyZTBkYWY3NSIsImlhdCI6MTc1MTA5MzEwNCwiZXhwIjoxNzUxNjk3OTA0fQ.TzTi8oHipANbNAU_xZs2D49PqPIe_meaoYXPtDnlxo8
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: "67340e283306a14a304b6c28"
 *             name:
 *               type: string
 *               example: "Pepe"
 *             email:
 *               type: string
 *               example: "pepeargento@mail.com"
 *             image:
 *               type: string
 *               example: "https://example.com/user.png"
 *             confirmed:
 *               type: boolean
 *               example: false
 *             admin:
 *               type: boolean
 *               example: false
 *     AuthFailResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "ValidationError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Error de validación: El campo 'email' es obligatorio."
 *     DeleteUserNotFound:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "ValidationError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Usuario con id:'685f990dbaf1ba2874d3f889' no encontrado."
 *     ActivationCodeUserNotFound:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "UserError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Cast to ObjectId failed for value \"679720eff84b514f137c132\" (type string) at path \"_id\" for model \"users\""
 *     ChatBotBadRequest:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "UserError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "chatbot validation failed: chatbotName: Path `chatbotName` is required."
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "InternalServerError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "An unexpected error has occurred on the server."
 *     Chatbot:
 *       type: object
 *       required:
 *         - chatbotName
 *         - model
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the user who owns this chatbot
 *           example: 67341b32e287f39bc1cef38e
 *         chatbotName:
 *           type: string
 *           description: Name of the chatbot
 *           example: My Helpful Chatbot
 *         model:
 *           type: string
 *           description: The AI model used by the chatbot
 *           example: gemini-1.5-flash
 *         systemInstruction:
 *           type: string
 *           description: System-level instructions for the chatbot's behavior
 *           example: You are a helpful and friendly AI assistant.
 *           default: '' 
 *         generationConfig:
 *           type: object
 *           description: Configuration for text generation
 *           properties:
 *             temperature:
 *               type: number
 *               format: float
 *               description: Controls randomness of the generated text (0 = deterministic, 2 = very random)
 *               default: 1
 *               minimum: 0
 *               maximum: 2
 *             topP:
 *               type: number
 *               format: float
 *               description: Controls diversity of the generated text using nucleus sampling
 *               default: 0.95
 *               minimum: 0
 *               maximum: 1
 *             topK:
 *               type: number
 *               format: integer
 *               description: Controls diversity of the generated text by considering the top K most likely tokens
 *               default: 40
 *               minimum: 0
 *               maximum: 99
 *             maxOutputTokens:
 *               type: number
 *               format: integer
 *               description: Maximum number of tokens in the generated response
 *               default: 1024
 *               minimum: 0
 *               maximum: 8192
 *             responseMimeType:
 *               type: string
 *               description: MIME type of the generated response
 *               default: "text/plain"
 *         history:
 *           type: array
 *           description: Conversation history of the chatbot
 *           items: 
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Role of the message sender (e.g., "user", "assistant")
 *               parts:
 *                 type: array
 *                 description: Parts of the message
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *                       description: Text content of the message part
 *                     type: 
 *                       type: string
 *                       description: Type of message part (e.g., "text", "image") 
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 description: Timestamp of the message
 *     SystemInfo:
 *       type: object
 *       properties:
 *         totalMemory:
 *           type: object
 *           properties:
 *             B:
 *               type: number
 *             KB:
 *               type: number
 *             MB:
 *               type: number
 *             GB:
 *               type: number
 *         freeMemory:
 *           type: object
 *           properties:
 *             B:
 *               type: number
 *             KB:
 *               type: number
 *             MB:
 *               type: number
 *             GB:
 *               type: number
 *         uptime:
 *           type: object
 *           properties:
 *             totalSeconds:
 *               type: number
 *             dias:
 *               type: integer
 *             horas:
 *               type: integer
 *             minutos:
 *               type: integer
 *             segundos:
 *               type: integer
 *         cpu:
 *           type: object
 *           properties:
 *             model:
 *               type: string
 *             cores:
 *               type: integer
 *             speed:
 *               type: integer
 *             times:
 *               type: object
 *     IsOnlineRequest:
 *       type: object
 *       required:
 *         - ip
 *         - port
 *       properties:
 *         ip:
 *           type: string
 *           description: The IP address to check.
 *           example: "8.8.8.8"
 *         port:
 *           type: integer
 *           description: The port to check.
 *           example: 53
 *     IsOnlineResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           description: "Connection status: 1 (online), 2 (error), 0 (offline/timeout)."
 *           example: 1
 *         message:
 *           type: string
 *           description: "A descriptive message of the status."
 *           example: "online"
 *         error:
 *           type: string
 *           description: "An error message if the status is 2."
 *           example: "connect ECONNREFUSED 127.0.0.1:81"
 *     UpdateUserNotFound:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: A short error code or type.
 *           example: "ValidationError"
 *         message:
 *           type: string
 *           description: A human-readable error message.
 *           example: "Usuario con id:'68606b9aac624f4aeadaf7ef' no encontrado"
 *     Device:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the device
 *           example: "67341b32e287f39bc1cef38e"
 *           readOnly: true
 *         name:
 *           type: string
 *           description: Name of the device
 *           example: "Main Database Server"
 *         service:
 *           type: string
 *           description: Service running on the device
 *           example: "PostgreSQL"
 *         icon:
 *           type: string
 *           description: Icon identifier for the device (Lucide icon name)
 *           example: "Database"
 *         ip:
 *           type: string
 *           description: IP address of the device
 *           example: "192.168.1.100"
 *         port:
 *           type: number
 *           description: Port number the service is listening on
 *           example: 5432
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 *     DeviceInput:
 *       type: object
 *       required:
 *         - name
 *         - service
 *         - icon
 *         - ip
 *         - port
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the device
 *           example: "Main Database Server"
 *         service:
 *           type: string
 *           description: Service running on the device
 *           example: "PostgreSQL"
 *         icon:
 *           type: string
 *           description: Icon identifier for the device (Lucide icon name)
 *           example: "Database"
 *         ip:
 *           type: string
 *           description: IP address of the device
 *           example: "192.168.1.100" 
 *         port:
 *           type: number
 *           description: Port number the service is listening on
 *           example: 5432
 *     DeviceNotFound:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "NotFoundError"
 *         message:
 *           type: string
 *           example: "Device not found"
 * */