import React, { Fragment, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { GlobalStyle } from "./views/GlobalStyleWrap.cjs";

// import Test from "./views/Test";
const Test = React.lazy(() => import("./views/Test"));

export default function App() {
	return (
		<Fragment>
			<div className="app-wrapper">
				<BrowserRouter basename="/">
					<GlobalStyle />

					<Route
						exact
						path="/">
						<Suspense fallback={<div />}>
							<Test />
						</Suspense>
					</Route>
				</BrowserRouter>
			</div>
		</Fragment>
	);
}
