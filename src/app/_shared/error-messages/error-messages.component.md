# Shared component: error-messages

The **error-messages** component is designed to simplify the display of form validation error messages.

## Input

The **error-messages** component exposes the following Input properties:

* control **string** (required)
* active **boolean** (required)

### Input: control (required)

The control Input **string** is set in order to generate the DOM id of the error message.

**Example:**

`<app-error-messages control="myFormControl" ...`

Will create the error message with the DOM id as follows:

`<span id="myFormControl_error'" ...`

This can then be used where you may need to reference the error message Element; for example with an **aria-desribed-by** attribute on the **input** Element:

`<input formControlName="myFormControl" aria-described-by="myFormControl_error" ...` 

### Input: active (required)

The active Input **boolean** is set in order to activate/display the error message.

**Example:** 

`<app-error-messages control="myFormControl" [active]="myFormGroup.get('myFormControl').errors"></app-error-messages>`

Will display the error message when the FormControl **myFormControl** has errors. 
