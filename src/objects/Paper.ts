/** @format */

import { getGameWidth, getGameHeight, COLORS } from "../helpers";
import { GameScene } from "../scenes/GameScene";
import { Player } from "./Player";

export class Paper extends Phaser.Physics.Arcade.Image {

	private player: Player;
	private vx: number;
	private vy: number;
	private gy: number;

    isOut(): boolean {
        if (this.y > getGameHeight(this.scene) || this.y < 0) {
            return true;
        }
        return false;
    }

    constructor(params: {
		scene: Phaser.Scene;
		x: number;
		y: number;
		textureKey: string;
		player?: Player;
	}) {
		super(params.scene, params.x, params.y, params.textureKey);

		this.vx = 0;
		this.vy = 110;
		this.gy = 10;
		
		this.scene.add.existing(this);
		
		this.scene.physics.world.enable(this);

		this.setGravityY(this.gy);
		this.setVelocity(this.vx, this.vy);

		if (params.player) {
			this.player = params.player;
		}
	}

    update(): void {
		if (this.player && this.player.scoreIsStepOne()) {
			this.setVelocityY(200);
		}

        if (this.isOut()) {
			this.destroy();
			if (this.player && !this.player.scoreIsNeg()) {
				this.player.decreaseScore();
			}
		}
    }
}
