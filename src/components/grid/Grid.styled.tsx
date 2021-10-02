import styled from 'styled-components';
import { CELL_SIZE } from '../../constants';


export const StyledGrid = styled.div<{ size: number }>`
	display: grid;
	grid-template: repeat(${props => props.size}, 1fr) / repeat(${props => props.size}, 1fr);
	width: ${props => props.size * CELL_SIZE}px;
	height: ${props => props.size * CELL_SIZE}px;

	&,
	& .Grid-cell {
		border: 1px solid ${props => props.theme.foreground.accent};
	}

	.Grid-cell {
		width: ${CELL_SIZE}px;
		height: ${CELL_SIZE}px;
	}
`;
