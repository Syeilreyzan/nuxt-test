import { useDrizzle } from "../utils/drizzle";
import { fruitsTable } from "../db/schema";

export default defineEventHandler(async (event) => {

    const fruits = useDrizzle()
        .select()
        .from(fruitsTable)
        .all();

    return {
        fruits
    };
});
