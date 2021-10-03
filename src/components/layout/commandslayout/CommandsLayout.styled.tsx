import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledCommandsLayout = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	padding: ${size.space.s4.value} ${size.space.s4.value} ${size.space.s10.value};

	.CommandsLayout-input {
		display: grid;
		grid-template-columns: 6fr 1fr;

		& > * {
			width: 100%;
		}
	}

	.CommandsLayout-help {
		display: flex;
		justify-content: space-between;
		margin-top: ${size.space.s8.value};
		color: ${props => props.theme.foreground.secondary};
	}

	.CommandsLayout-command-list {
		display: grid;
		grid-template-columns: 1rem auto;
		grid-gap: ${size.space.s4.value};
		margin-left: ${size.space.s10.value};
		padding-top: ${size.space.s3.value};
	}

	.CommandsLayout-command {
		border: 1px solid ${props => props.theme.foreground.accent};
		color: ${props => props.theme.foreground.accent};
		text-align: center;
	}
	.CommandsLayout-desc {
		margin-left: ${size.space.s0.value};
	}
`;
