import React from "react";
import { Request, Response } from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheet } from "styled-components";
import AppSSR from "../src/AppSSR";

export default async function ssrMiddleware(
	httpReq: Request,
	httpResp: Response,
) {
	try {
		const scSheet = new ServerStyleSheet();
		let scStyle: string = "";
		let appComponent: string = "";

		try {
			//generate app code
			appComponent = ReactDOMServer.renderToString(
				scSheet.collectStyles(
					<StaticRouter
						location={httpReq.url}
						context={{}}>
						<AppSSR />
					</StaticRouter>
				)
			);

			//material style
			scStyle = scSheet.getStyleTags();
		} finally {
			scSheet.seal();
		}

		return httpResp.send(appComponent);
	} catch (err) {
		console.error(err);
		return httpResp.status(500).send("Server rendering failed!");
	}
}
