# lb-FlexView
This package is containing two layout components (FlexView and View). Theese components can be very helpful when building up the layout of your React JS project.

### Installation
```
$ npm i lb-flex-view --save
```

## Working with FlexView
A FlexView component will output a div (via View component) with preset style properties of flex display. The style properties can easily be overrided via the style prop from the outside. In fact, you should often override the defaults properties when working with the FlexView Component. For example, if you want the flex-direction to be vertical (unlike the default settings) you should override flex-direction property. Note, the component will only override those style properties that are specified in the style prop.

The FlexView component will try to expand its size as much as it gets. 

### Example with the default presets
```
import { FlexView } from 'lb-flex-view'

const Component = () => (
  <FlexView>
    <div>
        Foo
    </div>
    <div>
        Bar
    </div>
  </FlexView>
)

export default Component
```

### Example with overrided presets
```
import { FlexView } from 'lb-flex-view'

const Component = () => (
  <FlexView style={{ flexDirection: 'column' }}>
    <div>
        Foo
    </div>
    <div>
        Bar
    </div>
  </FlexView>
)

export default Component
```

## View
A View component will output a div (default) element. The idea of using View is to defines the position for its children in the DOM tree.

```
import { View } from 'lb-flex-view'

const Component = () => (
  <View style={{ margin: 20 }}>
    <div>
        My content
    </div>
  </View>
)

export default Component
```