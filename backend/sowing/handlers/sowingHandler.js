import errorHandling from '../error-handling';
import { logging, requestHandling } from '../../infrastructure';
import { sowingManager } from '../managers';

const HANDLER_NAME = 'sowingHandler';

async function createTicket(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.createTicket`, req);

    const { memberId } = req.user;

    const {
      title,
      content,
      location,
      status,
      category,
      start_date: startDate,
      end_date: endDate,
    } = req.body;

    await sowingManager.createTicket({
      memberId,
      title,
      content,
      location,
      status,
      category,
      startDate,
      endDate,
    });

    res.status(requestHandling.HttpStatus.NO_CONTENT);
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

async function getTickets(req, res) {
  try {
    logging.debug(`${HANDLER_NAME}.getTickets`, req);

    const { memberId } = req.user;

    const tickets = await sowingManager.getTickets({ memberId });

    res.status(requestHandling.HttpStatus.OK).json({ tickets });
  } catch (err) {
    const httpError = errorHandling.createHttpError(err);
    res.status(httpError.status).json(httpError);
  }
}

const sowingHandler = {
  createTicket,
  getTickets,
};

export default sowingHandler;
