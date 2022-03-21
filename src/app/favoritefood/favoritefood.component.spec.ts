import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritefoodComponent } from './favoritefood.component';

describe('FavoritefoodComponent', () => {
  let component: FavoritefoodComponent;
  let fixture: ComponentFixture<FavoritefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritefoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
