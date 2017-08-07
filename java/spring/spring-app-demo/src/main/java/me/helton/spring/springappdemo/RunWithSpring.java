package me.helton.spring.springappdemo;

import me.helton.spring.springappdemo.config.AppConfig;
import me.helton.spring.springappdemo.entities.Game;
import me.helton.spring.springappdemo.entities.Team;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class RunWithSpring {

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        //ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Game game = context.getBean("game", Game.class);
        System.out.println(game.playGame());

        Team royals = context.getBean("royals", Team.class);
        game.setAwayTeam(royals);
        System.out.println(game.playGame());

//
    }

}
