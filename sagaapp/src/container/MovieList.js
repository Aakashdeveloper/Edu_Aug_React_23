import React, {Component} from 'react';
import { getMovies} from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movies from '../component/displayComponent';
import Loading from './loading';

class App extends Component {

    componentDidMount(){
        this.props.dispatch(getMovies())
    }

    render(){
        return(
            <div>
                <Loading/>
                <Movies moviesData={this.props.mydata.movies}/>
            </div>
        )
    }
}


//This will recive the state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}

App.protoTypes ={
    dispatch: PropTypes.func
}

export default connect(mapStateToProps,)(App)