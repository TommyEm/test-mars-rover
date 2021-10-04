import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledTitle = styled.h1`
	color: ${props => props.theme.foreground.primary};
	font-size: ${size.font.s8.value};
`;
