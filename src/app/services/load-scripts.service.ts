import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

    constructor() { }

  // eslint-disable-next-line @typescript-eslint/naming-convention
    Load(archivos:string[]) {
        for ( let archivo of archivos ) {
            let script = document.createElement('script');
            script.src = './assets/JS_Files/' + archivo + '.js';
            script.type = 'text/javascript';
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(script);
        }
    }

    LoadModules(archivos:string[]) {
        for ( let archivo of archivos ) {
            let script = document.createElement('script');
            script.src = './assets/JS_Files/' + archivo + '.js';
            script.type = 'module';
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(script);
        }
    }

    LoadHead(archivos:string[]) {
        for ( let archivo of archivos ) {
            let script = document.createElement('script');
            script.src = './assets/JS_Files/' + archivo + '.js';
            script.type = 'text/javascript';
            let head = document.getElementsByTagName('head')[0];
            head.appendChild(script);
        }
    }

    LoadCSS( archivos:string[] ) {
        for ( let archivo in archivos ) {
            let link = document.createElement('link');
            link.rel = "stylesheet";
            link.type = 'text/html text/css';
            link.href = "./assets/CSS_Files/" + archivo + ".css";
            let head = document.getElementsByTagName('head')[0];
            head.appendChild(link);
        }
    }

    LoadUrl(archivos:string[]) {
        for ( let archivo of archivos ) {
            let script = document.createElement('script');
            script.src = archivo;
            let head = document.getElementsByTagName('head')[0];
            head.appendChild(script);
        }
    }

    LoadLinks(archivos:string[]) {
        for ( let archivo of archivos ) {
            let link = document.createElement('link');
            link.rel = "stylesheet";
            link.href = archivo;
            let head = document.getElementsByTagName('head')[0];
            head.appendChild(link);
        }
    }
}
