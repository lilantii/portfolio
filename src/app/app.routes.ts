import { Routes } from '@angular/router';
import { Overview } from './features/overview/overview';
import { Cv } from './features/cv/cv';
import { Skills } from './features/skills/skills';

export const routes: Routes = [
    {path: "overview", component: Overview},
    {path: "cv", component: Cv},
    {path: "skills", component: Skills},
];
