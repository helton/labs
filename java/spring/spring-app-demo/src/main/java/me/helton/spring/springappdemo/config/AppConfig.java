package me.helton.spring.springappdemo.config;

import me.helton.spring.springappdemo.entities.BaseballGame;
import me.helton.spring.springappdemo.entities.Game;
import me.helton.spring.springappdemo.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import javax.sql.DataSource;
import java.text.NumberFormat;
import java.util.List;

@Configuration
@ComponentScan(basePackages = "me.helton.spring.springappdemo")
public class AppConfig {
    @Autowired
    private DataSource dataSource;

    @Autowired
    private List<Team> teams;

    @Bean
    public NumberFormat nf() {
        return NumberFormat.getCurrencyInstance();
    }

    @Bean
    //@Scope("prototype")
    public Game game() {
        Game game = new BaseballGame(teams.get(0), teams.get(1));
        game.setDataSource(dataSource);
        return game;
    }

}
