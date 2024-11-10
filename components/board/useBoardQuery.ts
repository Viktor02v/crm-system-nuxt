import { useQuery } from "@tanstack/vue-query";
import { BOARD_DATA } from "./board.data";
import type { IDeal } from "~/types/deals.types";

export function useBoardQuery() {
	
	return useQuery({
		queryKey:['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data){
			const newBoard = [...BOARD_DATA]
			const deals = data.documents as unknown as IDeal[]
		},
	})
}