# Shared component: text-entry

The **text-entry** component is designed to simplify the creation of textarea based form controls which can include help text, hint content and form error messages.

The component also includes an **"autosave"** feature which displays a notification to the user and provides an **EventEmitter** to notify any watchers that the user input should be saved. 

## Input

The **text-entry** component exposes the following Input properties:

* group **FormGroup** (required)
* label **string** (required)
* name **string** (required)
* help **string**
* error **boolean**

### Input: group (required)

The group Input **FormGroup** sets the control's parent FormGroup to be used as reference.

**Example:**

`<app-text-entry [group]="myFormGroup" ...`

### Input: label (required)

The label Input **string** sets the label for the textarea Element.

**Example:**

`<app-text-entry label="Some label text" ...`

### Input: name (required)

The name Input **string** sets the name of the FormControl, this is also used to generate attributes like the DOM id where required.

**Example:**

`<app-text-entry name="myControlName" ...`

### Input: help

The help Input **string** sets optional help text to be displayed beneath the label Element.

**Example:**

`<app-text-entry help="Some additional information" ...`

### Input: error

Flag to specify an error on submission of the parent form.

**Example:**

`<app-text-entry [error]="myFormError" ...`

### Input: errorMessage

The errorMessage Input **string** is set in order to display a custom error message.

Default: 'This field is required'.

**Example:**

`<app-text-entry errorMessage="Please enter some text" ...`


## Output

The **text-entry** component exposes the following Output properties:

* onSaveContent **EventEmitter**

### Output: onSaveContent

EventEmitter to notify any watchers that the user input should be saved, this will call the supplied parent component method.

**Example:**

`<app-text-entry (onSaveContent)="mySaveContent()" ...`

## ViewChild

The *text-entry* component includes the following ViewChild properties:

* hint

### ViewChild: hint

Provides access to **'hint'** set within the child DOM which is used to determine the presence of additional content.

If additional DOM is supplied within the component Element, it will be included within the **text-entry** component DOM via **ng-content**. 

**Example:**

```
<app-text-entry [group]="myFormGroup" label="Some label text" name="myControlName" help="Some additional information" [error]="myFormError" (onSaveContent)="mySaveContent()">
  <ul>
    <li>Bullet point hint content</li>
    <li>Bullet point hint content</li>
    <li>Bullet point hint content</li>
  </ul>
</app-text-entry>
``` 

This will include a bullet list within a closed Element that can be opened/closed via a **"What to include"** link which is displayed beneath the label and any help text.
