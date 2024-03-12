const app = require('./src/services/server')


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});