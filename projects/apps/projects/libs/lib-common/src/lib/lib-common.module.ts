import { NgModule } from '@angular/core';

import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [

    TestComponent
  ],
  imports: [
  ],
  exports: [
    TestComponent
  ]
})
export class LibCommonModule { }

export {
    TestComponent
}
