import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledInput = styled.input`
	all: unset;
	padding: ${size.space.s2.value} ${size.space.s0.value};
	border-bottom: 1px solid ${props => props.theme.action.idle};
	font-size: ${size.font.base.value};
	line-height: ${size.font.lineheight.s4.value};
`;
