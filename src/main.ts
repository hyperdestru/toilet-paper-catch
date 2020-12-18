/** @format */

import * as Phaser from "phaser";
import { COLORS } from "./helpers";
import Scenes from "./scenes";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Toilet Paper Catch",
	type: Phaser.AUTO,
	backgroundColor: 0x222222,
    scale: {
        width: 724,
        height: 640,
    },
    input: {
        keyboard: true,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0,
            },
            debug: false,
        },
    },
    parent: "game",
    scene: Scenes,
};

export const game = new Phaser.Game(gameConfig);
