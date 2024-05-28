var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);

var rotaesportes = require('./app/routes/esportes')(app);

var rotacursos = require('./app/routes/cursos')(app);

var rotapesquisa = require('./app/routes/pesquisa')(app);

var rota404 = require('./app/routes/404')(app);

app.listen(3000, function(){
    console.log('Servidor ON');
});