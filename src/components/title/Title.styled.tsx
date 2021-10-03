import styled from 'styled-components';
import designTokens from '../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledTitle = styled.h1`
	font-size: ${size.font.s8.value};
`;
