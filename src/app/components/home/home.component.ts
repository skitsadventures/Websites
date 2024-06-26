import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles.scss']
})
export class HomeComponent {
  dialogVisible: boolean = false;

  openDialog(): void {
    this.dialogVisible = true;
  }
  
  closeDialog(): void {
    this.dialogVisible = false;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault(); // Prevent the browser context menu from appearing
    alert('Right-click is disabled on this website.');
  }
}
