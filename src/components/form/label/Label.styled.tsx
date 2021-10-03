import styled from 'styled-components';
import designTokens from '../../../design-tokens/build/ts';


const { size } = designTokens;

export const StyledLabel = styled.label<{ forHtml: string; }>`
	color: ${props => props.theme.foreground.primary};
	font-size: ${size.font.base.value};
	line-height: ${size.font.lineheight.s4.value};
`;
