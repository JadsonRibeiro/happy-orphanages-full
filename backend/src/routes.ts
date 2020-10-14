import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesControllers';
import uploadsConfig from './config/upload';

const routes = Router();
const upload = multer(uploadsConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;