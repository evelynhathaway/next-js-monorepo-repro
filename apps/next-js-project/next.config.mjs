import path from "node:path";
import {fileURLToPath} from "node:url";

/** @type {import("next").NextConfig} */
const config = process.env.NEXT_REPRO_TURBOTRACE ? {
	outputFileTracing: true,
	experimental: {
		turbotrace: {
			contextDirectory: path.resolve(path.join(fileURLToPath(import.meta.url), "../../..")),
		},
	},
} : process.env.NEXT_REPRO_TRACINGROOT ? {
	outputFileTracing: true,
	experimental: {
		outputFileTracingRoot: path.join(fileURLToPath(import.meta.url), "../../.."),
	},
} : {}
export default config;
