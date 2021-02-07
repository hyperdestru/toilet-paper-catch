/** @format */

import { HealthBar } from "./HealthBar";

export class Player extends Phaser.Physics.Arcade.Sprite {
    private healthBar: HealthBar;
    private rightKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private upKey: Phaser.Input.Keyboard.Key;
    private health: number;
	private vx: number;
	private jumpVelocity: number;
	private _score: number;
	private _badPaperSound: Phaser.Sound.BaseSound;
	private _goodPaperSound: Phaser.Sound.BaseSound;

	get score(): number {
		return this._score;
	}

	get badPaperSound(): Phaser.Sound.BaseSound {
		return this._badPaperSound;
	}

	get goodPaperSound(): Phaser.Sound.BaseSound {
		return this._goodPaperSound;
	}

	increaseScore(): void {
		this._score += 5;
	}

	decreaseScore(): void {
		this._score -= 5;
	}

	scoreIsNeg(): boolean {
		return this._score <= 0;
	}

	scoreIsStepOne(): boolean {
		return this._score >= 100;
	}

    isDead(): boolean {
        return this.health <= 0;
    }

    public hurt(): void {
        if (this.health > 0) {
            this.health -= 20;
            this.healthBar.decrease(20);
        }
    }

    private initSounds(): void {
        this._badPaperSound = this.scene.sound.add("badPaperSound");
        this._goodPaperSound = this.scene.sound.add("goodPaperSound");
    }

    private initVitals(): void {
        this.health = 100;
    }

    private initPhysics(): void {
        this.vx = 350;
		this.jumpVelocity = -500;
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
        this.upKey = this.scene.input.keyboard.addKey(pKeys["jump"]);
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
			this.setVelocityX(this.vx);
		} else if (this.leftKey.isDown) {
			this.setVelocityX(-this.vx);
		}
    }

    /**
     * Handle jumping AND jumping-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    private handleJumping(): void {
        if (this.upKey.isDown) {
            if (this.body.blocked.down || this.body.touching.down) {
                this.setVelocityY(this.jumpVelocity);
            }
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
    }

    update(): void {
        if (this.upKey.isDown) {
            this.handleJumping();
        }
        if (this.rightKey.isDown || this.leftKey.isDown) {
            this.handleWalking();
        } else {
            this.handleIdling();
        }
    }
}
