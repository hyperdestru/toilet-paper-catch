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
 */
export class GameScene extends Phaser.Scene {
    private player: Player;
	private papers: Phaser.GameObjects.Group;
    private contaminatedPapers: Phaser.GameObjects.Group;
    private paperCreationEvent: Phaser.Time.TimerEvent;
    private contamPaperCreationEvent: Phaser.Time.TimerEvent;
    private newSceneTimedEvent: Phaser.Time.TimerEvent;
	private score: Phaser.GameObjects.Text;

    private setColliders(): void {
        this.physics.add.collider(this.player, this.papers, (player, paper) => {
            this.player.increaseScore();
            paper.destroy();
        });

        this.physics.add.collider(
            this.player,
            this.contaminatedPapers,
            (player, paper) => {
                this.player.hurt();
                this.player.contaminatedSound.play();
                paper.destroy();
            }
        );
    }

    constructor() {
        super(sceneConfig);
    }

    create() {
		this.add.image(getGameWidth(this)/2, getGameHeight(this)/2, "store");

		this.player = new Player({
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
            text: `SCORE : ${this.player.score}`,
            style: {
				font: "32px monospace",
				fontStyle: "strong"
            },
        });
		
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
						player: this.player,
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

		this.setColliders();
    }

    update() {
		this.player.update();
		
		if (this.player.isDead()) {
			this.scene.start("Gameover", {"score": this.player.score});
		}

		// TODO : Virer ça de l'update
		this.score.setText(`SCORE : ${this.player.score}`);
    }
}
