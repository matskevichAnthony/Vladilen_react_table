import React, { useState, useEffect } from 'react';
import api from '../api';
import User from './user';
const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());
	const [usersNumber, setUsersNumber] = useState(users.length);

	useEffect(() => {
		setUsersNumber(users.length);
	}, [users]);

	const renderBadge = () => {
		return (
			<span className={users.length > 0 ? 'badge bg-primary' : 'badge bg-danger'}>
				{users.length > 0
					? usersNumber + ` ${renderPhrase(users.length)} тусанет с тобой`
					: 'Никто не тусанет :('}
			</span>
		);
	};

	const renderContent = () => {
		if (users.length > 0) {
			return (
				<>
					<h2>{renderBadge()}</h2>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>Имя</th>
								<th scope='col'>Качества</th>
								<th scope='col'>Профессия</th>
								<th scope='col'>Встретился, раз</th>
								<th scope='col'>Оценка</th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => {
								return (
									<User key={user._id} user={user} users={users} setUsers={setUsers} />
								);
							})}
						</tbody>
					</table>
				</>
			);
		} else {
			return <h2>{renderBadge()}</h2>;
		}
	};

	const renderPhrase = (num = 5) => {
		const lastOne = Number(num.toString().slice(-1));

		if (num > 4 && num < 15) return 'человек тусанут';
		if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанет';
		if (lastOne === 1) return 'человек тусанет';
		return 'человек тусанет';
	};

	return <div className='container'>{renderContent()}</div>;
};

export default Users;
