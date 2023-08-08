import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { registerLicense } from '@syncfusion/ej2-base';
// registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxId0x0RWFbb1x6dVRMYF5BNQtUQF1hS35UdEVjW35fcnZSTmde");


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
