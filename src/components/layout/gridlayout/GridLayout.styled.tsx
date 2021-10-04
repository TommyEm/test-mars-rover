import styled from 'styled-components';


export const StyledGridLayout = styled.div`
	position: relative;
	perspective: 500px;

	.GridLayout-content {
		transform: translateY(-65px) rotate3d(1, 0, 0, 45deg) perspective(800px);
	}

	.GridLayout-rover,
	.Rover {
		position: absolute;
	}

	.GridLayout-rover {
		z-index: 20;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transform: translateY(-5px);
	}

	.GridLayout-grid {
		position: relative;
		z-index: 10;
	}

`;
