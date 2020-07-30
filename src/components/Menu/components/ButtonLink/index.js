import React from 'react'

function ButtonLink(props) {
	return (
		<a className={props.className} href={props.href}>
			{props.children}
		</a>
	)
}

// Poderia ser implementado com ES6:
// https://pt-br.reactjs.org/docs/components-and-props.html

export default ButtonLink
