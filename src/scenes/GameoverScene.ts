/** @format */

import { SceneStartButton } from "../gui/SceneStartButton";
import { COLORS, getGameHeight, getGameWidth } from "../helpers";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Gameover",
};

export class GameoverScene extends Phaser.Scene {
    private mainMessage: string;

    constructor() {
        super(sceneConfig);
	}

    create() {
		this.make.text({
            x: getGameWidth(this) / 2,
            y: getGameHeight(this) / 2,
			text: "YOU. ARE. DEAD",
			origin: 0.5,
            style: {
				font: "64px monospace",
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
