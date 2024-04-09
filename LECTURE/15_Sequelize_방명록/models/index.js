const Sequelize = require('sequelize');
const config= require('../config/config.json')['development'];
//config 중에서 development를 사용해라.(key값);

const db = {};

//객체 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {"sequelize": sequelize, "Sequelize":Sequelize}

db.Visitor = require('./Visitor')(sequelize,Sequelize);
db.User = require('./User')(sequelize,Sequelize);

module.exports = db;