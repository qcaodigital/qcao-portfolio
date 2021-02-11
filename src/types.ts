import { CSSProperties } from 'react';

export interface CSSPropertiesWithVariables extends CSSProperties {
	'--main-color': string;
	'--secondary-color': string;
}

export interface navLinkType {
	label: string;
	pathname: string;
	isActive: boolean;
}

export type navLinksType = navLinkType[];
