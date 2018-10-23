import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from "./Home";
import Portfolio from "./Portfolio";


class Index extends React.Component {
  render() {
    return (

		<BrowserRouter>
		 <div>
			<Route exact path={"/"} component={Home} />
			<Route path={"/Homepage"}  component={Home} />
			<Route path={"/portfolio"}  component={Portfolio} />
		</div>
		</BrowserRouter>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

export default Index;

registerServiceWorker();
