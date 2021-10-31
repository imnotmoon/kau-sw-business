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
