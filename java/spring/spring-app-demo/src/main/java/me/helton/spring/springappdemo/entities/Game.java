package me.helton.spring.springappdemo.entities;

public interface Game {
    Team getHomeTeam();
    Team getAwayTeam();
    void setHomeTeam(Team homeTeam);
    void setAwayTeam(Team homeTeam);
    String playGame();
}
