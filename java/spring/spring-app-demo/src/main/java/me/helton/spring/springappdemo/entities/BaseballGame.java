package me.helton.spring.springappdemo.entities;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.sql.DataSource;

@Data
@RequiredArgsConstructor
public class BaseballGame implements Game {
    @NonNull
    private Team homeTeam;
    @NonNull
    private Team awayTeam;
    private DataSource dataSource;

    public String playGame() {
        return Math.random() < 0.5 ? getHomeTeam().getName() : getAwayTeam().getName();
    }
}
