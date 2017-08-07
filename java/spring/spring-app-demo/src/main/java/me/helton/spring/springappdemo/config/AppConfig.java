package me.helton.spring.springappdemo.config;

import me.helton.spring.springappdemo.entities.BaseballGame;
import me.helton.spring.springappdemo.entities.Game;
import me.helton.spring.springappdemo.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;
import javax.sql.DataSource;

@Configuration
@ComponentScan(basePackages = "me.helton.spring.springappdemo")
public class AppConfig {
    @Autowired
    private DataSource dataSource;

    @Resource
    private Team redSox;

    @Resource
    private Team cubs;

    @Bean
    public Game game() {
        Game game = new BaseballGame(redSox, cubs);
        game.setDataSource(dataSource);
        return game;
    }

}
