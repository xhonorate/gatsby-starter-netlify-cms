const ButtonComponent = {
    // Internal id of the component
    id: "button",
    // Visible label
    label: "Button",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      {
        name: 'color',
        label: 'Color',
        widget: "select",
        default: 'primary',
        options: ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"],
      },
      {
        name: 'variant',
        label: 'Variant',
        widget: 'select',
        default: 'solid',
        options: ["solid", "outline", "ghost", "link"],
      },
      {
        name: 'text',
        label: 'Text',
        widget: 'string',
        default: 'Button'
      },
      {
        name: 'link',
        label: 'Link To',
        widget: "string",
        default: "#"
      }
      /*
      {
        name: 'link',
        label: 'Link To',
        widget: "relation",
        collection: "pages",
        search_fields: ["title"],
        value_field: "{{slug}}",
      }*/
    ],
    // Regex pattern used to search for instances of this block in the markdown document.
    // Patterns are run in a multline environment (against the entire markdown document),
    // and so generally should make use of the multiline flag (`m`). If you need to capture
    // newlines in your capturing groups, you can either use something like
    // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
    // which will cause `(.*)` to match newlines as well.
    //
    // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
    // `(.*?)` vs `(.*)`), especially if matching against newline characters.
    pattern: /^\s*?<Button\s*?variant='(.*?)' colorScheme='(.*?)' to='(.*?)'>(.*?)<\/Button>/ms,
    // Given a RegExp Match object
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
    // return an object with one property for each field defined in `fields`.
    //
    // This is used to populate the custom widget in the markdown editor in the CMS.
    fromBlock: function(match) {
        return {
            variant: match[1],
            color: match[2],
            link: match[3],
            text: match[4],
        }
    },
    // Given an object with one property for each field defined in `fields`,
    // return the string you wish to be inserted into your markdown.
    //
    // This is used to serialize the data from the custom widget to the
    // markdown document
    toBlock: function(data) {
      return `
  <Button variant='${data.variant}' colorScheme='${data.color}' to='${data.link}'>${data.text}</Button>
  `;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(data) {
      return this.toBlock(data);
    }
}

export default ButtonComponent