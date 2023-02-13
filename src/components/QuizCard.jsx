export default function QuizCard({length, data, questionId, handleQuestion}) {
    // const length = props.length;
    // const data = props.data;
    // const questionId = props.questionId;
    // const handleQuestion = props.handleQuestion;
    return (
    <> 
    <h2>Quiz {questionId+1}/{length}</h2> 
    <div>
        <h3>{data[questionId].question}</h3>
        <ul>
        {data[questionId].options.map ((element,key) => 
            ( <li key={element.id}>
                <button
                onClick={ () => handleQuestion(element.isCorrect) }
                >{element.answer}</button></li>
            ))}
        </ul>
    </div>
    </>
    );
}