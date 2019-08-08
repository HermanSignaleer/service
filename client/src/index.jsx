import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Questions: [],
        question: '',
        answers: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
      let questions = [];
      axios.get('/Questions')
      .then((response) => {
        // console.log(response, "error getting data at client")
        response.data.map(function(element, index){
          // console.log(element, 'howdy')
          let tuple = [];
          tuple.push(element.question, element.answers, element.id)
          questions.push(tuple)
        })
        this.setState({
          Questions: questions,
          question: questions.question,
          answers: questions.answers
        });
        //
      })
      .catch((error) => { console.log(error)})
      // console.log(this.props.question)
    };
    
    handleChange(event){
      event.preventDefault();
      this.setState({
        question: event.target.value
      });
      console.log(this.state.question, 'error getting question on client')
    };
    
    handleSubmit(event){
      event.preventDefault();
      axios.get('/Questions', this.state.answers)
      //console.log(response)
      .then(() => {
        this.setState({
          answers: this.props.answers
        });
      });
    };
    
    
      
      
      
      render() {
        return (
          <div>
            {console.log(this.state.Questions)}
            <h3>Customer Question and Answer?</h3>
              <input type="text" className="input" name={this.state.question} onChange={this.handleChange}/>
              <button type="button" className="button" style={{background: "lightblue"} .style={color: "white"}} onClick={this.handleSubmit}>Ask</button>
              <ul className='questions'>
                <li>{this.state.question}</li>
                <li>{this.state.answers}</li>
                <li>{this.state.question}</li>
                <li>{this.state.answers}</li>
                <li>{this.state.question}</li>
                <li>{this.state.answers}</li>
                <li>{this.state.question}</li>
                <li>{this.state.answers}</li>
              </ul>
        </div>
      )
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
