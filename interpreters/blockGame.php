<?php

/**
 * Allows the user to interact with the game
 */
class Game {

    public static function sendCommand ($command)
    {
        $response = Engine::send($command);
        Engine::send("jai recu une reponce du jeux : $response");
    }

}

?>