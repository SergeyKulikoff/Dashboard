import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
	return (
		<div>
			<ul>
				<li>
					<span>1</span>
					<Link to='/'>Главная</Link>
				</li>
				<li>
					<span>2</span>
					<Link to='/Users'>Профиль</Link>
				</li>
				<li>
					<span>3</span>
					<Link to='/News'>Новости</Link>
				</li>
				<li>
					<span>4</span>
					<Link to='/Conference'>Конференция</Link>
				</li>

				<li>
					<span>5</span>
					<Link to='/Chat'>Чат</Link>
				</li>
				<li>
					<span>6</span>
					<Link to='/Notifications'>Уведомления</Link>
				</li>
				<li>
					<span>7</span>
					<Link to='/Reports'>Отчеты</Link>
				</li>
				<li>
					<span>8</span>
					<Link to='/Statistics'>Статистика</Link>
				</li>
				<li>
					<span>9</span>
					<Link to='/Settings'>Настройки</Link>
				</li>
				<li>
					<span>10</span>
					<Link to='/Authorization'>Выход</Link>
				</li>
			</ul>
		</div>
	)
}
