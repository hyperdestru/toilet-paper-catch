/** @format */

import { getGameWidth, getGameHeight, COLORS } from "../helpers";

export class Paper extends Phaser.Physics.Arcade.Image {

    private isOut(): boolean {
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
	}) {
		super(params.scene, params.x, params.y, params.textureKey);
		
		this.scene.add.existing(this);
		
		this.scene.physics.world.enable(this);

		this.setGravityY(10);
        this.setVelocity(0, 110);
    }

    update(): void {
        if (this.isOut()) {
            this.destroy();
        }
    }
}
