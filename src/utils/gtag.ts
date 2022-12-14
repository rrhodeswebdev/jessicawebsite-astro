/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window {
		gtag: any;
	}
}

// log the pageview with their URL
export const pageview = (url: string) => {
	window.gtag("config", import.meta.env.PUBLIC_GOOGLE_ANALYTICS, {
		page_path: url,
	});
};

// log specific events happening.
export const event = ({
	action,
	params,
}: {
	action: string;
	params: string;
}) => {
	window.gtag("event", action, params);
};
