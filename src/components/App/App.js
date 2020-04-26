import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Navigation from '../elements/Navigation/Navigation';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import About from '../elements/About/About';
import NotFound from '../elements/NotFound/NotFound';


const App = () => (

    <Router>
		<div className="wrapper">
			<Header />
			<Navigation />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
                <Route path="/:movieId" component={Movie} exact/>
				{/* <Route path={'/./your-movies'} exact><YourMovies /></Route> */}
				<Route path={'/./NotFound'}><NotFound /></Route>
			</Switch>
			
		</div>
	</Router>
    );
//     <Router basename={APP_FOLDER_NAME}>
//     <div className="wrapper">
//         <Header />
//         <Nav />
//         <Switch>
//             <Route path={'/'} exact><Home /></Route>
//             <Route path={'/about'}><About /></Route>
//             <Route path={'/your-cities'} exact><YourCities /></Route>
//             <Route path={'/*'}><PageNotFound /></Route>
//         </Switch>
//         <Footer />
//     </div>
// </Router>
// }
//     return (
// <BrowserRouter>
//     <React.Fragment>
//         <Header />
//         <Switch>
//             <Route path="/" component={Home} exact />
//             <Route path="/:movieId" component={Movie} exact/>
//             <Route path={'/./about'}><About /></Route>
//             <Route component={NotFound} />
//         </Switch>

//     </React.Fragment>
// </BrowserRouter>
//     )
// }

export default App;