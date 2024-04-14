import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

function Modal({ handleClose }: { handleClose: () => void }) {
  useLockBodyScroll();

  return (
    <div>
      <dialog
        open
        className="w-[72vw] fixed top-10 m-auto z-10 rounded-lg bg-purple-700 text-white/90 p-4"
      >
        <header className="flex place-content-between mb-6">
          <h2 className="text-2xl font-bold">Modal</h2>
          <button onClick={handleClose}>
            <IoCloseCircle size={24} />
          </button>
        </header>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            eligendi ducimus, voluptas deleniti, placeat dolore veritatis odio
            alias eum dolorum perspiciatis in. Voluptates consequatur similique
            earum vitae, aut quis repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            exercitationem minus? Reiciendis porro architecto debitis nemo! Eum
            maiores delectus nostrum aliquam, aliquid error facilis officia nam
            eaque debitis harum dolore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam consectetur, in quidem adipisci qui possimus
            rem, nihil fuga soluta veniam provident vitae quibusdam enim
            similique quas dolores? Vitae, quia deserunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            voluptas accusantium, odio atque molestias esse soluta odit tempora
            suscipit obcaecati vero voluptate eaque eius ipsum, sed adipisci
            nulla quas repellendus.
          </p>
          <p>
            Odit debitis perspiciatis velit dolorem quae nam, sit voluptatem
            delectus eius tenetur! Nobis atque totam ullam ipsum dolorum odio,
            cum inventore accusamus qui alias maxime quaerat facere quidem dicta
            voluptas.
          </p>
          <p>
            Ad, officia animi. Fugiat ratione aliquid nostrum doloremque
            corporis consequatur similique, fugit molestiae? Ullam quas
            voluptatum ipsum, possimus aspernatur id praesentium tempora eos a
            modi sapiente repellendus eum. Quisquam, deserunt.
          </p>
          <p>
            Quia quas error quaerat fugiat voluptate perspiciatis itaque, soluta
            a id in natus ut doloremque magnam quisquam vero ratione molestiae
            aliquid earum aperiam architecto officiis? Beatae assumenda in
            minima eligendi!
          </p>
          <p>
            Suscipit voluptatum sit assumenda veniam, vero tempora officia,
            illum deleniti magnam nihil harum distinctio delectus blanditiis
            architecto fugit laborum inventore est. Veniam laudantium libero
            sequi consectetur voluptas accusamus reiciendis minus.
          </p>
        </section>
      </dialog>
    </div>
  );
}

export default function UseLockBodyScrollContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
      <main>
        <header>
          <h1>useLockBodyScroll</h1>
        </header>
        {["red", "blue", "green", "pink", "purple", "yellow"].map((color) => {
          return (
            <section
              key={color}
              style={{
                backgroundColor: `${color}`,
                width: "100%",
                height: "50vh",
              }}
            />
          );
        })}
        <button
          className="primary-button block m-auto mt-4  w-min"
          onClick={() => setIsOpen(true)}
        >
          openModal
        </button>
      </main>
    </>
  );
}
