import React, {Component} from 'react';

import {
    Menu,
    Segment,
    Grid
} from 'semantic-ui-react';

class ContentSidebar extends Component {

    state = {
        activeItem: 'bio'
    }

    handleItemClick = (e, {name}) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        const {activeItem} = this.state;

        return (
            <Grid.Column stretched width={3}>
                <Menu vertical tabular>

                    <Menu.Item
                        name='bio'
                        active={activeItem === 'bio'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='companies'
                        active={activeItem === 'companies'}
                        onClick={this.handleItemClick}
                        />
                    <Menu.Item
                        name='links'
                        active={activeItem === 'links'}
                        onClick={this.handleItemClick}
                        />

                </Menu>
            </Grid.Column>
        )
    }
}

export default ContentSidebar;