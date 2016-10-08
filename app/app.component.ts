import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
		<nav class="navbar navbar-inverse">
			<a href="" class="navbar-brand">My Angular 2 App</a>
		</nav>
    </header>
    
    <main>

    	<div class="row">
			<div class="col-sm-4">

				<div *ngIf="users">
				<ul class="list-group users-list">
					<li *ngFor="let user of users" class="list-group-item">
						{{user.name}}（id:{{user.id}}）
					</li>
				</ul>
				</div>

			</div>
			<div class="col-sm-8">
				<div class="jumbotron">
				  <h1>Hi,xm94630!</h1>
				  {{message}}
				</div>
			</div>
    	</div>

		

	</main>

    <footer class="text-center">
		Copyright &copy; 2016  
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
	message = 'Hello';
	users = [
		{id:123,name:'浙小孩',username:'浙小孩'},
		{id:234,name:'张三',username:'张三'},
		{id:345,name:'李四',username:'李四'}
	];
}