import React, {Component} from 'react';

import ContentBody from '../components/ContentBody';
import ContentSidebar from '../components/ContentSidebar';

import {
    Container,
    Grid
} from 'semantic-ui-react';

class Content extends Component {
    
    state = {
        hasSidebar: true
    }
    
    render(){
        return (

            <Container className="Content"
                style={{
                    paddingTop: '3.5rem',
                    minHeight: '90vh'
                }}
            >
                <Grid>

                    {this.state.hasSidebar && (
                        <ContentSidebar />
                    )}

                    <ContentBody />
                </Grid>

            </Container>
        )
    }
}

export default Content;