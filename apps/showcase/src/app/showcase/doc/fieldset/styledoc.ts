import { Component } from '@angular/core';

@Component({
    selector: 'fieldset-style-doc',
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-fieldset</td>
                        <td>Fieldset element</td>
                    </tr>
                    <tr>
                        <td>p-fieldset-toggleable</td>
                        <td>Toggleable fieldset element</td>
                    </tr>
                    <tr>
                        <td>p-fieldset-legend</td>
                        <td>Legend element.</td>
                    </tr>
                    <tr>
                        <td>p-fieldset-content</td>
                        <td>Content element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
})
export class StyleDoc {}