<?php

/**
 * Allows the user to interact with the game
 */
class Game {

    public function sendCommand ($command)
    {
        $response = Engine::send($command);
        Engine::send("jai recu une reponce du jeux : $response");
    }

}