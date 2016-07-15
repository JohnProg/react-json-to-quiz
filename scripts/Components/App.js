import React, {Component} from 'react';
import cookie from 'react-cookie';
import Intro from './Intro';
import Quiz from './Quiz';
import Finish from './Finish';

import data from '../sample-questions'

class App extends Component {
	constructor(props) {
        super(props)
        this.state = {
            view: 0,
            title: "",
            description: "Bienvenido al quiz",
            corrects: 0,
            inCorrects: 0
        }

        this.switchView = this.switchView.bind(this);
        this.sendResults = this.sendResults.bind(this);
    }
    componentDidMount() {
      this.setState(data);
    }
    sendResults(results) {
        var resultsData = JSON.parse(results),
            _state = this.state,
            _this = this;

        resultsData.map((element) => {
            if (element && element.correct) {
                _state.corrects++
            } else {
                _state.inCorrects++
            }
        })
        this.setState({corrects: _state.corrects, inCorrects: _state.inCorrects})

        // fetch('/quiz/1/json/', {
        //   credentials: 'same-origin',
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'X-CSRFToken': cookie.load('csrftoken')
        //   },
        //   body: JSON.stringify({
        //       test_id: _this.props.id,
        //       total_good_questions: this.state.corrects,
        //       total_bad_questions: this.state.inCorrects,
        //       result: resultsData
        //   })
        // })
        // .then(function(response) {
        //    return response.json()
        // })
    }
    renderView() {
        switch(this.state.view) {
            case 0:
                return (
                    <Intro switchView={ this.switchView }
                           title={ this.state.title }
                           image={ this.state.image }
                           description={ this.state.description }/>
                );
            case "1":
                return <Quiz questions={ this.state.questions }
                             switchView={ this.switchView }
                             sendResults={ this.sendResults }/>;
            case "2":
                return <Finish title="Listo!"
                               image={ this.state.image }
                               corrects={this.state.corrects}
                               inCorrects={this.state.inCorrects}
                               switchView={ this.switchView }/>
        }
    }
    switchView(key) {
        this.setState({
            view: key
        });
    }
    render () {
        return this.renderView()
    }
}

export default App;