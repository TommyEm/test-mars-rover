import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { color, size } = designTokens;

export const StyledCommandsLayout = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;

	.CommandsLayout-input {
		display: grid;
		grid-template-columns: 6fr 1fr;

		& > * {
			width: 100%;
		}
	}
`;
