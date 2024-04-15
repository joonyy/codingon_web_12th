'use strict';
const Sequelize = require('sequelize');
const config = require(__dirname+"/../config/config.json")["development"];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

//만들어진 모델 불러오기
const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);


//모델간 관계설정
PlayerModel.hasOne(ProfileModel,{
  //두 모델을 연결하는 키와 관련해서 설정
  onDelete:"CASCADE",
  onUpdate:"CASCADE",
  foreignKey:"player_id"
})

ProfileModel.belongsTo(PlayerModel,{
  foreignKey:"player_id"
})

//일대다
TeamModel.hasMany(PlayerModel,{
  foreignKey:"team_id",
  sourceKey : "team_id"
})

//일대다
PlayerModel.hasMany(TeamModel,{
  foreignKey:"team_id",
  sourceKey : "team_id"
})

///n:m
TeamModel.belongsToMany(GameModel,{
  through:TeamGameModel,
  foreignKey:"team_id",
})
GameModel.belongsToMany(TeamModel,{
  through:TeamGameModel,
  foreignKey:"game_id",
})

db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
