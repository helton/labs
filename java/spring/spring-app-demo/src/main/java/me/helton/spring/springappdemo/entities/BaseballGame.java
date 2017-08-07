package me.helton.spring.springappdemo.entities;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class BaseballGame implements Game {
    @NonNull
    private Team homeTeam;
    @NonNull
    private Team awayTeam;

    public String playGame() {
        return Math.random() < 0.5 ? getHomeTeam().getName() : getAwayTeam().getName();
    }
}
