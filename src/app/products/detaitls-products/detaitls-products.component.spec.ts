import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitlsProductsComponent } from './detaitls-products.component';

describe('DetaitlsProductsComponent', () => {
  let component: DetaitlsProductsComponent;
  let fixture: ComponentFixture<DetaitlsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaitlsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaitlsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
