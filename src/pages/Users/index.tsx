/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar';

/* Style */
import style from './style.module.css';

export default function Users() {
	return (
		<div className={style.users}>
			<SideBar />

			<div className={style.usersContainer}>
				Users
			</div>
		</div>
	)
}
