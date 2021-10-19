## Configuration
```bash
# development
npm install
npx sequelize db:migrate
npx sequelize db:seed:all

# production
docker-compose up -d # 상위 디렉토리에서 

npm install --only=prod
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