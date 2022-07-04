import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  const randomNumber = () => Math.random();
  return response.json({ message: 'Hello Dev!' + randomNumber() });
});

export default routes;
