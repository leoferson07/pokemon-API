const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
     sequelize.define('Pokemons', {
            id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,   
              primaryKey: true
            },
            name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            image: {
              type: DataTypes.STRING,
              defaultValue :"https://images3.alphacoders.com/677/677583.png"
            },
            life: {
              type: DataTypes.INTEGER,
              
            },
            attack: {
              type: DataTypes.INTEGER,
              
            },
            defense: {
              type: DataTypes.INTEGER,
              
            },
            speed: {
              type: DataTypes.INTEGER,
              
            },
            height: {
              type: DataTypes.INTEGER,
              
            },
            weight: {
              type: DataTypes.INTEGER,
              
            },
            
          },{timestamps: false});
        };