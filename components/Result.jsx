import { generateQuestions } from "@/utils/questions.util";
import resultIlustration from "@/public/svg/resultIlustration.svg";

export function Result({
    score,
    setScore,
    setQuestions,
    setCurrentQuestion,
    setGameCompleted,
    countries,
}) {
    // Handle function to reset the game
    const handleTryAgain = () => {
        // generate new questions for the new game
        setQuestions(generateQuestions(countries, 4));
        // reset the current question to the first question
        setCurrentQuestion(0);
        // reset the score to 0
        setScore(0);
        // reset the game completed state to false
        setGameCompleted(false);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white text-[#1D355D] pt-[42px] pb-8 px-6 w-full max-w-[464px] rounded-2xl relative">

            <h1 className="font-bold text-xl xs:text-4xl text-[#F2F2F2] uppercase text-left absolute -top-[35px] xs:-top-[52px] left-0">country quiz</h1>

            <img src={resultIlustration.src} alt="result ilustration" className="w-[238px] h-[136px] mb-[72px]"/>

            <p className="text-4xl xs:text-5xl font-bold pb-3">Results</p>
            <p className="font-normal text-base xs:text-lg pb-[70px]">
                You got <span className="font-bold text-3xl xs:text-4xl text-[#6FCF97]">{score}</span> correct
                answers
            </p>
            <button
                onClick={handleTryAgain}
                className="bg-white border-solid border-2 border-[#1D355D] hover:bg-[#1D355D] hover:text-white w-[209px] h-[62px] rounded-lg text-[#1D355D] font-semibold text-base xs:text-lg"
            >
                <p className="">Try again</p>
            </button>
        </div>
    );
}
