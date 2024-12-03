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
 *           readOnly: true // Indicate that this field is read-only
 *         name:
 *           type: string
 *           description: User's name
 *           example: Pepe
 *         email:
 *           type: string
 *           description: User's email address
 *           example: pepe@mail.com
 *           format: email // Use the email format for validation
 *         password:
 *           type: string
 *           description: User's password
 *           example: fatiga
 *           writeOnly: true // Hide this field in responses for security
 *         image:
 *           type: string
 *           description: URL of the user's profile image
 *           example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgWSWOqeAoLAfMlbBBg8IN-v2x5IGAfbuSg&usqp=CAU
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
 *     Signin:
 *       type: object
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
 *           example: https://e7.pngegg.com/pngimages/946/395/png-clipart-guillermo-francella-put-on-francella-pepe-argento-actor-humour-actor-celebrities-face.png
 *     Login:
 *       type: object
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
 *     Delete:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: User ID to delete
 *           example: 67341b32e287f39bc1cef38e
 *     Chatbot:
 *       type: object
 *       properties:
 *         userId:
 *           type: String
 *           description: ID of the user who owns this chatbot
 *           example: 67341b32e287f39bc1cef38e
 *         chatbotName:
 *           type: string
 *           description: Name of the chatbot
 *           example: My Helpful Chatbot
 *           required: true
 *         model:
 *           type: string
 *           description: The AI model used by the chatbot
 *           example: gemini-1.5-flash
 *           required: true
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
 */