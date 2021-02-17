import { Store } from '@ngrx/store';
import { AppSharedState } from '../store/shared.selectors';
import { ACL } from './model/ACL.interface';
import { IUserInfo } from '../access-checker/model/userInfo.interface';
import * as i0 from "@angular/core";
export declare class AccessCheckerService {
    protected store$: Store<AppSharedState>;
    private workspaceSelected;
    private pageId;
    workspaceSelected$: import("rxjs").Observable<string>;
    page$: import("rxjs").Observable<string>;
    constructor(store$: Store<AppSharedState>);
    clearACLLocalStorage(): void;
    setWorkSpaceSelected(workspaceId: string): void;
    getWorkSpaceSelected(): string;
    setPageSelected(pageId: string): void;
    setLocaleCode(languageCode: string, countryCode: string, timezoneCode: string): void;
    isFeatureRouteGranted(featureLabel: string): boolean;
    isPageRouteGranted(pageId: string): boolean;
    isWidgetGrantedByLabel(serviceLabel: string, pageId: string, widgetId: string): boolean;
    isPageGrantedByLabel(serviceLabel: string, pageId: string): boolean;
    isWidgetGrantedById(serviceId: string, pageId: string, widgetId: string): boolean;
    isFeatureGrantedById(serviceId: string): boolean;
    isFeatureGrantedByLabel(serviceLabel: string): boolean;
    isPageGrantedById(serviceId: string): boolean;
    generateFeatureSecurityParamBody(resourceId: string): {};
    generateFeatureSecurityParamBodyByLabel(resourceLabel: string): {};
    generateComposerPageSecurityParamBody(resourceId: string): {};
    getAuthPermissionPath(): string;
    getWorkSpace(): string;
    getWorkPage(): string;
    getPemissions(): any;
    getWorkSpaces(): ACL[];
    getFullName(): string;
    getRoleName(): string;
    getUserName(): string;
    getNodeBreadcrumb(): string;
    getRootName(): string;
    getUserUUID(): string;
    getKeyOid(): string;
    getEnablingUuid(): string;
    getLanguageCode(): string;
    getCountryCode(): string;
    getTimeZoneCode(): string;
    getACL(): IUserInfo;
    setACLLocalStorage(revoContext: any): void;
    private createUserInfo;
    setNewToken(token: String): void;
    private getFeatureIdByFeatureLabel;
    private checkSpecialSelect;
    static ɵfac: i0.ɵɵFactoryDef<AccessCheckerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AccessCheckerService>;
}