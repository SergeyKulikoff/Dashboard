/* React */
import React from 'react'

/* Components */
import SideBar from 'entities/SideBar'

/* Style */
import style from './style.module.css'

export default function News() {
	return (
		<div className={style.news}>
			<SideBar />

			<div className={style.newsContainer}>
				News
			</div>
		</div>
	)
}
