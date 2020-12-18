/** @format */

import { SceneStartButton } from "../gui/SceneStartButton";
import { getGameWidth, getGameHeight, COLORS } from "../helpers";
import { LoadingBar } from "../objects/LoadingBar";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: "Boot",
};

export class BootScene extends Phaser.Scene {
    private btn: SceneStartButton;
	private loadingBar: LoadingBar;

    constructor() {
        super(sceneConfig);
	}
	
    preload() {
        this.load.pack("preload", "assets/pack.json", "preload");
		this.loadingBar = new LoadingBar({ scene: this });
        this.load.on("progress", (value) => {
			this.loadingBar.draw(value);
			this.loadingBar.progressText.setText((Math.floor(value*100)) + "%");
		});
        this.load.on("complete", () => {
			this.loadingBar.destroy();
		});
    }

    create() {
		this.make.text({
            x: getGameWidth(this) / 2,
            y: getGameHeight(this) / 2,
            text: "TOILET PAPER CATCH !",
            style: {
                font: "32px monospace",
			},
			origin: 0.5,
        });

        this.btn = new SceneStartButton({
            scene: this,
			x: getGameWidth(this) / 2,
			y: 540,
			width: 124, 
			height: 44,
			color: COLORS.white.hex,
			hoverColor: COLORS.customBlue.hex,
			label: "START",
			fontSize: "32px",
			fontColor: COLORS.black.string,
			alpha: 1,
			newSceneKey: "Game"
        });
    }
}
