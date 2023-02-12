/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar';

/* Style */
import style from './style.module.css';

export default function Settings() {
	return (
		<div className={style.settings}>
			<SideBar />

			<div className={style.settingsContainer}>
				Settings
			</div>
		</div>
	)
}
