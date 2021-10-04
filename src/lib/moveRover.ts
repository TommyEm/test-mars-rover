import { RoverCommands, RoverDirection, RoverPosition } from "../types/rover";
import { GRID_SIZE } from "../constants";

export function moveRover(
	command: RoverCommands,
	currentDir: RoverDirection,
	currentPos: RoverPosition,
) {
	let newPos = { ...currentPos };
	let newDir = currentDir;

	const maxPos = GRID_SIZE - 1;

	switch (command) {
		case 'f':
			if (currentDir === 'N' && currentPos.y < maxPos) {
				newPos.y++;
			} else if (currentDir === 'E' && currentPos.x < maxPos) {
				newPos.x++;
			} else if (currentDir === 'S' && currentPos.y > 0) {
				newPos.y--;
			} else if (currentDir === 'W' && currentPos.x > 0) {
				newPos.x--;
			}
			break;

		case 'l':
			if (currentDir === 'N') {
				newDir = 'W';
			} else if (currentDir === 'E') {
				newDir = 'N';
			} else if (currentDir === 'S') {
				newDir = 'E';
			} else if (currentDir === 'W') {
				newDir = 'S';
			}
			break;

		case 'r':
			if (currentDir === 'N') {
				newDir = 'E';
			} else if (currentDir === 'E') {
				newDir = 'S';
			} else if (currentDir === 'S') {
				newDir = 'W';
			} else if (currentDir === 'W') {
				newDir = 'N';
			}
			break;

		default:
			break;
	}

	return {newDir, newPos};
}