import { COLORS } from "../helpers";
import { Paper } from "./Paper";

export class ContaminatedPaper extends Paper {
	constructor(params: {
		scene: Phaser.Scene;
		x: number;
		y: number;
		textureKey: string;
	}) {
		super({scene: params.scene, x: params.x, y: params.y, textureKey: params.textureKey});

		this.setTint(COLORS.customRed.hex);
	}
}