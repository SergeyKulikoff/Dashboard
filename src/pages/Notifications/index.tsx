/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar'

/* Style */
import style from './style.module.css'

export default function Notifications() {
	return (
		<div className={style.notifications}>
			<SideBar />

			<div className={style.notificationsContainer}>
				Notifications
			</div>
		</div>
	)
}
