<?php

/**
 * Allows the user to interact with the game
 */
class Game {

    public function __construct ()
    {

    }

    public function loadLevel ($name)
    {
        $response = $engine->send("game.levelLoader.load('$name')");
        return $response;
    }

}