import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';

import { RoverDirection, RoverPosition } from '../../types/rover';
import { CELL_SIZE } from '../grid/Grid.styled';


const { color } = designTokens;

export const StyledRover = styled.div<{
	direction: RoverDirection,
	position: RoverPosition,
}>`
	bottom: ${props => props.position.y * CELL_SIZE}px;
	left: ${props => props.position.x * CELL_SIZE}px;
	width: 50px;
	height: 50px;
	background-color: ${color.primary.s400.value};
`;
