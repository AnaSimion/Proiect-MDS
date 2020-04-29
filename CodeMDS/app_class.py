import pygame
import sys
from settings import *


pygame.init()
vec = pygame.math.Vector2
logo_surface = pygame.display.set_mode((20, 20))

class App:
    def __init__(self):
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        self.clock = pygame.time.Clock()
        self.running = True
        self.state = 'start'


    def run(self):
        while self.running:
            if self.state == 'start':
                self.start_events()
                self.start_update()
                self.start_draw()
            elif self.state == 'playing':
                self.playing_events()
                self.playing_update()
                self.playing_draw()
            else:
                self.running = False
            self.clock.tick(FPS)
        pygame.quit()
        sys.exit()

# HELPER FUNCTIONS #
    def draw_text(self, words, screen, pos, size, colour, font_name, centered = False):
        font = pygame.font.SysFont(font_name, size)
        text = font.render(words, False, colour)
        text_size = text.get_size()
        if centered:
            pos[0] = pos[0] - text_size[0]//2
            pos[1] = pos[1] - text_size[1]//2

        screen.blit(text, pos)


# INTRO FUNCTIONS #

    def start_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                self.state = 'playing'

    def start_update(self):
        pass

    def start_draw(self):

        self.screen.fill(BLACK)
        self.draw_text('HIGH SCORE', self.screen, [4, 0], START_TEXT_SIZE, WHITE, START_FONT)
        self.draw_text('PUSH SPACE BAR TO START', self.screen, [WIDTH//2, HEIGHT//2+50], START_TEXT_SIZE, WHITE, START_FONT, True)
        self.draw_text('1 PLAYER ONLY', self.screen, [WIDTH//2, HEIGHT//2+100], START_TEXT_SIZE, MINT, START_FONT, True)
        self.draw_text('© 2020 BICICLETE.RO', self.screen, [WIDTH//2, HEIGHT//2+150], START_TEXT_SIZE, BLUE, START_FONT, True)
        pygame.display.set_caption('Pac-Bike')
        logo = pygame.image.load('logo.png')
        wlogo = logo.get_width()
        logo_surface.blit(logo, (WIDTH//2-wlogo//2, 85))
        pygame.display.update()

# PLAYING FUNCTIONS #

    def playing_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False

    def playing_update(self):
        pass

    def playing_draw(self):
        self.screen.fill(BLACK)
        pygame.display.update()
