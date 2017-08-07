package me.helton.spring.springappdemo;

import me.helton.spring.springappdemo.entities.Game;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class RunWithSpring {

    public static void main(String[] args) {
        //ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Game game = context.getBean("game", Game.class);
        System.out.println(game.playGame());

        System.out.println("There are " + context.getBeanDefinitionCount() + " beans");
        for (String name :
                context.getBeanDefinitionNames()) {
            System.out.println(name);
        }
    }

}
