import { ApplicationInsights, IConfig, IConfiguration, IDependencyTelemetry, IEventTelemetry, IExceptionTelemetry, IMetricTelemetry, IPageViewPerformanceTelemetry, IPageViewTelemetry, ITraceTelemetry } from "@microsoft/applicationinsights-web";
import { defaultConfig } from "../config/config";
import { ICustomProperties, IGalileoLogger, IMeasurements, Iproperties } from "../interface/galileo-logger.interface";


export class Logger implements IGalileoLogger {

  private defaultLoggingLevel = 'warn';
  private appInsights!: ApplicationInsights;

  constructor() {
    if(!this.appInsights) {
      throw new Error('Initiat logger via static method "creatLogger"');
    }
  }

  static createLogger(configuration: IConfiguration & IConfig): Logger {
    const config = { ...defaultConfig, ...configuration };
    const appInsights = new ApplicationInsights({ config });
    appInsights.loadAppInsights();

    const logger = new Logger();
    
    logger.appInsights = appInsights;
    logger.defaultLoggingLevel = 'info';

    return logger;
  }

  trackPageView(pageView: IPageViewTelemetry) {
    this.appInsights.trackPageView(pageView);
  }

  startTrackPage(name?: string | undefined): void {
    throw new Error("Method not implemented.");
  }

  stopTrackPage(name?: string | undefined, url?: string | undefined, customProperties?: ICustomProperties | undefined, measurements?: IMeasurements | undefined): void {
    throw new Error("Method not implemented.");
  }

  trackPageViewPerformance(pageViewPerformance: IPageViewPerformanceTelemetry): void {
    throw new Error("Method not implemented.");
  }

  trackEvent(event: IEventTelemetry, customProperties?: ICustomProperties | undefined): void {
    throw new Error("Method not implemented.");
  }

  startTrackEvent(name?: string | undefined): void {
    throw new Error("Method not implemented.");
  }

  stopTrackEvent(name: string, properties?: Iproperties | undefined, measurements?: IMeasurements | undefined): void {
    throw new Error("Method not implemented.");
  }

  trackException(exception: IExceptionTelemetry, customProperties?: ICustomProperties | undefined): void {
    throw new Error("Method not implemented.");
  }

  trackTrace(trace: ITraceTelemetry, customProperties?: ICustomProperties | undefined): void {
    throw new Error("Method not implemented.");
  }

  trackMetric(metric: IMetricTelemetry, customProperties?: ICustomProperties | undefined): void {
    throw new Error("Method not implemented.");
  }
  
  trackDependencyData(dependency: IDependencyTelemetry): void {
    throw new Error("Method not implemented.");
  }

  setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string | undefined, storeInCookie?: boolean | undefined): void {
    throw new Error("Method not implemented.");
  }

  clearAuthenticatedUserContext(): void {
    throw new Error("Method not implemented.");
  }
}