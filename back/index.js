const app = require('./src/services/server');
const db = require('./src/config/conDb')
const PORT = 3000;

db().then( (res)=>{
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
  }
)

