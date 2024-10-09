const { Router } = require('express');
const PokemonRoutes = require('./PokemonsRoutes');
const TypesRoutes = require('./TypesRoutes');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use('/pokemons', PokemonRoutes);
router.use('/types', TypesRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
