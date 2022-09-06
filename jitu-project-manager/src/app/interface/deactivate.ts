import { Observable } from 'rxjs/internal/Observable';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
