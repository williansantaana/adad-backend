import { ObjectId } from "mongodb";

export const parseDocumentId = (id) => {
    if (typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id)) {
        return ObjectId.createFromHexString(id);
    }

    if (!isNaN(id) && Number.isInteger(parseFloat(id))) {
        return parseInt(id, 10);
    }

    throw new Error(`ID inválido: ${id}`);
};
