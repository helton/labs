package me.helton.spring.springappdemo.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.sql.DataSource;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class BaseballGame implements Game {
    @NonNull
    private Team homeTeam;
    @NonNull
    private Team awayTeam;
    private DataSource dataSource;

    public void startGame() {
        System.out.println("Playing Nation Anthem");
    }

    public void endGame() {
        System.out.println("Sending highlights to MBL");
    }

    public String playGame() {
        return Math.random() < 0.5 ? getHomeTeam().getName() : getAwayTeam().getName();
    }

    @Override
    public String toString() {
        return String.format("Game between %s at %s", awayTeam.getName(), homeTeam.getName());
    }
}
