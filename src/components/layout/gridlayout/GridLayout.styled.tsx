import styled from 'styled-components';


export const StyledGridLayout = styled.div`
	position: relative;
	perspective: 500px;

	.GridLayout-content {
		transform: translateY(-65px) rotate3d(1, 0, 0, 45deg) perspective(800px);
	}

	.GridLayout-rover {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transform: translateY(-5px);
	}

	.GridLayout-rover,
	.Rover {
		position: absolute;
	}
`;
