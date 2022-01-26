import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private themesSubject: BehaviorSubject<Map<string, string>>;

  constructor() {
    const themes = new Map<string, string>([
      [
        'Default',
        'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css'
      ],
      [
        'Cerulean',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/cerulean/bulmaswatch.min.css'
      ],
      [
        'Cosmo',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/cosmo/bulmaswatch.min.css'
      ],
      [
        'Cyborg',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/cyborg/bulmaswatch.min.css'
      ],
      [
        'Darkly',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/darkly/bulmaswatch.min.css'
      ],
      [
        'Flatly',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/flatly/bulmaswatch.min.css'
      ],
      [
        'Journal',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/journal/bulmaswatch.min.css'
      ],
      [
        'Litera',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/litera/bulmaswatch.min.css'
      ],
      [
        'Lumen',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/lumen/bulmaswatch.min.css'
      ],
      [
        'Lux',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/lux/bulmaswatch.min.css'
      ],
      [
        'Materia',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/materia/bulmaswatch.min.css'
      ],
      [
        'Minty',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/minty/bulmaswatch.min.css'
      ],
      [
        'Nuclear',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/nuclear/bulmaswatch.min.css'
      ],
      [
        'Pulse',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/pulse/bulmaswatch.min.css'
      ],
      [
        'Sandstone',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/sandstone/bulmaswatch.min.css'
      ],
      [
        'Simplex',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/simplex/bulmaswatch.min.css'
      ],
      [
        'Slate',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/slate/bulmaswatch.min.css'
      ],
      [
        'Solar',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/solar/bulmaswatch.min.css'
      ],
      [
        'Spacelab',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/spacelab/bulmaswatch.min.css'
      ],
      [
        'Superhero',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/superhero/bulmaswatch.min.css'
      ],
      [
        'United',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/united/bulmaswatch.min.css'
      ],
      [
        'Yeti',
        'https://cdnjs.cloudflare.com/ajax/libs/bulmaswatch/0.8.1/yeti/bulmaswatch.min.css'
      ]
    ]);

    this.themesSubject = new BehaviorSubject(themes);
  }

  public get themes(): Observable<Map<string, string>> {
    return this.themesSubject.asObservable();
  }
}
