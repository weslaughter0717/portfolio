import React, { Component } from 'react';
import { Container } from '../../Theme/Grid';
import { Image, OysterImage, RevealP } from './Home.style.js';
import WhenInView from '../WhenInView/WhenInView'
export default class Home extends Component {
    static propTypes = {};
  render() {
    return (
        <Container>
            <OysterImage>
                <h1>Eric Slaughter</h1>
            </OysterImage>
        <WhenInView>
            {({ isInView }) =>
       <RevealP hide = {!isInView}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic typesetting, 
       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
       sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
       Aldus PageMaker including versions of Lorem Ipsum.</RevealP>
            }
       </WhenInView>
               <WhenInView>
            {({ isInView }) =>
       <RevealP hide = {!isInView}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic typesetting, 
       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
       sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
       Aldus PageMaker including versions of Lorem Ipsum.</RevealP>
            }
       </WhenInView>
               <WhenInView>
            {({ isInView }) =>
       <RevealP hide = {!isInView}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       It has survived not only five centuries, but also the leap into electronic typesetting, 
       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
       sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
       Aldus PageMaker including versions of Lorem Ipsum.</RevealP>
            }
       </WhenInView>
      </Container>
    );
  }
}


