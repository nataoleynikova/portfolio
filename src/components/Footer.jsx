import React from 'react'

const Footer = () => {
	const contacts = [
		{name: 'telegram', link:'https://t.me/Ms_Lapin'},
		{name: 'whatsapp', link:'https://wa.me/+79183855713'},
		{name: 'github', link:'https://github.com/nataoleynikova'},
		{name: 'email', link:'mailto:olejnikova-n@yandex.ru'},
	];
	
	return (
		<section 
			id='footer'
			className='bg-gray-800 p-1 text-center'
		>

			<div className='flex m-5 text-lg md:text-xl text-gray-300 justify-center gap-12'>
				{contacts.map((contact, i) => (
					<div key={i} className='cursor-pointer hover:text-white'>
						<a href={contact.link} target='_blank'>
							<p>{contact.name}</p>
						</a>
					</div>
				))}
			</div>

			<div className='text-sm md:text-m text-white'>
				{new Date().getFullYear()}
			</div>
		</section>
	)
}

export default Footer