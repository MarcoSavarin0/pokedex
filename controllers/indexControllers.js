let fetch = require('node-fetch')

module.exports = {
    detallePokemon: function(req,res){
        let id = req.params.id;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response => response.json())
          .then(pokemon => {
            res.render('detalle',{pokemon: pokemon})
          })
          .catch(error => {
            console.error("Error:", error);
            res.status(500).json({ error: "Ha ocurrido un error" });
          });
    },
    list: function(req,res){
      res.render('listado')
    }
}