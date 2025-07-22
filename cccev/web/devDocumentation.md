# React app developpement rules
You must make sure that each one of the following rules is respected before going through any merge.

## Organization
- A component should be placed either:
    - In the `component` package
    - Or in `X2-app/src/App/pages/{the name of the page were the component will be placed}/components` if the component is directly linked to specific data of the app
- An utility function, hook or object should be placed in the package `utils`. Note that you shouldn't place something directly linked to some data in the package `utils`.
- A new page should be created according to the templates: `X2-app/templates/PageExample`
- A new store should be created according to the templates: `X2-app/templates/StoreReduxExample`
- A string shouldn't be given directly to a component. You should use I18n and store the string in the translation.json files

## Translation files organization
A simple word or sentence that you think will be re-use elsewhere in the app should be stored in the root of the json file and its key should be the word or the sentence in camel case.

Otherwise you should respect this structure:
```JSON
{
    "the name of the page in camel case": {
        (optionally)"the name of the part of the page in camel case": {
             "the word or the sentence or the summary(if the sentence is to long) in camel case": "the string"
        },
        "the word or the sentence or the summary(if the sentence is to long) in camel case": "the string"
    }
}
```

## Performance
In order to maintain the performances of the app you should respect the following rules:
- Each function passed as a prop to a children should be created in a `useCallback`
- Each complex static object created in a component should be placed in a getter outside the component and assigned in a `useMemo`
- You should never create a complexe object or a function in the jsx code. A jsx element resulting of a map function should be placed in a `useMemo`

❌ What you should not do:
```JSX
export const MyComponent = (props) => {
    const {anArray} = props
    const myObject = [{
        name: "example"
    },
    {
        name: "example"
    }]
    return (
      <div onClick={() => {some behavior}}>
        {anArray.map((item) => (
            <p>
                {myObject[0].name}
            </p>
        ))}
      </div>
    )
}
```
✅ What you should do:
```JSX
export const MyComponent = (props) => {
    const {anArray} = props
    const myObject = useMemo(getObject, [dependencies])
    const onClick = useCallback(
        () => {some behavior},
        [dependencies],
    )
    const myElement = useMemo(() => anArray.map((item) => (
            <p>
                {myObject[0].name}
            </p>
        )), [myObject, anArray]
    )
    return (
      <div onClick={onClick}>
        {myElement}
      </div>
    )
}

const getObject = () => ([{
    name: "example"
},
{
    name: "example"
}])
```

## Styles
To redifine

## Maintainability
Every file component should be less than 200 lines long. Try to destructure it as much as possible to avoid exceeding 150 lines.