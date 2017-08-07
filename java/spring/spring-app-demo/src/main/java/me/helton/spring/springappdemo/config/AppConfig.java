package me.helton.spring.springappdemo.config;

import me.helton.spring.springappdemo.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import javax.sql.DataSource;

@Configuration
@ComponentScan(basePackages = "me.helton.spring.springappdemo")
public class AppConfig {
    @Autowired
    private DataSource dataSource;

    @Autowired @Qualifier("redSox")
    private Team home;

    @Autowired @Qualifier("cubs")
    private Team away;

    @Bean
    public Game game() {
        Game game = new BaseballGame(home, away);
        game.setDataSource(dataSource);
        return game;
    }

}
