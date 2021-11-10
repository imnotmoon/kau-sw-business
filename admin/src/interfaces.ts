export interface LoginResponse {
	data: { id: number; name: string };
	token: string;
}

export interface NoticeSummary {
	id: number;
	title: string;
	createdAt: Date;
}

export interface NoticeSummaryResponse {
	data: Array<NoticeSummary>;
}

export interface BannerSummaryResponse {
	data: Array<Banner>;
}

export interface Banner {
	id?: number;
	imageUrl: string;
	title: string;
	content: string;
	viewOrder?: number;
	useFlag?: boolean;
	createdAt?: Date;
}