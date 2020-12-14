# Express

## Direfença entre o app e route

```javascript
//===================================================================
//app.js

const express = require('express'),
    dogs    = require('./routes/dogs'),
    cats    = require('./routes/cats'),
    birds   = require('./routes/birds');

const app = express();

app.use('/dogs',  dogs);
app.use('/cats',  cats);
app.use('/birds', birds);

app.listen(3000);

//====================================================
//dogs.js

const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /dogs route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /dogs route.');
});

module.exports = router;
```

Quando var app = express()é chamado, um objeto de aplicativo é retornado. Pense nisso como o aplicativo principal .

Quando var router = express.Router()é chamado, um mini aplicativo ligeiramente diferente é retornado. A idéia por trás do mini aplicativo é que cada rota no seu aplicativo possa se tornar bastante complicada, e você se beneficiaria de mover todo esse código para um arquivo separado. O roteador de cada arquivo se torna um miniaplicativo , com uma estrutura muito semelhante à do aplicativo principal .

No exemplo acima, o código para a rota /dogs foi movido para seu próprio arquivo para não desorganizar o aplicativo principal . O código para /gatos e /pássaros seria estruturado de maneira semelhante em seus próprios arquivos. Ao separar esse código em três mini aplicativos , você pode trabalhar na lógica de cada um isoladamente e não se preocupar com como isso afetará os outros dois.

Se você possui um código (middleware) que pertence a todas as três rotas, é possível colocá-lo no aplicativo principal antes das app.use(...)chamadas. Se você tiver um código (middleware) referente a apenas uma dessas rotas, poderá colocá-lo no arquivo apenas para essa rota.