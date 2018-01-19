import styled, {css} from 'styled-components';
import oyster from "../../Assets/oyster.jpg";

export const Image = styled.img`
    width: 100%;
`;

export const OysterImage = styled.div`
    height: 100vh;
    background-image: url('${oyster}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center;
    display: flex;
    flex-direction: column;
    color: white;
    
    
    justify-content: center;
    
    
    text-align: center;
    font-size: 2em;
    
    h1{
        margin-bottom: 0;
    }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform .5s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
