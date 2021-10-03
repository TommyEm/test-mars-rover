import styled from 'styled-components';


export const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media only screen and (min-height: 700px) {
		height: 100vh;
	}

	& > * {
		max-width: 500px;
	}

	.App-header {
		display: flex;
		justify-content: space-between;
		/* display: inline-block; */
		width: 100%;
	}
`;