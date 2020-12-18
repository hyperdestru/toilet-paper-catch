/** @format */

import { HealthBar } from "./HealthBar";

export class Player extends Phaser.Physics.Arcade.Sprite {
    private healthBar: HealthBar;
    private rightKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private health: number;
	private vx: number;
	private _score: number;
	private canGo: boolean;

	get score(): number {
		return this._score;
	}

	increaseScore(): void {
		this._score += 5;
	}

	decreaseScore(): void {
		this._score -= 5;
	}

    public isDead(): boolean {
        return this.health <= 0;
    }

    public hurt(): void {
        if (this.health > 0) {
            this.health -= 20;
            this.healthBar.decrease(20);
        }
    }

    private initSounds(): void {}

    private initVitals(): void {
        this.health = 100;
    }

    private initPhysics(): void {
        this.vx = 150;
    }

    private applyPhysics(): void {
        this.scene.physics.world.enable(this);
		this.setCollideWorldBounds(true);
		this.setGravityY(1000);
		this.setBounce(0.5);
    }

    private initControls(pKeys): void {
        this.rightKey = this.scene.input.keyboard.addKey(pKeys["right"]);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys["left"]);
    }

    private initHealthBar(pHealthBar: HealthBar): void {
        this.healthBar = pHealthBar;
    }

    /**
     * Handle idling (doing nothing) AND idling-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots.
     */
    private handleIdling(): void {
        this.setVelocityX(0);
    }

    /**
     * Handle walking AND walking-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    private handleWalking(): void {
        if (this.rightKey.isDown) {
			this.x += 10;
		} 
		if (this.leftKey.isDown) {
			this.x -= 10;
		}
    }

    constructor(params: {
        scene: Phaser.Scene;
        x: number;
        y: number;
        textureKey: string;
        controlKeys: object;
        healthBar: HealthBar;
    }) {
        super(params.scene, params.x, params.y, params.textureKey);

        this.scene.add.existing(this);
        this.initPhysics();
        this.applyPhysics();
        this.initSounds();
        this.initVitals();
        this.initHealthBar(params.healthBar);
		this.initControls(params.controlKeys);
		this._score = 0;
		this.canGo = true;
    }

    update(): void {
        if (this.rightKey.isDown || this.leftKey.isDown) {
            this.handleWalking();
        } else {
            this.handleIdling();
        }
    }
}
