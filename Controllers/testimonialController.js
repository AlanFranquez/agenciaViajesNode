import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async(req, res) => {

    // Validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        errores.push('Por favor rellen todos los campos')

    }
    
    if(errores.length > 0) {

        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll()

        // Mostrar mensaje de error

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            testimoniales
        })
    } else {
        
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje,
            });

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }

    
}

export {
    guardarTestimonial
}