import { User } from "src/users/entities/user.entity";
import { Website } from "src/websites/entities/website.entity";

export class CreateCartDto {
    user: User;
    website: Website;
}
