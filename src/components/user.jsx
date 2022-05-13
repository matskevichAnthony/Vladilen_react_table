import React from 'react';

const User = ({ user, users, setUsers }) => {
	const badgeColor = () => {
		return user.qualities.map((quality) => {
			let color = 'badge bg-' + quality.color;
			return (
				<span key={quality.color} className={color + ' m-1'}>
					{quality.name}
				</span>
			);
		});
	};

	const handlerDelete = () => {
		setUsers(users.filter((userState) => userState._id !== user._id));
	};

	return (
		<tr>
			<td>{user.name}</td>
			<td>{badgeColor()}</td>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td>{user.rate} / 5</td>
			<td>
				<button
					type='button'
					className='btn btn-danger bg-danger btn-sm'
					onClick={(ev) => handlerDelete(ev)}
				>
					delete
				</button>
			</td>
		</tr>
	);
};

export default User;
