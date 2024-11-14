/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT*
 *
 *   schemas:
 * 
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Pepe
 *         lastname:
 *           type: string
 *           example: Argento
 *         email:
 *           type: string
 *           example: pepeargento@mail.com
 *         password:
 *           type: string
 *           example: fatiga
 *         image:
 *           type: string
 *           example: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgWSWOqeAoLAfMlbBBg8IN-v2x5IGAfbuSg&usqp=CAU
 * 
 *     Signin:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Pepe
 *         email:
 *           type: string
 *           example: pepeargento@mail.com
 *         password:
 *           type: string
 *           example: FAtiga24 
 *         image:
 *           type: string
 *           example: https://e7.pngegg.com/pngimages/946/395/png-clipart-guillermo-francella-put-on-francella-pepe-argento-actor-humour-actor-celebrities-face.png
 * 
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: pepeargento@mail.com
 *         password:
 *           type: string
 *           example: FAtiga24 
 * 
 *     Delete:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 67341b32e287f39bc1cef38e
 * 
 */