import { NgModule } from '@angular/core';
import { createMockProviders } from './shared/testing-utility';
import { VersionService } from './version.service';

export class VersionServiceMock implements Pick<VersionService, 'version$'> {
  private _resolve!: (value: string) => void;
  readonly version$ = new Promise<string>(
    (resolve) => (this._resolve = resolve),
  );

  set version(v: string) {
    this._resolve(v);
  }
}

@NgModule({
  providers: [...createMockProviders(VersionServiceMock, VersionService)],
})
export class VersionTestingModule {}
