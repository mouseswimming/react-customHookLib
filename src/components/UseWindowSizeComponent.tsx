/* 
The useWindowSize hook is a useful for retrieving and tracking the dimensions of the browser window within a React component. It attaches an event listener to the “resize” event, ensuring that the size is updated dynamically whenever the window is resized. The hook returns the “size” object, enabling components to access and utilize the window dimensions for various purposes, such as responsive layout adjustments, conditional rendering, or calculations based on the available space.
*/

import useWindowSize from "../hooks/useWindowSize";

type BrowserProps = {
  size: {
    width: number;
    height: number;
  };
};

function Browser({ size }: BrowserProps) {
  return (
    <div
      data-testid="browser"
      className="border m-auto mt-4"
      style={{ width: size.width / 4, height: size.height / 4 }}
    />
  );
}

export default function UseWindowSizeComponent() {
  const size = useWindowSize();

  return (
    <section className="w-max m-auto text-center pt-10 min-w-[50vw]">
      <h1>useWindowSize</h1>
      <p>Resize the window</p>
      <table className="border border-gray-200 w-full border-spacing-2 mt-6">
        <tbody>
          <tr>
            <th className="bg-slate-500 w-20">width</th>
            <td className="border border-gray-200">{size.width}</td>
          </tr>
          <tr>
            <th className="bg-slate-500">height</th>
            <td className="border border-gray-200"> {size.height}</td>
          </tr>
        </tbody>
      </table>
      <Browser size={size} />
    </section>
  );
}
