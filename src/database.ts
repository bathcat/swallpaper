import { Observable, of } from 'rxjs';
import { GroupInfo } from './models/group';

export interface AppDTO{
  summaryMarkup:string;
  groups:Array<GroupInfo>;
}

export class Database {
  readonly app$:Observable<AppDTO> = of({
    summaryMarkup:`
    <h1>Wallpaper</h1>

    <p class='lead'>
      <strong>Pellentesque habitant morbi tristique</strong> senectus et netus 
      et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat 
      vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet 
      quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris 
      placerat eleifend leo. Quisque sit amet est et sapien ullamcorper 
      pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>,
      ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, 
      eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. 
      <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
    </p>
    
    <h2>Lorem Ipsum</h2>
    
    <ol>
       <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
       <li>Aliquam tincidunt mauris eu risus.</li>
    </ol>
    
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
        magna. Cras in mi at felis aliquet congue. Ut a est eget ligula 
        molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis 
        mollis, tellus est malesuada tellus, at luctus turpis elit sit amet 
        quam. Vivamus pretium ornare est.
      </p>
    </blockquote>
    `,
    groups:[
    {
      name: 'Cat',
      image: 'assets/cat.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p6',
      image: 'assets/group-p6.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p31m',
      image: 'assets/group-p31m.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p3m',
      image: 'assets/group-p3m.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p4',
      image: 'assets/group-p4.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'cmm',
      image: 'assets/group-cmm.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'pgg',
      image: 'assets/group-pgg.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'pmg',
      image: 'assets/group-pmg.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'pg',
      image: 'assets/group-pg.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'pmm',
      image: 'assets/group-pmm.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p2',
      image: 'assets/group-p2.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p4m',
      image: 'assets/group-p4m.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p6m',
      image: 'assets/group-p6m.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p4g',
      image: 'assets/group-p4g.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'p1',
      image: 'assets/group-p1.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
    {
      name: 'cm',
      image: 'assets/group-cm.jpg',
      summaryMarkup:`
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
          viverra scelerisque purus quis iaculis. In sit amet vestibulum 
          urna. Nam dictum sollicitudin tellus. Maecenas in augue quis enim 
          efficitur sagittis id et ligula. Curabitur congue leo non tempor 
          faucibus. Suspendisse sed arcu varius nibh aliquet varius nec a 
          lorem. Nunc semper tincidunt commodo. Quisque tincidunt ligula non 
          nisl blandit, quis venenatis dui venenatis.
        </p>
        <p>
          Aliquam eu nulla blandit, facilisis sapien dapibus, porta ligula. 
          Sed vitae feugiat odio. Ut in ullamcorper nibh. Nam nunc enim, 
          tincidunt eget sagittis ac, suscipit tristique dolor. Nam sem odio, 
          pellentesque non elit quis, laoreet sagittis turpis. Etiam fermentum 
          quam nec odio consequat, vehicula condimentum tellus luctus.
        </p>
      `,
    },
  ]});
}
