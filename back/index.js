const app = require('./src/services/server');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});