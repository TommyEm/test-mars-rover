import styled from 'styled-components';

import { RoverDirection, RoverPosition } from '../../types/rover';
import { CELL_SIZE } from '../../constants';
import roverImg from '../../assets/img/rover.png';

const orientation = {
	N: '0deg',
	E: '90deg',
	S: '180deg',
	W: '270deg',
};

export const StyledRover = styled.div<{
	direction: RoverDirection;
	position: RoverPosition;
}>`
	bottom: ${props => props.position.y * CELL_SIZE}px;
	left: ${props => props.position.x * CELL_SIZE}px;
	width: 50px;
	height: 50px;
	background: url(${roverImg}) center center no-repeat;
	transition: all 0.2s ease-in-out;
	transform: rotate(${props => orientation[props.direction]});
`;
