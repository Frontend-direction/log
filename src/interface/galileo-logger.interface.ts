import {
  IDependencyTelemetry,
  IEventTelemetry,
  IExceptionTelemetry,
  IMetricTelemetry,
  IPageViewPerformanceTelemetry,
  IPageViewTelemetry,
  ITraceTelemetry
} from "@microsoft/applicationinsights-web";


export enum loggingLevel {
  'WARN'= 1,
  'ERROR' = 2,
}

type Level = {
  level: loggingLevel
}

export interface ICustomProperties {
  [key: string]: any;
}

export interface Iproperties {
  [key: string]: string;
}

export interface IMeasurements {
  [key:string]: number
}

export interface IGalileoLogger {
  trackPageView(pageView: IPageViewTelemetry, customProperties?: ICustomProperties): void;
  trackEvent(event: IEventTelemetry, customProperties?: ICustomProperties): void;
  trackPageView(pageView?: IPageViewTelemetry): void;
  trackPageViewPerformance(pageViewPerformance: IPageViewPerformanceTelemetry): void;
  trackException(exception: IExceptionTelemetry, customProperties?: ICustomProperties): void;
  trackTrace(trace: ITraceTelemetry, customProperties?: ICustomProperties): void;
  trackMetric(metric: IMetricTelemetry, customProperties?: ICustomProperties): void;
  startTrackPage(name?: string): void;
  stopTrackPage(name?: string, url?: string, customProperties?: ICustomProperties, measurements?: IMeasurements): void;
  startTrackEvent(name?: string): void;
  stopTrackEvent(name: string, properties?: Iproperties, measurements?: IMeasurements): void;
  setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string, storeInCookie?: boolean): void;
  clearAuthenticatedUserContext(): void;
  trackDependencyData(dependency: IDependencyTelemetry): void;
  // addDependencyListener(dependencyListener: DependencyListenerFunction): IDependencyListenerHandler;
}