import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';

import { RoverDirection, RoverPosition } from '../../types/rover';
import { CELL_SIZE } from '../../constants';
import roverImg from '../../assets/img/rover.png';


const { color } = designTokens;

const orientation = {
	N: '0',
	E: '90deg',
	S: '180deg',
	W: '270deg',
};

export const StyledRover = styled.div<{
	direction: RoverDirection,
	position: RoverPosition,
}>`
	bottom: ${props => props.position.y * CELL_SIZE}px;
	left: ${props => props.position.x * CELL_SIZE}px;
	width: 50px;
	height: 50px;
	/* background-color: ${color.primary.s400.value}; */
	background: url(${roverImg}) center center no-repeat;
	transition: all .2s ease-in-out;
	transform: rotate(${props => orientation[props.direction]});
`;
