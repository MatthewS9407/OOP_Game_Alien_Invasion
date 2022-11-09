# Alien Invasion
Alien Invasion is an OOP action game that is inspired by the classic Nokia mobile game "[Space Impact](https://en.wikipedia.org/wiki/Space_Impact)".

![screenshot](./css/images/Screenshot%202022-09-22%20at%2017.34.09.png)

https://matthews9407.github.io/Space_Invaders/index.html

## Description
Using Object Oriented Programming and DOM Manipulaion, I recreated a basic version of one of my favourite mobile games. 

It is a shooting game, where the player is at the bottom of the screen and the enemy drops from the top with random positioning at regular intervals.

The functionality was created using Javascript, the structure is provided by HTML and the design is implemented with CSS.

If I had more time for the project, I would have liked to implement multiple levels with a boss at the end of each level, as well as implement sound effects and rewards that grant an extra life.

There is one bug in the game, which is that sometimes a bukket or an alien freezes on the screen. This usually happens, when the spacebar as well as the arrow keys are pressed too frantically. I solved this bug, by removing the corresponding DOM elements after 4 seconds (the time it takes for an alien/bullet to move across the screen). I did this using the setTimeout() method.

## Instructions
Protect the Earth from an invasion of evil aliens! 

Move your tank using the left and right arrow keys and press spacebar to fire at the enemy. For each hit you get one point.
You have a total of three lives. If an alien gets past you or crashes into your tank, you lose a life. Once you lose all three lives, it's game over.
