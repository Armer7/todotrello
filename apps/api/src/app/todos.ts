import { Express } from 'express';
import { customAlphabet } from 'nanoid';
import { cardData, sections, accessUser } from './dataTodo';
const nanoid = customAlphabet('0123456789abcdef', 10);

export function addTodoRouters(app: Express) {
  app.get('/', (req, resp) => resp.send(cardData));
  app.get('/sections', (req, resp) => resp.send(sections));
  app.get('/users', (req, resp) => resp.send(accessUser));
  app.get('/:id', (req, resp) => {
    const card = cardData.find((item) => item.id === req.params.id);
    if (!card) {
      return resp.status(404).send('Not found')}
      resp.send(card)
  });

  app.post('/addTodo', (req, resp) => {
    try {
      const card = { id: nanoid(), ...req.body };
      cardData.push(card);
      resp.send(cardData);
    } catch (error) {
      return resp.status(500).send(error);
    }
  });
  app.put('/:id', (req, resp) =>{
    try {
      cardData.forEach((item) => item.id === req.params.id ? req.body : item)
      const card = cardData.find((item) => item.id === req.params.id)
      if (!card) {
        return resp.status(404).send('Not found')}
      resp.send(card)
    } catch (error) {
      return resp.status(500).send(error)
    }
  })
  app.delete('/:id', (req, resp) => {
    try {
    const index = cardData.findIndex((item) => item.id === req.params.id)
    if (!index) {
      return resp.status(404).send('Not found')}
    cardData.slice(index,1)
    resp.send(cardData)}
    catch (error) {
      return resp.status(500).send(error)
    }
  })
}
