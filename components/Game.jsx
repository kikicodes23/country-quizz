"use client";

import { useEffect, useState } from "react";
import { getAllCountries } from "@/api/endpoints/countriesEndpoints";
import { generateQuestions } from "@/utils/questions.util";
import { Question } from "@/components/Question.jsx";
import { Result } from "@/components/Result.jsx";

export function Game() {
    const [isLoading, setIsLoading] = useState(true);
    // State to save the countries
    const [countries, setCountries] = useState([]);
    // State to save the questions
    const [questions, setQuestions] = useState([]);
    // State to save the index of the current question
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // State to save the score
    const [score, setScore] = useState(0);
    // State to save if the game is completed
    const [gameCompleted, setGameCompleted] = useState(false);

    // useEffect to get all the countries
    useEffect(() => {
        getAllCountries()
            .then((response) => {
                const { status, data } = response;

                // if the request was successful
                if (status === 200) {
                    // generate the questions
                    const generatedQuestions = generateQuestions(data, 4);
                    // set the questions
                    setQuestions(generatedQuestions);
                    // set the countries
                    setCountries(data);
                }
            })
            .catch((error) => console.log("error: " + error.message));

        // set the loading state to false
        setIsLoading(false);
    }, []);

    return (
        <section className="w-full flex flex-col justify-center items-center">

            {isLoading && <p>Loading...</p>}

            {!isLoading && !gameCompleted && (
                <Question
                    questions={questions}
                    currentQuestion={currentQuestion}
                    setQuestions={setQuestions}
                    setCurrentQuestion={setCurrentQuestion}
                    gameCompleted={gameCompleted}
                    setGameCompleted={setGameCompleted}
                    setScore={setScore}
                />
            )}

            {!isLoading && gameCompleted && (
                <Result
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                    setCurrentQuestion={setCurrentQuestion}
                    setGameCompleted={setGameCompleted}
                    countries={countries}
                />
            )}
        </section>
    );
}
