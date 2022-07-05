import express from 'express';
import {paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestiominales, paginaViajes} from '../Controllers/Controller.js'
import {guardarTestimonial} from '../Controllers/testimonialController.js'

const router = express.Router();


// La diagonal es la pagina. Get es visitar la url
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestiominales);
router.post('/testimoniales', guardarTestimonial)




export default router;