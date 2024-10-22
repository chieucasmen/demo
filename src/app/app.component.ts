import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BCDividerComponent } from './bc-divider/bc-divider.component';

interface IBlock {
	name: string;
	timeline: number;
	width?: number;
	height?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BCDividerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

	public timelineCount: number = 1;

	private _timeline1: number = 0;
	private _timeline2: number = 5;
	private _timeline3: number = 10;
	private _timeline4: number = 15;
	private _timeline5: number = 18;
	private _timeline6: number = 22;
	private _timeline7: number = 24;
	private _timeline8: number = 26;

	public row1: IBlock[] = [
		{ name: 'Login / SSO', timeline: 1 },
		{ name: 'Mapping Field', timeline: 2 },
		{ name: 'Create job', timeline: 3 },
		{ name: 'Select Template', timeline: 4 },
	];

	public row2: IBlock[] = [
		{ name: 'Trigger Job', timeline: 5 },
		{ name: 'Publish API', timeline: 6 },
		{ name: 'checking', timeline: 7 },
		{ name: 'checking', timeline: 8 },
	];

	/**
	 * @param {any} data
	 */
	public timeUpdate( data: any ) {
		console.log( data.target.currentTime );
		
		const currentTime: number = data.target.currentTime;

		switch( true ) {
			case currentTime >= this._timeline1 && currentTime < this._timeline2:
				this.timelineCount = 1;
				break;
			case currentTime >= this._timeline2 && currentTime < this._timeline3:
				this.timelineCount = 2;
				break;
			case currentTime >= this._timeline3 && currentTime < this._timeline4:
				this.timelineCount = 3;
				break;
			case currentTime >= this._timeline4 && currentTime < this._timeline5:
				this.timelineCount = 4;
				break;
			case currentTime >= this._timeline5 && currentTime < this._timeline6:
				this.timelineCount = 5;
				break;
			case currentTime >= this._timeline6 && currentTime < this._timeline7:
				this.timelineCount = 6;
				break;
			case currentTime >= this._timeline7 && currentTime < this._timeline8:
				this.timelineCount = 7;
				break;
			default:
				this.timelineCount = 8;
				break;
		}
	}
}
