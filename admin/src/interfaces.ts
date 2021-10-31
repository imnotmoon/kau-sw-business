export interface LoginResponse {
	data: { id: number; name: string };
	token: string;
}

export interface NoticeSummaryResponse {
	data: Array<{
		id: number;
		title: string;
		createdAt: Date;
	}>;
}
