import React from 'react';

import { RoverDirection, RoverPosition } from '../../types/rover';
import { StyledRover } from './Rover.styled';


export interface IRoverProps {
	className?: string;
	direction: RoverDirection;
	position: RoverPosition;
}

export const Rover: React.FC<IRoverProps> = ({
	className,
	direction,
	position,
}: IRoverProps) => {
    return (
		<StyledRover
			className={`Rover ${className}`}
			direction={direction}
			position={position}
			data-testid='test-Rover'
		>

		</StyledRover>
	);
}
