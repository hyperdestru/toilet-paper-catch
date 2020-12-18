/** @format */

import { getGameWidth, CONTROLKEYS, getGameHeight } from "../helpers";
import { Paper } from "../objects/Paper";
import { Player } from "../objects/Player";
import { HealthBar } from "../objects/HealthBar";
import { ContaminatedPaper } from "../objects/ContaminatedPaper";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Game",
};

/**
 * The Game Scene is where all the actions takes place.
 * Actors such as Player, Bombs and Bomb are instanciated.
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
 */
export class GameScene extends Phaser.Scene {
    private _player: Player;
    private papers: Phaser.GameObjects.Group;
    private contaminatedPapers: Phaser.GameObjects.Group;
    private paperCreationEvent: Phaser.Time.TimerEvent;
    private contamPaperCreationEvent: Phaser.Time.TimerEvent;
    private newSceneTimedEvent: Phaser.Time.TimerEvent;
	private score: Phaser.GameObjects.Text;
	
	get player(): Player {
		return this._player;
	}

    private setColliders(): void {
        this.physics.add.collider(this._player, this.papers, (player, paper) => {
            this._player.increaseScore();
            this.score.setText(`SCORE : ${this._player.score}`);
            paper.destroy();
        });

        this.physics.add.collider(
            this._player,
            this.contaminatedPapers,
            (player, paper) => {
                this._player.hurt();
                paper.destroy();
            }
        );
    }

    constructor() {
        super(sceneConfig);
    }

    create() {
		this.add.image(getGameWidth(this)/2, getGameHeight(this)/2, "store");
		
        this.papers = this.add.group({
            runChildUpdate: true,
        });

        this.contaminatedPapers = this.add.group({
            runChildUpdate: true,
        });

        this.paperCreationEvent = this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: () => {
                this.papers.add(
                    new Paper({
                        scene: this,
                        x: Phaser.Math.Between(50, getGameWidth(this) - 50),
                        y: 0,
                        textureKey: "paper",
                    })
                );
            },
            callbackScope: this,
        });

        this.paperCreationEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                this.contaminatedPapers.add(
                    new ContaminatedPaper({
                        scene: this,
                        x: Phaser.Math.Between(50, getGameWidth(this) - 50),
                        y: 0,
                        textureKey: "paper",
                    })
                );
            },
            callbackScope: this,
        });

        this._player = new Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: "toilet",
            controlKeys: CONTROLKEYS.PLAYER.SET1,
            healthBar: new HealthBar({
                scene: this,
            }),
        });

        this.score = this.make.text({
            x: 20,
            y: 40,
            text: `SCORE : ${this._player.score}`,
            style: {
				font: "32px monospace",
				fontStyle: "strong"
            },
        });

		this.setColliders();
    }

    update() {
		this._player.update();
		
		if (this._player.isDead()) {
			this.scene.start("Gameover", {"score": this._player.score});
		}
    }
}
