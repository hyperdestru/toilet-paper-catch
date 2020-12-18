/** @format */

import { SceneStartButton } from "../gui/SceneStartButton";
import { COLORS, getGameHeight, getGameWidth } from "../helpers";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Gameover",
};

export class GameoverScene extends Phaser.Scene {
    private mainMessage: Phaser.GameObjects.Text;

    constructor() {
        super(sceneConfig);
	}

	init(gameSceneData) {
		this.data.set("score", gameSceneData.score);
	}

    create() {
		this.mainMessage = this.make.text({
            x: getGameWidth(this) / 2,
            y: getGameHeight(this) / 2,
			text: "YOU. ARE. DEAD",
			origin: 0.5,
            style: {
				font: "64px monospace",
				fontStyle: "strong"
            },
		});

		this.make.text({
            x: getGameWidth(this) / 2,
            y: this.mainMessage.y + 55,
			text: `Your score : ${this.data.get("score")}`,
			origin: 0.5,
            style: {
				font: "32px monospace",
				fontStyle: "strong"
            },
		});
		
		new SceneStartButton({
            scene: this,
			x: getGameWidth(this) / 2,
			y: 540,
			width: 124, 
			height: 44,
			color: COLORS.white.hex,
			hoverColor: COLORS.customYellow.hex,
			label: "REPLAY",
			fontSize: "24px",
			fontColor: COLORS.black.string,
			alpha: 1,
			newSceneKey: "Game"
        });
	}
}
