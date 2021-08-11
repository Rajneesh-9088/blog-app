require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.db_name, process.env.db_user, process.env.password, {
    host: 'localhost',
    dialect: 'mysql'
  });

  const connectDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection Open');
      } catch (error) {
        //   console.log(process.env.db_name + process.env.username + process.env.password)
        console.error('Cannot connect to Database');
      }
  }


 global.sequelize = sequelize;
  module.exports = connectDB;