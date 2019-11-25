import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
   template: `
    <div class="bounds">
    
      <div class="content" 
           fxLayout="row" 
           fxLayout.xs="column" 
           fxFlexFill >
           
          <div fxFlex="15" class="sec1" fxFlex.xs="55">
              first-section
          </div>
          <div fxFlex="30" class="sec2" >
              second-section
          </div>
          <div fxFlex="55" class="sec3" fxFlex.xs="15">
              third-section
          </div>
          
      </div>
      
    </div>

    <h1>Flexible Boxes</h1>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
</div>

<p>Try to resize the browser window.</p>
<p>A container with "flex-wrap: nowrap;" will never wrap its items.</p>
<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p>

    <media-query-status></media-query-status>
  `,
  styleUrls:  [ './app.component.css' ],
})
export class AppComponent  {
  name = 'Anyone can you help with Angular 4 Drag and drop';


}


