import React, { useEffect, useState } from 'react';
import mysql from 'mysql2';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '12345678',
      database: 'service',
    });

    connection.connect();

    connection.query('SELECT Nome FROM users', (error, results) => {
      if (error) {
        throw error;
      }
      
      const userNames = results.map((user: any) => user.Nome);
      setUsers(userNames);
    });

    connection.end();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;