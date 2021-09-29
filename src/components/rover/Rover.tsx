import React from 'react';

import { StyledRover } from './Rover.styled';


export interface IRoverProps {
	className?: string;
}

export const Rover: React.FC<IRoverProps> = ({
	className,
}: IRoverProps) => {
    return (
		<StyledRover
			className={`Rover ${className}`}
			data-testid='test-Rover'
		>

		</StyledRover>
	);
}
