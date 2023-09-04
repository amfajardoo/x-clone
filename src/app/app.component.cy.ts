import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostService } from '@data-access/post.service';
import { AppComponent } from './app.component';

describe('app.component.cy.ts', () => {
  it('playground', () => {
    cy.mount(AppComponent, {
      imports: [CommonModule, RouterOutlet],
      providers: [PostService],
    });
    cy.get('.content span').contains('x-clone app is running!');
  });
});
