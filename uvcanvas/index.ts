import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { createRoot } from "react-dom/client";
import * as UVcanvas from "uvcanvas";
 
export class uvcanvas implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _container: HTMLDivElement;
 
    constructor() {
        // Constructor logic
    }
 
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
        this._container = container;
        //this._container.style.width = "100px";
        //this._container.style.height = "100px";      
    }
 
 
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // Update view logic
        const params = context.parameters;

        const widthPx: number = params.canvasWidth.raw || 0;
        const heightPx: number = params.canvasHeight.raw || 0;

        this._container.style.width = widthPx.toString() + 'px';
        this._container.style.height = heightPx.toString() + 'px'; 
        
        const root = createRoot(this._container);

        switch(params.BackgroundOptionSet.raw){
            case 'Xenon':
                root.render(React.createElement(UVcanvas.Xenon, {}));
                break;
            case 'Novatrix':
                root.render(React.createElement(UVcanvas.Novatrix, {}));
                break;
            case 'Velustro':
                root.render(React.createElement(UVcanvas.Velustro, {}));
                break;
            case 'Tranquiluxe':
                root.render(React.createElement(UVcanvas.Tranquiluxe, {}));
                break;
            case 'Opulento':
                root.render(React.createElement(UVcanvas.Opulento, {}));
                break;
            default:
                root.render(React.createElement(UVcanvas.Lumiflex, {}));
                break;
        }
       
    }
 
    public getOutputs(): IOutputs {
        return {};
    }
 
    public destroy(): void {
        // Cleanup logic if needed
    }
}
 