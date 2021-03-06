'use strict';

const preferenceModel = (sequelize, DataTypes) =>
  sequelize.define('Preferences', {
    user: { type: DataTypes.STRING, allowNull: false },
    zip: { type: DataTypes.INTEGER, allowNull: false },
    theme: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    breakInterval: { type: DataTypes.INTEGER, allowNull: true },
  });

module.exports = preferenceModel;
