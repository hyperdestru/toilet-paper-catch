import { COLORS } from "../helpers";
import { Paper } from "./Paper";
import { Player } from "./Player";

export class ContaminatedPaper extends Paper {
	constructor(params: {
		scene: Phaser.Scene;
		x: number;
		y: number;
		textureKey: string;
		player: Player
	}) {
		super({
			scene: params.scene, 
			x: params.x, 
			y: params.y, 
			textureKey: params.textureKey,
			player: params.player
		});

		this.setTint(COLORS.customRed.hex);
	}
}