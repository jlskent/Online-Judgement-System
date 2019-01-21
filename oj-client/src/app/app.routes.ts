import { Routes, RouterModule } from '@angular/router';

// where do you wanna go?
import { ProblemListComponent} from "./components/problem-list/problem-list.component";
import { ProblemDetailComponent} from "./components/problem-detail/problem-detail.component";


// so everything inside of {} is a Route object
const routes: Routes = [
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
  },
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    // : means we have parameter called id
    path: 'problems/:id',
    component: ProblemDetailComponent
  },
  {
    // if we do not recognize the path
    path: '**',
    redirectTo: 'problems'
  }

];

// it takes routes that we code, and we use API to generate const routing which is imported by app.module.ts
export const routing = RouterModule.forRoot(routes);

