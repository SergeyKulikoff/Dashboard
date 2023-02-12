/* React */
import React, { FC } from 'react'
import { Button } from 'shared/ui/Button/button';

import { Input } from 'shared/ui/Input/input';
import style from './login.module.css';

export const LoginPage: FC<any> = () => {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<form className={style.form}>
					<h3 className={style.title}>Вход</h3>

					<Input
						types={'text'}
						placeholder={'Email'}
					/>

					<Input
						types={'password'}
						placeholder={'Пароль'}
					/>

					<Button
						text={'Вход'}
						disabled={false}
					/>
				</form>

				<div className={style.footer_form}>
					<p className={style.text}> Еще не регистрировались?
						<a href="#">Зарегистрироваться</a>
					</p>

					<p className={style.text}> Забыли пароль?
						<a href="#1">Восстановить пароль</a>
					</p>
				</div>
			</div>
		</div>
	)
}
