import React, { Component } from 'react'
import {
	Menu,
	Container,
	Icon
} from 'semantic-ui-react'

export default class HeaderNav extends Component {
	state = {
		activeItem: 'home',
		isContainerFluid: false
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu fixed="top" inverted size='large'>

				<Container fluid={this.state.isContainerFluid}>

					<Menu.Item as='h4' header
						style={{
							width: '18.75%'
						}}
					>
						<Icon name='cog' />
						Your App name
            </Menu.Item>

					<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					<Menu.Item
						name='messages'
						active={activeItem === 'messages'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='friends'
						active={activeItem === 'friends'}
						onClick={this.handleItemClick}
					/>
					<Menu.Menu position='right'>
						<Menu.Item
							name='logout'
							active={activeItem === 'logout'}
							onClick={this.handleItemClick}
						/>
					</Menu.Menu>

				</Container>

			</Menu>
		)
	}
}