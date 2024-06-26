import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog when openDialog is called', () => {
    const dialog: HTMLDialogElement = fixture.debugElement.query(By.css('dialog')).nativeElement;
    spyOn(dialog, 'showModal');

    component.openDialog();
    expect(dialog.showModal).toHaveBeenCalled();
  });

  it('should close the dialog when closeDialog is called', () => {
    const dialog: HTMLDialogElement = fixture.debugElement.query(By.css('dialog')).nativeElement;
    spyOn(dialog, 'close');

    component.closeDialog();
    expect(dialog.close).toHaveBeenCalled();
  });

  it('should open the dialog when the button is clicked', () => {
    const dialog: HTMLDialogElement = fixture.debugElement.query(By.css('dialog')).nativeElement;
    spyOn(dialog, 'showModal');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(dialog.showModal).toHaveBeenCalled();
  });

  it('should close the dialog when the close button inside the dialog is clicked', () => {
    const dialog: HTMLDialogElement = fixture.debugElement.query(By.css('dialog')).nativeElement;
    spyOn(dialog, 'close');

    component.openDialog(); // Ensure the dialog is open
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('dialog button')).nativeElement;
    closeButton.click();
    expect(dialog.close).toHaveBeenCalled();
  });
});
