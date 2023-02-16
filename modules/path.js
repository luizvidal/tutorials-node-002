const path = require("path");

// Basename -> Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname -> Apenas o nome do Diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Cirar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"))