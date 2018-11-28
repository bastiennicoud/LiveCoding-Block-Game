#
# Ruby translation files for the game
#

# Allows user to interact with game
class Game

  # Loads a level in the game
  def load_level name
    engine.send "game.levelLoader.load('#{name}')"
  end

  # Reset the game
  def reset
    engine.send "game.rest"
  end

end

# Allows to interact with the character
class Character

  def new x, y
    engine.send "game.level.addElement('character', #{x}, #{y})"
  end
end