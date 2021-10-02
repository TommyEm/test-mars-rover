import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';


const { size } = designTokens;


export const StyledButton = styled.button`
	all: unset;
	padding: ${size.space.s2.value} ${size.space.s3.value};
	color: ${props => props.theme.action.idle};
	font-size: ${size.font.base.value};
	line-height: ${size.font.lineheight.s4.value};
	text-align: center;
	cursor: pointer;
	transition: all .2s ease-out;

	&:hover {
		color: ${props => props.theme.action.hover};
	}

	&:active {
		color: ${props => props.theme.action.pressed};
	}

	&:focus {
		outline: 1px dotted ${props => props.theme.action.focus};
	}

	&.mod-active {
		color: ${props => props.theme.action.active};

		&:hover {
			color: ${props => props.theme.action.activeHover};
		}

		&:active {
			color: ${props => props.theme.action.activePressed};
		}
	}
`;
