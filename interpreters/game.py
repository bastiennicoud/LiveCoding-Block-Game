# Python3 translation files

class Game:

    def __init__(self):
        pass

    def loadLevel(self):
        return engine.send(f'game.levelLoader.load('{name}')')


class Character:
    def __init__(self, x, y):
        engine.send(f'game.level.addElement("character", {x}, {y})')