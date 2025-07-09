## One Vue Component Per File
Typically Vue components will be stored in their own file. The usual directory structure is `js/components/AppButton.js`

This type of file is known as a JavaScript module. This is a type of JavaScript file that can `export` it's contents to the outside world.

```js
export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-2 py-1 disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    data() {
        return {
            processing: true
        };
    }
}
```

Once the export module has been defined it needs to be imported to be used. The script tag also needs to be given the type="module" attribute for Vue to be able to use the imported module.

```js
<script type="module">
    import AppButton from "./js/components/AppButton.js";
</script>
```