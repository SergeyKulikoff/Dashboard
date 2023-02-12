/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar';

/* Style */
import style from './style.module.css';

export default function Statistics() {
	return (
		<div className={style.statistics}>
			<SideBar />

			<div className={style.statisticsContainer}>
				Statistics
			</div>
		</div>
	)
}
