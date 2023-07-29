import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import questionIlustration from "@/public/svg/questionIlustration.svg";

export function Question({
    questions,
    currentQuestion,
    setQuestions,
    setCurrentQuestion,
    setGameCompleted,
    setScore,
}) {
    // Get the current question from the questions array to render the question in the UI
    const question = questions[currentQuestion];

    // Handle function to update the score and the selected option
    const handleClickedOption = (option) => {
        // If the question is already completed, do nothing
        if (question.completed) return;

        // If the selected option is correct, update the score
        if (option.correct) {
            setScore((prev) => prev + 1);
        }

        // Create a copy of the current question
        const updateQuestion = question;
        // Loop through the options array from the question and update the selected option to true
        updateQuestion.options = updateQuestion.options.map((opt) => {
            // If the option is the selected option, update the selected option to true
            if (opt.text === option.text) {
                return { ...opt, selected: true };
            }
            // If the option is not the selected option, return the option as it is
            return opt;
        });
        // Update the question to completed
        updateQuestion.completed = true;

        // Update the questions array with the updated question
        setQuestions((prev) => {
            // Create a copy of the questions array
            const newQuestions = [...prev];
            // Update the question at the current index with the updated question
            newQuestions[currentQuestion] = updateQuestion;
            // Return the updated questions array
            return newQuestions;
        });
    };

    const handleNextQuestion = () => {
        // If the current question is the last question, set the game to completed
        if (currentQuestion === questions.length - 1) {
            return setGameCompleted(true);
        }

        // If the current question is not the last question, update the current question
        setCurrentQuestion((prev) => prev + 1);
    };

    return (
        <article className="flex flex-col justify-center bg-white text-[#5C62C2] pt-16 pb-8 px-6 w-full max-w-[464px] max-h-[660px] rounded-2xl relative">
            <h1 className="font-bold text-xl xs:text-4xl text-[#F2F2F2] uppercase text-left absolute -top-[35px] xs:-top-[52px] left-0">country quiz</h1>

            <img src={questionIlustration.src} alt="Question ilustration" className="w-[120px] sm:w-[162px] absolute -right-[3px] -top-[60px] sm:-top-20" />

            <section className="font-bold text-lg xs:text-2xl text-[#2F527B] flex flex-col items-start pb-8">
                {question?.flag && <img src={question?.flag} alt={question?.name} className="w-[75px] xs:w-[84px] rounded mb-7"/>}
                <p>{question?.text}</p>
            </section>

            <section className="pb-[36px]">
                <section className="flex flex-col gap-6 xs:gap-8 w-full">
                    {question?.options.map((option, index) => (
                        <button
                            key={index}
                            className={`
                                ${question.completed && option.correct && "bg-[#60BF88] !border-[#60BF88] text-white"}
                                
                                ${option.selected && !option.correct && "bg-[#EA8282] !border-[#EA8282] text-white"}

                                ${question.completed || "hover:bg-[#F9A826] hover:border-[#F9A826] hover:text-white"}

                                rounded-lg border-solid border-[2px] border-[#5C62C2] p-2 flex justify-between items-center text-sm xs:text-lg font-medium`}
                            onClick={(e) => handleClickedOption(option)}>

                            <div className="flex items-center">
                                <p>{`${String.fromCharCode(65 + index)}`}</p>

                                <p className="px-[44px] text-left">{option.text}</p>
                            </div>

                            <figure>
                                {/* If the question is completed and the option is correct, show the "correct" icon */}
                                {question.completed && option.correct && <AiOutlineCheckCircle className="w-[20px] h-[20px]" />}
                                {/* If the option is selected and the option is not correct, show the "wrong" icon */}
                                {option.selected && !option.correct && <AiOutlineCloseCircle className="w-[20px] h-[20px]" />}
                            </figure>
                        </button>
                    ))}
                </section>
            </section>

            {question?.completed && (
                <button
                    onClick={handleNextQuestion}
                    className="bg-[#F9A826] hover:bg-[#ffb94a] hover:-translate-y-0.5 transform transition focus:bg-[#f09401] rounded-lg text-white h-14 w-[116px] self-end text-lg font-bold"
                >
                    <p>Next</p>
                </button>
            )}
        </article>
    );
}
