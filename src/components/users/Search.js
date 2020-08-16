import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);


    // state = {
    //     text: ''
    // }
    const [text, setText] = useState('');

    const onChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.text)
        // if(this.state.text == '') {
        //     this.props.setAlert('Please Enter Something', 'light')
        // } else {
        //     this.props.searchUsers(this.state.text);
        // }

        if (text === '') {
            alertContext.setAlert('Please Enter Something', 'light')
        } else {
            // searchUsers(text);
            githubContext.searchUsers(text);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                ></input>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>

            {githubContext.users.length > 0 && <button 
                className="btn btn-light btn-block"
                onClick={githubContext.clearUsers}>
                Clear
            </button>}
            
        </div>
    )
}

// Search.propTypes = {
//     // searchUsers: PropTypes.func.isRequired,
//     // clearUsers: PropTypes.func.isRequired,
//     // showClear: PropTypes.bool.isRequired,
//     // setAlert: PropTypes.func.isRequired
// }

export default Search
