import createClient from "@sanity/client";

const config = {
	dataset: import.meta.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
	projectId: import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
	apiVersion: "2022-09-01",
	useCdn: false,
};

export const sanityClient = createClient(config);
