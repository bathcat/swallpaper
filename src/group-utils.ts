import { Point } from "./models/point";

export const getCenter=(document:Document)=>()=>{
  //TODO: These are magic numbers, repeated here and in global.css.
  //      They need to match.
  //
  //      Consider using css-in-js to consolidate the magic in one place.
  //           See: https://svelte.dev/blog/svelte-css-in-js
  //
  //      Alternatively, hook up to the swatch dimensions like so: 
  //           https://svelte.dev/tutorial/dimensions
  //             
  const containerVH = .45;
  const imageScale = 1.5
  const sideLength = document.documentElement.clientWidth 
                        * containerVH 
                        * imageScale
                        * .5;
  
  return Point(sideLength,sideLength);
}