// scripts/syncModels.js

const sequelize = require('../config/config');
const { User, Shoe, Size, ShoeSizes } = require('../models');

const syncModels = async () => {
  try {
    await User.sync({ force: true });
    await Shoe.sync({ force: true });
    await Size.sync({ force: true });
    await ShoeSizes.sync({ force: false });
    console.log('Modelos sincronizados con éxito');
  } catch (error) {
    console.error('Error sincronizando modelos:', error);
  } finally {
    await sequelize.close();
  }
};

syncModels();