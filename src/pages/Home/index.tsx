/* React */
import React from 'react';

/* Components */
import SideBar from 'entities/SideBar';

/** Style */
import style from './style.module.css';

export default function Home() {
	return (
		<div className={style.home}>
			<SideBar />

			<div className={style.homeContainer}>
				Home
			</div>
		</div>
	)
}
