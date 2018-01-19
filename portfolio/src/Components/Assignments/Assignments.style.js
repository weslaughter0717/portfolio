import styled from 'styled-components';

export const ImageButton = styled.div`
cursor: pointer;
overflow: hidden;
display: inline-block;

& > img {
    transition: transform .3s;
}
&:hover {
    & >img {
        transform: scale(1.3)
    }
}

`;
export const Index = styled.div`
 position: absolute;
 left: 0;
 bottom: 0;
 h1 {
     font-size: 3em;
 }
`