import styled from 'styled-components';
import { CELL_SIZE } from '../../constants';
import marsBg from '../../assets/img/mars-surface.jpg';

export const StyledGrid = styled.div<{ size: number }>`
	display: grid;
	grid-template: repeat(${props => props.size}, 1fr) / repeat(
			${props => props.size},
			1fr
		);
	position: relative;
	width: ${props => props.size * CELL_SIZE}px;
	height: ${props => props.size * CELL_SIZE}px;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: url(${marsBg}) center center no-repeat;
		background-size: cover;
		box-shadow: inset 0 0 120px #000, inset 0 0 80px #000,
			inset 0 0 40px #000;
		opacity: 0.65;
		transform: scale(1.25);
	}

	&,
	& .Grid-cell {
		border: 1px solid ${props => props.theme.foreground.accent};
	}

	.Grid-cell {
		width: ${CELL_SIZE}px;
		height: ${CELL_SIZE}px;
	}
`;
