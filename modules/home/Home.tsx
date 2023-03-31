import { CustomIcon } from "@/common/components/icon/CustomIcon"
import { useRef } from "react";
import styles from './Home.module.css';
import { useCopyToClipboard } from "@/common/hooks/useCopyToClipboard";

export const HomePage = () => {
    const ref = useRef<HTMLSpanElement>(null);

    const [ handleCopy ] = useCopyToClipboard()

    const handleClick = async (event: HTMLSpanElement | null) => {
        if(event?.textContent) {
            await handleCopy(event.textContent)
        }
    }

    return (
        <div className="page-container">
            <h2>Getting started</h2>
            <p>Stone UI it's a react component library to simplify styling, little code for modern components.</p>

            <h3>How to install</h3>
            <p>To get started, run the following command in your project</p>
            <code className="code-content">
                <span ref={ref}>npm install @nairpa/stone-ui</span>
                <button className={styles.iconButton} onClick={() => handleClick(ref.current)}>
                    <CustomIcon customClass="icon-position" name="content_copy" />
                </button>
            </code>

            <h3>Styling</h3>
            <p>You must import the following css file in your global stylesheet.</p>
            <code className="code-content">
                <span>
                    @import "~@nairpa/stone-ui/dist/cjs/";
                </span>
                <button className={styles.iconButton} onClick={() => handleClick(ref.current)}>
                    <CustomIcon customClass="icon-position" name="content_copy" />
                </button>
            </code>

            <h3>Style variables</h3>
            <p>Here is a list with the css variables that can be modified to suit your needs.</p>
            <table>
              <tr>
                <th>Variable</th>
                <th>Component</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>box-shadow</td>
                <td>button</td>
                <td>It modifies the shadow applied to the component button</td>
              </tr>
              <tr>
                <td>color-primary</td>
                <td>-</td>
                <td>It modifies the primary color</td>
              </tr>
              <tr>
                <td>color-primary-outline</td>
                <td>button</td>
                <td>It modifies the primary color for the outline in buttons</td>
              </tr>
              <tr>
                <td>color-primary-hover</td>
                <td>-</td>
                <td>It modifies the color of the hover effect in primary color</td>
              </tr>
              <tr>
                <td>color-secondary</td>
                <td>-</td>
                <td>It modifies the secondary color</td>
              </tr>
              <tr>
                <td>color-secondary-outline</td>
                <td>button</td>
                <td>It modifies the secondary color for the outline in buttons</td>
              </tr>
              <tr>
                <td>color-secondary-hover</td>
                <td>-</td>
                <td>It modifies the color of the hover effect in secondary color</td>
              </tr>
              <tr>
                <td>color-default</td>
                <td>-</td>
                <td>It modifies the default color</td>
              </tr>
              <tr>
                <td>color-default-outline</td>
                <td>button</td>
                <td>It modifies the default color for the outline in buttons</td>
              </tr>
              <tr>
                <td>color-default-hover</td>
                <td>-</td>
                <td>It modifies the color of the hover effect in default color</td>
              </tr>
              <tr>
                <td>color-danger</td>
                <td>-</td>
                <td>It modifies the danger color</td>
              </tr>
              <tr>
                <td>color-danger-outline</td>
                <td>button</td>
                <td>It modifies the danger color for the outline in buttons</td>
              </tr>
              <tr>
                <td>color-danger-hover</td>
                <td>-</td>
                <td>It modifies the color of the hover effect in danger color</td>
              </tr>
              <tr>
                <td>text-disabled</td>
                <td>-</td>
                <td>Text color when state is disabled</td>
              </tr>
              <tr>
                <td>text</td>
                <td>-</td>
                <td>Text color</td>
              </tr>
              <tr>
                <td>text-light</td>
                <td>-</td>
                <td>Text color when background is dark</td>
              </tr>
              <tr>
                <td>size-sm</td>
                <td>button</td>
                <td>Height for small button component</td>
              </tr>
              <tr>
                <td>size-md</td>
                <td>button</td>
                <td>Height for medium button component</td>
              </tr>
              <tr>
                <td>size-lg</td>
                <td>button</td>
                <td>Height for large button component</td>
              </tr>
              <tr>
                <td>border-radius</td>
                <td>-</td>
                <td>Size for the border radius</td>
              </tr>
            </table>
        </div>
    )
}