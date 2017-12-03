'use strict';
// Development specific configuration
// ==================================
module.exports = {
  sequelize: {
    uri: 'postgres://postgres:postgres@localhost:5432/employee',
    options: {
      logging: false,
      dialect: 'postgres',
      define: {
        timestamps: true,
        underscored: true,
         freezeTableName: true,
    }
    }
  },
  // Seed database on startup
 seedDb: false,

};
