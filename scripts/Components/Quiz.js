import React, {Component} from 'react';
import Modal from './Modal'
import Overlay from './Overlay'
import Button from './Button'
import CountDown from './CountDown'
import helpers from '../helpers'

const $class = helpers.$class;

class Quiz extends Component {
	constructor(props) {
        super(props)
        this.state = {
            index: 0,
            questions: props.questions,
            currentStep: props.questions[0],
            isCorrect: 1,
            hideCountDown: false,
            results: [],
            currentSeconds: 0
        };

        this.state.currentStep.alternatives = this.state.currentStep.alternatives;
        this.verifyAnswer = this.verifyAnswer.bind(this);
        this.switchView = props.switchView;
    }
    setCurrentStep(step) {
        if (this.state.questions[step]) {
            this.state.questions[step].alternatives = this.state.questions[step].alternatives;
            this.setState({
                currentStep: this.state.questions[step]
            });
        } else {
            this.switchView("2")
            this.props.sendResults(JSON.stringify(this.state.results))
        }

    }
    verifyAnswer(index) {
        var el = document.querySelector( '.md-trigger' ),
            modal = document.querySelector( '#modal');

        $class.addClass( modal, 'md-show' );
        $class.addClass( document.documentElement, 'md-perspective' );
        function removeModal( hasPerspective ) {
            $class.removeClass( modal, 'md-show' );

            if( hasPerspective ) {
                $class.removeClass( document.documentElement, 'md-perspective' );
            }
        }
        setTimeout( function () {
            removeModal( $class.hasClass( el, 'md-setperspective' ) );
            this.setState({
                index: this.state.index + 1,
                hideCountDown: false
            });
            this.setCurrentStep(this.state.index);
        }.bind(this), 1000 );

        if (index !== undefined) {
            if (this.state.currentStep.alternatives[index].correct) {
                this.state.results.push(this.state.currentStep.alternatives[index]);
                this.setState({isCorrect: 2, hideCountDown: true, results: this.state.results, currentSeconds: this.state.currentSeconds})
            } else {
                this.state.results.push(this.state.currentStep.alternatives[index]);
                this.setState({isCorrect: 1, hideCountDown: true, results: this.state.results, currentSeconds: this.state.currentSeconds})
            }
        } else {
            this.state.results.push(this.state.currentStep.alternatives[index]);
            this.setState({isCorrect: 3, hideCountDown: true, results: this.state.results, currentSeconds: this.state.currentSeconds})
        }

    }
    render () {
        var modalTitle = "";

        switch (this.state.isCorrect) {
            case 1: modalTitle = "Incorrecto"; break;
            case 2: modalTitle = "Correcto"; break;
            case 3: modalTitle = "Incompleto"; break;
        }
        var {index, questions, currentStep, isCorrect , hideCountDown} = this.state;
        return (
            <section>
                <Modal title={ modalTitle }
                       wasGood={isCorrect}
                       color={ isCorrect === 2 ? "#2ecc71" : "#e74c3c" }/>
                <Overlay color={ isCorrect === 2 ? "rgba(39, 174, 96, 0.79)" : "rgba(143,27,15,0.8)" }/>
                <div className="center container">
                    <CountDown action={this.verifyAnswer}
                               display={hideCountDown ? "none" : "block"}
                               seconds={ currentStep.duration }/>
                    <h2>Q{(index + 1) + "/" + questions.length}:</h2>
                    <h1>{ currentStep.title }</h1>
                    <ul className="container-list">{
                            currentStep.alternatives.map((step, index) => (
                                <li key={index}>
                                  <Button action={this.verifyAnswer.bind(null, index)}
                                          value={step.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        )
    }
}

Quiz.propTypes = {
	questions : React.PropTypes.array.isRequired,
	switchView : React.PropTypes.func.isRequired
}

export default Quiz;