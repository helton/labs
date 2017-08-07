package me.helton.spring.springappdemo;

import me.helton.spring.springappdemo.entities.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Game game() {
        return new BaseballGame(redSox(), cubs());
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
