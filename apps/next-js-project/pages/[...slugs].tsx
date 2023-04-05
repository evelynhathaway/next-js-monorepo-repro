import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";

export default function Page () {
	return <p>test page</p>;
}

export const getStaticProps: GetStaticProps = async ({params, preview = false}) => {
	const slugs = params?.slugs;
	if (!slugs) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			slugs,
			preview,
		},
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10, // In seconds
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: ["/test"],
		fallback: true,
	};
};
