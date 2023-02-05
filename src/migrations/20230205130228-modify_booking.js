'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Bookings',
      
        'NoOfSeats',{
          type:Sequelize.INTEGER,
          allowNull:false,
        }
      
    );
    await queryInterface.addColumn('Bookings',
      
        'Cost',{
          type:Sequelize.INTEGER,
          allowNull:false,
        }
      
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Bookings','NoOfSeats');
    await queryInterface.removeColumn('Bookings','Cost');

  }
};
