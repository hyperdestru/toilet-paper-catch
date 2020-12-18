/** @format */

import { getGameHeight, getGameWidth } from "../helpers";

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
	}
}
