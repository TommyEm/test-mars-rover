import { RoverCommands, RoverDirection, RoverPosition } from "../../types/rover";

export function moveRover(
	command: RoverCommands,
	currentDir: RoverDirection,
	currentPos: RoverPosition,
) {
	let newPos = { ...currentPos };
	let newDir = currentDir;

	switch (command) {
		case 'f':
			if (currentDir === 'N') {
				newPos.y++;
			} else if (currentDir === 'E') {
				newPos.x++;
			} else if (currentDir === 'S') {
				newPos.y--;
			} else if (currentDir === 'W') {
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