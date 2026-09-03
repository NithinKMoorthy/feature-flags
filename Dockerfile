# Node 20 LTS — the clean service.
FROM node:20
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install --no-audit --no-fund
COPY src ./src
RUN npm run build
EXPOSE 3002
CMD ["npm", "start"]
