package me.helton.spring.springappdemo.entities;

import javax.sql.DataSource;

public interface Game {
    Team getHomeTeam();
    Team getAwayTeam();
    void setHomeTeam(Team homeTeam);
    void setAwayTeam(Team homeTeam);
    String playGame();
    void setDataSource(DataSource dataSource);
}
