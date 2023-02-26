import React, { Fragment } from "react";
import { Route } from "react-router";
import Test from "./views/Test";
import { GlobalStyle } from "./views/GlobalStyleWrap.cjs";

export default function AppSSR() {
	return (
		<Fragment>
			<div className="app-wrapper">
				<GlobalStyle />

				<Route
					exact
					path="/">
					<Test />
				</Route>
			</div>
		</Fragment>
	);
}
