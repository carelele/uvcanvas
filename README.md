# uvcanvas

This is a Power Apps Component Framework (PCF) designed to add animated backgrounds to canvas apps. It uses the [uvcanvas](https://uvcanvas.com/) React library. 
The available components are: Lumiflex, Novatrix, Velustro, Tranquiluxe, Opulent and Neon

![image](https://github.com/user-attachments/assets/f42db861-c1e0-472d-b5af-37c52d06df54)

HOW TO IMPORT

- Make sure you have [PCF components enabled](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps#enable-the-power-apps-component-framework-feature) in your environment.

- Download the [managed solution](https://github.com/carelele/uvcanvas/releases/download/solution/uvcanvas_1_0_0_1_managed.zip) and import it into your environment.

- [Add the component](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps#add-components-to-a-canvas-app) to your canvas app.

HOW TO USE

The component has three custom properties: BackgroundOptionSet, canvasWidth and canvasHeight. 

BackgroundOptionSet is an options selector that allows you to choose the animated background you want to use among the six available. CanvasWidth and CanvasHeight allow you to select the width and height of the background that is rendered. It is important to note that it does not have to match the standard properties of the Width and Height component. My recommendation is to assign them the values Self.Width and Self.Height so that the canvas has the same size as the component.

![image](https://github.com/user-attachments/assets/27471818-496f-4cba-b98c-6a722b0f9546)

![image](https://github.com/user-attachments/assets/710e278e-bd3e-4b42-8e66-b9d77cedb84e)










