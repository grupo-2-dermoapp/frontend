import { TestBed } from '@angular/core/testing';
import { Platform } from '@ionic/angular';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let platformMock: any;

  beforeEach(() => {
    platformMock = jasmine.createSpyObj(['is']);
    platformMock.is.and.returnValue(true);

    TestBed.configureTestingModule({
      providers:[
      ]
    });
    TestBed.overrideProvider(Platform, {useValue: platformMock});

  });

  it('should be created', () => {
    service = TestBed.inject(AppService);
    expect(service).toBeTruthy();
  });

  it('should configure platform for mobile', () => {
    service = TestBed.inject(AppService);
    expect(service.isPhone).toBeTrue();
  });

  it('should configure platform for Web', () => {
    platformMock.is.and.returnValue(false);
    TestBed.overrideProvider(Platform, {useValue: platformMock});
    service = TestBed.inject(AppService);
    expect(service.isPhone).toBeFalse();
  });

});
