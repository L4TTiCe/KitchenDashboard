import {User} from "./User";
import {Food} from "./Food";
import {Location} from "./Location";
import {ObjectId} from 'bson';

/**
 * Represents a User registering owning a food item.
 * @typedef {Ownership} Ownership
 */
export interface Ownership {
    _id: ObjectId;
    owner: User;
    food: Food;
    quantity: number;
    quantity_unit: string;
    price: number;
    date_procured: Date;
    date_expiry: Date;
    located_at: Location;
}
