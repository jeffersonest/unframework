**

# Unframework 

**Unframework:** developed to create multipe components like bootstrap and generate a unique minified stylesheet file and js.

 - **Creating the component**
		 The path of components stay in **'./components'** and it has a default component named **'base_component'**. To create a new component copy the base component and rename to your preference. The base_component has the next structure:

> base_component
> == dist
> ===== img
> ===== js
> ====== index.js
> ==== sass
> ====== main.scss
> == package.json
> == gulpfile.js
> == index.html
> 
 2. **Generating the CSS file in the component**
			 Into the **component** run `npm install` or `yarn` to install de dependencies. to generate a **local_css** files based on your **sass** edited file, run the next command: `gulp sass`, this command will creates a new folder named **local_css**. Open the **index.html** file and you will repair that css file was imported from local_css. With this edit your html component.

Building....

License
----

MIT

Created by Jefferson Estevam

**Free Software, Hell Yeah!**
