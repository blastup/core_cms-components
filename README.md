# README
Shared components used for the Apps Store apps created for Reactive Online, Cardlink e-grow & Kudima GmbH.

### Components includes
  - Button
  - Codemirror
  - EntityLoader
  - FlashMessage
  - FlashMessages
  - GlobalLoader
  - InputField
  - Modal
  - ModalAlert
  - NumberInput
  - RadioInput
  - SelectInput
  - Tabs
  - TextEditor

* The list will keep on being updated with additional packages.

### Components props

<b> Button Props </b>
- className: If you would like a custom css class for your button.
- onClick: Anonymous function for your button that can also include a link.
- value: The text of your button.
- disabled: Boolean for disabling the button

<b> Codemirror </b>
- value: Current value
- onChange: Function to pass change value

<b> EntityLoader </b>
- position: You can choose from right, left, center
- absolute: You can choose from absolute, relative or initial. Defaults to absolute.
- fullPage: You can choose from full-page or none
- size: This defines the size of your loader. You can choose from small, medium, large, xlarge. Defaults to small.

<b> FlashMessage </b><br/>
Props soon available.

<b> FlashMessages </b><br/>
Props soon available.

<b> GlobalLoader </b><br/>
No props available for this loader. It always takes the full with and height of your screen covering everything else.

<b> InputField </b>
- translatable: You can choose whether you want the input field to be translatable thus you need to pass the available languages available from your website's language settings.
- classes: If you would like a custom css classes for your input. Divide with space.
- label: The label of your input.
- help: The help text for your input field. This will be shown as an help icon and on mouse over it will display the help text.
- children: Content of your input field. input html tag is the most common.

<b> Modal </b>
- visible: true or false
- closeModal: onClick function on how to close your modal.
- mode: The size of your modal. You can choose from small, medium, large, xlarge. Defaults to medium.
- children: Content of your modal. Allows HTML or render another component.
- wrapperClasses: Additional classes for your children content. flex-box & flex-column are already added as wrapperClasses.
- showConfirmation: If you would like to show confirmation for the action. Defaults to false.
- confirmationText: The text to be displayed for your confirmation.
- setConfirmation: Set function for the confirmation.
- action: The action for the save of the modal. Function to be provided.
- actionIcon: Icon for the cancel action. Fontawesome 6 Pro icon to be provided. You can use someting like `fa-light fa-check`.
- actionText: Text for the confirm action. Defaults to save.
- disableAction: Disable the action. Defaults to false.
- cancelAction: Action to close or cancel the modal.
- cancelActionIcon: Icon for the cancel action. Fontawesome 6 Pro icon to be provided. You can use someting like `fa-light fa-xmark`.
- cancelActionText: Text for the cancel action. Defaults to cancel.
- footerLeftActions: Action shown on the left of the footer.
- footerMiddleActions: Action shown on the middle of the footer.

<b> ModalAlert </b>
- visible: true or false
- closeModal: onClick function on how to close your modal.
- action: The action for the save of the modal. Function to be provided.
- actionText: Text for the confirm action. Defaults to confirm.
- cancelActionText: Text for the cancel action. Defaults to cancel.
- alert: Content of your modal. Allows HTML or render another component.

<b> NumberInput </b>
This is a custom react number input with keyboard shortcuts available fo the user.
- number: Nnumber to be provided
- setNumber: Your set function for the number
- type: The type of your number. Defaults to integer
- step: The increase step of your number's value
- min: Your minimum number value
- max: Your maximum number value

<b> RadioInput </b>
- identifier: Your unique identifier. Defaults to key.
- options: Accepts array of objects for every option. Object should include: key, option, isCurrent, title, itemRenderer

<b> SelectInput </b><br/>
The SelectInput includes the InputField component so you need to pass the additional props for the InputField component to your SelectInput.
- wrapperClasses: Additional classes for your input field.
- label: The label of your input.
- help: The help text for your input field. This will be shown as an help icon and on mouse over it will display the help text.
- icon: Icon for the drop down select. Fontawesome 6 Pro icon to be provided. Defaults to `fa-chevron-down`
- toggledIcon: Icon for the drop down select when opened. Fontawesome 6 Pro icon to be provided. Defaults to `fa-chevron-up`
- currentOption: The current option for your select.
- setCurrentOption: Function to set the current option for your select.
- options: Accepts array of objects for every select option. Object should include: value, option, title, itemRenderer

<b> Tabs </b>
- tabs: Accepts an array of objects as values for your tabs. The object should have the following format: key, title, icon, onClick. The icon accepts Fontawesome 6 Pro icon in the following format: `fa-check`
- currentTab: The key of your current tab
- setCurrentTab: Function to set the current tab
- extraClasses: Additional css classes for your tabs. You can use one of the following: secondary (boxed tab), vertical (tabs that are vertical - one under the other)

<b> TextEditor </b><br/>
Our text editor uses React Tiptap editor.
- key: A unique key for your text editor field
- content: The current content of your editor
- setContent: Function to set the current content

##### Usage rights
This package can only be used by 3rd party developers when creating apps for the
Apps Store of Reactive Online, Cardlink e-grow & Kudima GmbH.

##### Copyright
This package is maintained by Blastup Ltd.
