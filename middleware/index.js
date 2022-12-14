const createError = require('http-errors');

module.exports.error404Handler = (req, res, next) => {
    res.send({message: 'Ruta no encontrada'});
};
  

module.exports.errorHandler = (err, req, res, _next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send({ message: err.message });
};