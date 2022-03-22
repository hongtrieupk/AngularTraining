import { Injectable } from "@angular/core";
import { RoutePathEnum } from "../routes.enum";

@Injectable()
export class NavigationService {
    private currentPath: RoutePathEnum;
    constructor() {
        this.currentPath = RoutePathEnum.ProductList;
    }

    getCurrentPath(): RoutePathEnum {
        return this.currentPath;
    }

    setCurrentPath(path: RoutePathEnum): void {
        this.currentPath = path;
    }
}