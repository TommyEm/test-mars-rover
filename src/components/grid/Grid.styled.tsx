import styled from 'styled-components';
import { CELL_SIZE } from '../../constants';
import designTokens from '../../design-tokens/build/ts';


const { color, size } = designTokens;

export const StyledGrid = styled.div<{ size: number }>`
	display: grid;
	grid-template: repeat(${props => props.size}, 1fr) / repeat(${props => props.size}, 1fr);
	width: ${props => props.size * CELL_SIZE}px;
	height: ${props => props.size * CELL_SIZE}px;

	.Grid-cell {
		width: ${CELL_SIZE}px;
		height: ${CELL_SIZE}px;
		border: 1px solid ${color.neutral.s300.value};
	}
`;
