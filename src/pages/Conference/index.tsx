/* React */
import React from 'react';

/* Components */
import SideBar from 'entities/SideBar';

/* Style */
import style from './style.module.css'

export default function Conference() {
	return (
		<div className={style.conference}>
			<SideBar />

			<div className={style.conferenceContainer}>
				Conference
			</div>
		</div>
	)
}
