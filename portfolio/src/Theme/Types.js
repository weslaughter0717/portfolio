import styled from 'styled-components';
import {green, white, purple} from "./Variables"

export const A = styled.a`

color: ${green};
text-decoration: none;
position: relative;

&:after {
    content: '  ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: ${white};
    z-index: -3;
    transition: height, .2s background-color .2s;
    
}


&:hover:after {
    height: 100%;
    background-color: ${purple};
}
`