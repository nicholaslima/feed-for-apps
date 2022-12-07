import styles from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1669382485208-83447d017470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/nicholaslima.png" />

        <strong>Nicholas Lima</strong>
        <span>web developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
