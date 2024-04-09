//TODO:visitor 모델 정의

const Visitor = (Sequelize,DataTypes) =>{
  const model = Sequelize.define(
    'visitor',{
      id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
      },
      name:{
        type:DataTypes.STRING(10),
        allowNull:false
      },
      comment:{
        type:DataTypes.TEXT('medium'),
        allowNull:false
      }
    },{
      tableName:'visitor2',
      freezeTableName:true,
      timeStamps:false
    }
  );
  return model;
}

module.exports= Visitor;