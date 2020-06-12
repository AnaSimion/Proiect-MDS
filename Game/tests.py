import time
import pytest
from app_class import *
from pynput.keyboard import Key, Controller


def test_end_to_end():
    # Starting the app
    app = App()
    assert app.state == "start"
    app.start_draw()
    time.sleep(3)
    # Making a new event, pressing down the space button
    e = pygame.event.Event(pygame.KEYDOWN)
    e.key = pygame.K_SPACE
    pygame.event.post(e)
    app.start_events()
    # After pressing space, I should be playing
    assert app.state == "playing"

    app.playing_draw()
    time.sleep(1)
    # Starting the game
    steps = 0
    while steps < 1000:
        # I will move to the right
        e.key = pygame.K_RIGHT
        pygame.event.post(e)
        # Game continues
        app.playing_events()
        app.playing_update()
        app.playing_draw()
        # I want to test if an enemy has reached me
        for enemy in app.enemies:
            if enemy.grid_pos == app.player.grid_pos:
                # If the enemy reached me, the state should be game over
                assert app.state == "game over"

        if app.state == 'game over':
            app.game_over_events()
            app.game_over_update()
            app.game_over_draw()
            steps = 1000

        steps += 1
    # after I finish, I play one more game
    time.sleep(1)
    e.key = pygame.K_SPACE
    pygame.event.post(e)
    app.game_over_events()

    assert app.state == "playing"
    app.playing_draw()
    time.sleep(1)
    # Starting the game
    steps = 0
    lives = app.player.lives
    while steps < 10000:
        # I will move to the right
        e.key = pygame.K_RIGHT
        pygame.event.post(e)
        # Game continues
        app.playing_events()
        app.playing_update()
        app.playing_draw()
        # I want to test if an enemy has reached me
        for enemy in app.enemies:
            if enemy.grid_pos == app.player.grid_pos:
                # If the enemy reached me, app state should be game over
                assert app.state == "game over"

        if app.state == 'game over':
            app.game_over_events()
            app.game_over_update()
            app.game_over_draw()
            steps = 10000

        steps += 1
    # after I finish the second game, i want to exit
    time.sleep(1)
    e.key = pygame.K_ESCAPE
    pygame.event.post(e)

    app.game_over_events()
    assert app.running is False
