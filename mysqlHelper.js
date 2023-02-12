require('dotenv').config();

const mysql = require('mysql2');

((mysqlHelper) => {
    let connection=null;
    
    mysqlHelper.connection= async () =>{
        
        try {
            connection=  mysql.createConnection({
                host: process.env.MYSQL_DB_HOST,
                user: process.env.MYSQL_DB_USER,
                database: 'userinfo'
              });
        } catch (error) {
            console.log("error conncetion",error)
        }
        
    }
    mysqlHelper.query = async (query) =>{
        try {
            console.log(query)  
         let res=   await connection.query(query);
         return res;
        } catch (error) {
            console.log(error)
        }
        
    }
})(module.exports)