import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { A } from "../../Theme/Types"
import {
    ImageButton,
    Index
} from './Assignments.style'
import { Container, Relative, Flex } from '../../Theme/Grid'
class Assignments extends Component {
  render() {
    return (
      <Container>
      <Relative marginBottom="100px">
      <Index>
        <h1>01</h1>
        </Index>
      <h1> Checkout My<A href="https://github.com/weslaughter0717"> GitHub Page</A></h1>
        </Relative>
        <Flex justify={'center'}>
        <Zoomy
    imageUrl={require('../../Assets/camp.jpg')}
    renderThumbnail={({ showImage }) =>
    <ImageButton onClick={showImage}>
    <img src={require('../../Assets/thumbcamp.jpg')}
    alt="camp picture"/>
    </ImageButton>
    }
    scale={[1.1, 1.1]}
    imageProps={{
        style: {
            width: '100vw',
            height: 'auto'
        }
    }}
    />
    </Flex>
      </Container>
    );
  }
}

export default Assignments;