const Sequelize = require('sequelize');


require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('mvc_blog_db','root', 'Itprofessional@31', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
