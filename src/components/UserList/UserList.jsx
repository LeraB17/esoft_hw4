import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            // имитация долгой загрузки
            const now = Date.now();
            const timer = setInterval(async () => {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`)
                    }
                    const data = await response.json();
                    setUsers(data);
                }
                catch (error) {
                    console.error('Ошибка получения данных:', error);
                } finally {
                    setLoading(false);
                }

                if (Date.now() - now > 3000) {
                    clearInterval(timer);
                }
            }, 3000)
        }
        getData();
        return () => {
            setUsers([]);
            clearInterval(timer);
        }
    }, [])

    return (
        <ul className={['user__list', className].join(' ')}>
            <div>{loading}</div>
            {
                loading ?
                    <div>loading...</div>
                    : (
                        users.map(user => <li key={user?.id}>{user?.username}</li>)
                    )
            }
        </ul>
    );
};

export default UserList;