import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./intercepted-http";
import { AuthService } from "./auth/auth.service";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptedHttp(xhrBackend, requestOptions);
}
