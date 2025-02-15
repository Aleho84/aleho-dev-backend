FROM node:lts-alpine

WORKDIR /usr/src/app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json npm-shrinkwrap.json* ./

# Instala las dependencias en una capa separada para aprovechar el caché
RUN npm install --production --silent

# Copia el resto del código fuente
COPY . .

ARG NODE_ENV=production 
ARG PROTOCOL=http
ARG HOST=localhost
ARG PORT=3000
ARG COOKIE_SECRET
ARG JWT_SECRET
ARG JWT_EXPIRE=1w
ARG DB_MODE=mongoDB
ARG MONGOOSE_URI
ARG GEMINI_API_KEY
ARG EMAIL_HOST=smtp.gmail.com
ARG EMAIL_PORT=465
ARG EMAIL_SECURE=true
ARG EMAIL_USER
ARG EMAIL_PASS

ENV NODE_ENV=$NODE_ENV
ENV PROTOCOL=$PROTOCOL
ENV HOST=$HOST
ENV PORT=$PORT
ENV COOKIE_SECRET=$COOKIE_SECRET
ENV JWT_SECRET=$JWT_SECRET
ENV JWT_EXPIRE=$JWT_EXPIRE
ENV DB_MODE=$DB_MODE
ENV MONGOOSE_URI=$MONGOOSE_URI
ENV GEMINI_API_KEY=$GEMINI_API_KEY
ENV EMAIL_HOST=$EMAIL_HOST
ENV EMAIL_PORT=$EMAIL_PORT
ENV EMAIL_SECURE=$EMAIL_SECURE
ENV EMAIL_USER=$EMAIL_USER
ENV EMAIL_PASS=$EMAIL_PASS

EXPOSE $PORT
CMD ["npm", "start"]