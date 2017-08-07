package me.helton.spring.springappdemo;

import me.helton.spring.springappdemo.entities.*;

public class RunWithoutSpring {
    public static void main(String[] args) {
        Team redSox = new RedSox();
        Team cubs = new Cubs();
        Game game = new BaseballGame(redSox, cubs);
        System.out.println(game.playGame());
    }
}
