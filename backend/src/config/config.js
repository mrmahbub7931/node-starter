const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || 'rootpass';
const MYSQL_DB = process.env.MYSQL_DB || 'saas_meta';
const PORT = process.env.PORT || 5000;
const SESSION_SECRET = process.env.SESSION_SECRET || '';
const JWT_SECRET = process.env.JWT_SECRET || '';
const NODE_ENV = process.env.NODE_ENV || 'development'; 

module.exports = {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DB,
    PORT,
    SESSION_SECRET,
    JWT_SECRET,
    NODE_ENV
};