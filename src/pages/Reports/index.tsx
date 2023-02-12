/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar'

/* Style */
import style from './style.module.css'

export default function Reports() {
	return (
		<div className={style.reports}>
			<SideBar />

			<div className={style.reportsContainer}>
				Reports
			</div>
		</div>
	)
}
