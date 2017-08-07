package me.helton.spring.springappdemo;

import me.helton.spring.springappdemo.config.AppConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.NumberFormat;

public class RunWithSpring {

    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

//        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        NumberFormat nf = context.getBean("nf", NumberFormat.class);
        double amount = 12345678.9012345;
        System.out.println(nf.format(amount));

//        Team royals = context.getBean("royals", Team.class);
//
//        Game game1 = context.getBean("game", Game.class);
//        System.out.println(game1);
//
//        Game game2 = context.getBean("game", Game.class);
//        game2.setAwayTeam(royals);
//        System.out.println(game2);
//
//        System.out.println(game1); //all Spring Beans has scope = 'singleton' by default!
    }

}
