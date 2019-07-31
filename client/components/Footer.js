import React, {Component} from 'react';

import {
    Container, Segment
} from 'semantic-ui-react';

class Footer extends Component {
    render(){
        return (
            <Segment className="Footer"
                inverted
                vertical
                style={{
                    minHeight: '25vh'
                }}
            >
                <Container>
                    FOOTER
                </Container>
            </Segment>
        )
    }
}

export default Footer;