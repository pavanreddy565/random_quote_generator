import React, { Component } from 'react'
import Load from './Load';


class Quote extends Component {
    constructor(props) {
        super(props);
        this.state={
            Quotes:[],
            Quote:'',
            Author:''

        }
        
        this.newQuote = this.newQuote.bind(this);
    }
    componentDidMount() {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            this.setState({ Quotes: data }, () => {
                this.newQuote(); 
            });
        }).catch(err=>{console.log(err)});
            
    }
    newQuote(){
        const {Quotes}=this.state;
        
        if(Quotes.length===0) return null;

        const random=Math.floor(Math.random()*Quotes.length);

        const {text,author}=Quotes[random];
        this.setState({Quote:text,Author:(author.split(',')[0]==='type.fit')?"Unknown":author.split(',')[0]});
    }

    render() {
        
        if(! this.state.Quote){
            return <div><Load /></div>;
        }
        
        return (
            <div id='quote-box'>
                <div id='text'>❝ {this.state.Quote}❞</div>
                <div id='author'>∼ {this.state.Author}</div>
                <a onClick={this.newQuote} >New Quote</a>
            </div>
        )
    }
}

export default Quote