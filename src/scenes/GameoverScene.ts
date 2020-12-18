/** @format */

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

    create() {}
}
