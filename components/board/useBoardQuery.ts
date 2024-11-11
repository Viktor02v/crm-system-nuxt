import { useQuery } from "@tanstack/vue-query";
import { BOARD_DATA } from "./board.data";
import type { IDeal } from "~/types/deals.types";

export function useBoardQuery() {
	
	return useQuery({
		//!! Asign a key so we could recieve it from cash in the future, key has to be unique.
		queryKey:['deals'],
		// Function Query whith help of which we receive all our documents from database.
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS), //!! DB_ID - is an id of our database, COLLECTION_DEALS - is an id of the collection that we want to get the documents from.
		// This option can be used to transform or select a part of the data returned by the query function.
		select(data){ // Get the data 
			const newBoard = [...BOARD_DATA] //Assign BOARD_DATA(our columns) to the newBoard constant 
			const deals = data.documents as unknown as IDeal[] // Assign the data that we receive to the deals constant and handle it like IDeal[]
			
			//Use forOf method to find the column that gonna be meeting with the criteria (Enum|| status) of the deal to push it in column that corresponds the same criteria
			for(const deal of deals){
				const column = newBoard.find(col => col.id === deal.status) // Check the status of deal
				if(column){ // If there is the column that has gotten a deal, we push it
					column.items.push({
						$createdAt:deal.$createdAt,
						id:deal.$id,
						name:deal.name,
						price:deal.price,
						companyName:deal.customer.name,
						status:column.name,
					})
				}
			}

			return newBoard // receiving our new newBoard so we could use it
		}, 
	})
}