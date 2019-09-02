module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define("Post" ,{
        image: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
           notEmpty: true
           }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            notEmpty: true
            }
        },
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }  
        },
          longitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
        },
        intensity: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 2
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isAlpha:true,
                notEmpty: false
                }
        },
        observations: {
            type: DataTypes.String,
            allowNull: true
        }
    })
}