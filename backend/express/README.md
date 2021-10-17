## Configuration
```bash
# development
npm install
npx sequelize db:migrate
npx sequelize db:seed:all

# production
npm install --only=prod
docker-compose up -d
npx sequelize db:migrate --env=production
npx sequelize db:seed:all --env=production
```

## Start
```bash
# development
npm run dev

# production
npm start
```