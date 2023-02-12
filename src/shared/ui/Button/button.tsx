import React, { FC } from 'react'

interface IButtonInterface {
	text: string;
	disabled: boolean;
}

export const Button: FC<IButtonInterface> = ({ text, disabled }) => {
	return (
		<button>
			{text}
		</button>
	)
}
