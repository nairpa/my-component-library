import { Card } from "@/common/components/card/Card"
import { Button } from "@nairpa/stone-ui"

export const Buttons = () => {
    return (
        <>
        <h2>Button</h2>
          <span>Through buttons we allow the users to take actions, make choices and interact with our web page or application.</span>
          <h3>Variants</h3>
          <span>Buttons can be presented in different variants which may represent distintc actions and intentions to convey.</span>
          <Card>
            <Button color='primary' variant="text" label="Text" />
            <Button color='primary' variant="outline" label="Outline" />
            <Button color='primary' variant="filled" label="Filled" />
          </Card>
          <h4>Code example</h4>
          <code>
            import {`{ Button }`} from "@nairpa/stone-ui"
            <br />
            <br />

            {`export const MyButtonComponent = ( ) => {`}
            <br />
            { `<Button color="primary" variant="text">`}
            <br />
            { `<Button color="primary" variant="outline">`}   
            <br />
            { `<Button color="primary" variant="filled">`}  
            <br />
            {`}`}
          </code>
          <h3>Disable button</h3>
          <span>When a button is disabled we may represent it with a diffent state, making visible the disabled state of the button.</span>
          <Card>
            <Button color='primary' variant="text" label="Text" disabled />
            <Button color='primary' variant="outline" label="Outline" disabled />
            <Button color='primary' variant="filled" label="Filled" disabled />
          </Card>
          <code>
            import {`{ Button }`} from "@nairpa/stone-ui"
            <br />
            <br />

            {`export const MyButtonComponent = ( ) => {`}
            <br />
            { `<Button color="primary" variant="text" disabled>`}
            <br />
            {`}`}
          </code>
          <h3>Colors</h3>
          <Card>
            <Button color='primary' variant="filled" label="Primary" />
            <Button color='secondary' variant="filled" label="Secondary" />
            <Button color='danger' variant="filled" label="Danger" />
            <Button color='default' variant="filled" label="Default" />
          </Card>
          <code>
            import {`{ Button }`} from "@nairpa/stone-ui"
            <br />
            <br />

            {`export const MyButtonComponent = ( ) => {`}
            <br />
            { `<Button color="primary" variant="filled">`}
            <br />
            { `<Button color="secondary" variant="filled">`}
            <br />
            { `<Button color="danger" variant="filled">`}
            <br />
            { `<Button color="default" variant="filled">`}
            <br />
            {`}`}
          </code>
          <h3>Sizes</h3>
          <Card>
            <Button color='primary' variant="text" label="Small" size="sm" />
            <Button color='primary' variant="outline" label="Medium" size="md" />
            <Button color='primary' variant="filled" label="Large" size="lg" />
          </Card>
          <code>
            import {`{ Button }`} from "@nairpa/stone-ui"
            <br />
            <br />

            {`export const MyButtonComponent = ( ) => {`}
            <br />
            { `<Button color="primary" variant="text" size="sm">`}
            <br />
            { `<Button color="primary" variant="outline" size="md">`}
            <br />
            { `<Button color="primary" variant="filled" size="lg">`}
            <br />
            {`}`}
          </code>
          <h3>Disable shadow</h3>
          <Card>
            <Button color='primary' variant="filled" label="Filled" disableShadow />
            <Button color='primary' variant="outline" label="Outline" disableShadow />
          </Card>
          <code>
            import {`{ Button }`} from "@nairpa/stone-ui"
            <br />
            <br />

            {`export const MyButtonComponent = ( ) => {`}
            <br />
            { `<Button color="primary" variant="filled" disableShadow>`}
            <br />
            {`}`}
          </code>
        </>
    )
}
