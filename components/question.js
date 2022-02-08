import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: this.createChoices(props.item),
            result: {
                answer: null,
                verdict: '',
            }
        }
    }

    createChoices(item) {
        return [...item.incorrect_answers.map(answer => ({
            text: answer,
            correct: false,
        })), { 
            text: item.correct_answer,
            correct: true,
        }].sort((a, b) => Math.random() - Math.random());
    }

    handleAnswer(answer) {
        this.setState({
            ...this.state,
            result: {
                answer: answer.text,
                verdict: answer.correct ? 'correct' : 'incorrect',
            }
        });
    }

    render() {

        return <div className="card">
            <h3 dangerouslySetInnerHTML={{
                __html: this.props.item.question
            }}></h3>
            {
                this.state.answers.map(answer => (
                    <div 
                        class="trivia-answer"
                        key={answer.text}
                        onClick={() => this.handleAnswer(answer)}
                    >
                        {answer.text}
                    </div>
                ))
            }
            <br />
            <div className={`result-${this.state.result.verdict}`}>{ this.state.result.verdict ? `${this.state.result.verdict.toUpperCase()}: ` : '' } { this.state.result.answer }</div>
        </div>
    }
}