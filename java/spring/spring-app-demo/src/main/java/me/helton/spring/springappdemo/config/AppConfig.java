package me.helton.spring.springappdemo.config;

import me.helton.spring.springappdemo.entities.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import javax.sql.DataSource;

@Configuration
@Import(InfrastructureConfig.class)
public class AppConfig {

    @Bean
    public Game game(DataSource dataSource) {
        Game game = new BaseballGame(redSox(), cubs());
        // <dataSource> is a parameter in a Bean config, so it'll be injected
        // using the beans registered here (autowired).
        // Since we're importing Infrastructure config class, it'll be found there
        game.setDataSource(dataSource);
        return game;
    }

    @Bean
    public Team redSox() {
        return new RedSox();
    }

    @Bean
    public Team cubs() {
        return new Cubs();
    }

}
