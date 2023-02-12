/* React */
import React from 'react';

/* Components */
import SideBar from 'entities/SideBar'

/* Style */
import style from './style.module.css';

export default function Chat() {
	return (
		<div className={style.chat}>
			<SideBar />

			<div className={style.chatContainer}>
				Chat
			</div>
		</div>
	)
}
