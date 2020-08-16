import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Users from './components/users/Users';
import User from './components/users/User';
// import Search from './components/users/Search';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import './App.css'; 
// import axios from 'axios';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // }

  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    // this.setState({
    //   loading: true
    // });

    // const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECTRET}`);
    // // console.log(res);

    // this.setState({
    //   users: res.data,
    //   loading: false
    // });
  // }

  // // Search Github Users
  // const searchUsers = async (text) => {
  //   // console.log(text)
  //   // this.setState({
  //   //   loading: true
  //   // });
  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECTRET}`);
  //   // console.log(res);
  //   // this.setState({
  //   //   users: res.data.items,
  //   //   loading: false
  //   // });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // }

  // Get Single user 
  // const getUser = async (username) => {
  //   // console.log(username)
  //   // this.setState({
  //   //   loading: true
  //   // });
  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECTRET}`);
  //   // console.log(res);
  //   // this.setState({
  //   //   user: res.data,
  //   //   loading: false
  //   // });
  //   setUser(res.data);
  //   setLoading(false);
  // }

  // Get user repos
  // const getUserRepos = async (username) => {
  //   // console.log(username)
  //   // this.setState({
  //   //   loading: true
  //   // });
  //   setLoading(true);

  //   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECTRET}`);
  //   console.log(res.data);
  //   // this.setState({
  //   //   repos: res.data,
  //   //   loading: false
  //   // });
  //   setRepos(res.data);
  //   setLoading(false);
  // }

  // Clear Users from state
  // const clearUsers = () => {
  //   // this.setState({
  //   //   users: [],
  //   //   loading: false
  //   // })
  //   setUsers([]);
  //   setLoading(false);
  // }

  // SetAlert
  // const showAlert = (msg, type) => {
  //   // console.log(msg);
  //   // this.setState({
  //   //   alert: {
  //   //     msg: msg,
  //   //     type: type
  //   //   }
  //   // });
  //   setAlert({ msg, type })

  //   setTimeout(()=>{
  //     // this.setState({
  //     //   alert: null
  //     // })
  //     setAlert(null)
  //   }, 5000)
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github">
            </Navbar>
            <div className="container">
              <Alert 
                // alert={alert}
              ></Alert>
              <Switch>
                <Route exact path='/' render={props => (
                  // <Fragment>
                  //   <Search 
                  //     // searchUsers={searchUsers} 
                  //     // clearUsers={clearUsers}
                  //     // showClear={users.length > 0 ? true: false}
                  //     // setAlert={showAlert}
                  //     >
                  //   </Search>
                  //   <Users 
                  //     // loading={loading}
                  //     // users={users}
                  //   ></Users>
                  // </Fragment>
                  <Home component={Home}></Home>
                )}>
                </Route>
                <Route exact path='/about' component={About}></Route>
                {/* <Route exact path='/user/:login' render={props => (
                  <User
                    {...props}
                    // getUser={getUser}
                    // getUserRepos={getUserRepos}
                    // user={user}
                    // repos={repos}
                    // loading={loading}
                    ></User>
                )}></Route> */}
                <Route exact path='/user/:login' component={User}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
