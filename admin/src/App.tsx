import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import BannerPage from "./pages/BannerPage";
import CalendarPage from "./pages/CalendarPage";
import AccountPage from "./pages/AccountPage";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/notices" component={NoticePage} />
					<Route exact path="/banners" component={BannerPage} />
					<Route exact path="/calendars" component={CalendarPage} />
					<Route exact path="/accounts" component={AccountPage} />
					<Route path="/" component={MainPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
