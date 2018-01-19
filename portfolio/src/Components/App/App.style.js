import styled from 'styled-components';
import {greeen} from '../../Theme/Variables';

export const Background = styled.div`
position: fixed;
left: 10vw;
width: 80vw;
top: 10vh;
height: 80vh;
background-image: url(${require('../../Assets/feet.jpg')});
background-color: ${greeen};
background-repeat: no-repeat;
background-position: center;
background-size: 80%;
opacity: .2;
z-index: -99;
`